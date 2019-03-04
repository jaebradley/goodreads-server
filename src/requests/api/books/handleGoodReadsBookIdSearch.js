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

export default async function handleGoodReadsBookIdSearch(request, response, next) {
  const user = await getById(request.currentUser.id);
  const accessToken = decrypt(user.access_token);
  const accessTokenSecret = decrypt(user.access_token_secret);
  const queryParameters = querystring.stringify({ key: GOODREADS_KEY, isbn: request.query.isbn });
  Goodreads.get(
    `https://www.goodreads.com/book/isbn_to_id?${queryParameters}`,
    accessToken,
    accessTokenSecret,
    async (error, data) => {
    if (error) {
      response.statusCode = 400;
      response.json({
        message: 'Error fetching Goodreads book review information',
      });
    } else {
      if (data) {
        // Goodreads response is text
        // First word is Goodreads Book ID
        // Remaining part of response is "random-length HTML comment"
        const firstWord = data.trim().split('\n')[0];
        response.statusCode = 200;
        response.json({
          id: firstWord,
        });
      } else {
        response.statusCode = 400;
        response.json({
          message: 'Unexpected Goodreads response when searching for book',
        });
      }
    }
  });
}
