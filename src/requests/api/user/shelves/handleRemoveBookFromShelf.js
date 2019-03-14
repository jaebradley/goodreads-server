import logger from 'Src/logger';
import {
  getById,
} from 'Src/store/users';
import {
  decrypt,
} from 'Src/encryption'
import Goodreads from 'Src/authentication/goodreads';
import {
  xml2js,
} from 'xml-js';
import qs from 'query-string';

export default async function handleRemoveBookFromShelf(request, response, next) {
  const user = await getById(request.currentUser.id);
  const accessToken = decrypt(user.access_token);
  const accessTokenSecret = decrypt(user.access_token_secret);
  const parameters = qs.stringify({ a: 'remove' });
  Goodreads.post(
    `https://www.goodreads.com/shelf/add_to_shelf.xml?${parameters}`,
    accessToken,
    accessTokenSecret,
    {
      name: decodeURIComponent(request.params.shelf_name),
      book_id: request.params.book_id,
    },
    'json',
    async (error, data) => {
    if (error) {
      logger.error(error);
      response.statusCode = error.statusCode;
      response.json({
        message: 'Error removing book from shelf',
      });
    } else {
      response.statusCode = 200;
      response.json(xml2js(data, { compact: true, spaces: 4 }));
    }
  });
}
