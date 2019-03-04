import {
  GOODREADS_KEY,
} from 'Src/config';
import logger from 'Src/logger';
import {
  getById,
} from 'Src/store/users';
import {
  decrypt,
} from 'Src/encryption'
import Goodreads from 'Src/authentication/goodreads';
import querystring from 'querystring';
import {
  xml2js,
} from 'xml-js';

export default async function handleBookReview(request, response, next) {
  const user = await getById(request.currentUser.id);
  const accessToken = decrypt(user.access_token);
  const accessTokenSecret = decrypt(user.access_token_secret);
  const queryParameters = querystring.stringify({ key: GOODREADS_KEY, user_id: user.goodreads_user_id, book_id: request.params.book_id });
  Goodreads.get(
    `https://www.goodreads.com/review/show_by_user_and_book.xml?${queryParameters}`,
    accessToken,
    accessTokenSecret,
    async (error, data) => {
    if (error) {
      logger.error(error);
      if (error.statusCode === 404) {
        response.statusCode = 404;
        response.json({
          message: 'Not able to find book review',
        });
      } else {
        response.statusCode = 400;
        response.json({
          message: 'Error fetching Goodreads book review information',
        });
      }
    } else {
      response.statusCode = 200;
      response.json(xml2js(data));
    }
  });
}
