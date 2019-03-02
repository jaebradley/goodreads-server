import {
  getById,
} from 'Src/store/users';
import {
  decrypt,
} from 'Src/encryption'
import logger from 'Src/logger';
import Goodreads from 'Src/authentication/goodreads';

export default async function handleUser(request, response, next) {
  const user = await getById(request.currentUser.id);
  const accessToken = decrypt(user.access_token);
  const accessTokenSecret = decrypt(user.access_token_secret);
  Goodreads.get('https://www.goodreads.com/api/auth_user.json', accessToken, accessTokenSecret, async (error, data) => {
    if (error) {
      logger.error(error);
      response.statusCode = 400;
      response.json({
        message: 'Error fetching Goodreads user information',
      });
    } else {
      response.statusCode = 200;
      response.json(JSON.parse(data));
    }
  });
}
