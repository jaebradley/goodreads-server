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

export default async function handleReviewStatistics(request, response, next) {
  const user = await getById(request.currentUser.id);
  const accessToken = decrypt(user.access_token);
  const accessTokenSecret = decrypt(user.access_token_secret);
  const isbnParameters = querystring.stringify({ isbns: request.query.isbn, key: GOODREADS_KEY });
  Goodreads.get(
    `https://www.goodreads.com/book/review_counts.json?${isbnParameters}`,
    accessToken,
    accessTokenSecret,
    async (error, data) => {
    if (error) {
      logger.error(error);
      response.statusCode = 400;
      response.json({
        message: 'Error fetching Goodreads book review information',
      });
    } else {
      const reviewData = JSON.parse(data);
      const review = reviewData.books.length ? reviewData.books[0] : [];
      response.statusCode = 200;
      response.json(review);
    }
  });
}
