import NodeOAuth from 'oauth';
import {
  xml2js
} from 'xml-js';
import bcrypt from 'bcrypt';

import logger from 'Src/logger';
import Goodreads from 'Src/authentication/goodreads';
import {
  create,
  getByGoodreadsUserId,
  updateGoodreadsAuthentication,
} from 'Src/store/users';
import generateJWT from 'Src/generateJWT';

export default async function handleGoodreadsAccessToken(request, response, next) {
  Goodreads.getOAuthAccessToken(
    request.body.requestToken,
    request.body.requestTokenSecret,
    null,
    function(error, oauthToken, oauthTokenSecret, results) {
      if (error) {
        logger.error(error);
        response.statusCode = 400;
        response.json({
          message: 'Error occurred while attempting to generate Goodreads OAuth access token',
        });
      } else {
        Goodreads.get('https://www.goodreads.com/api/auth_user', oauthToken, oauthTokenSecret, async (error, data) => {
          if (error) {
            response.statusCode = 400;
            response.json({
              message: 'Error fetching Goodreads user information',
            });
          } else {
            const goodreadsUserData = xml2js(data);
            logger.info(goodreadsUserData);
            const goodreadsUserId = goodreadsUserData.elements[0].elements[1].attributes.id;

            const [
              hashedAccessToken,
              hashedAccessTokenSecret,
            ] = await Promise.all([
              bcrypt.hash(oauthToken, 10),
              bcrypt.hash(oauthTokenSecret, 10),
            ]);

            let user = await getByGoodreadsUserId(goodreadsUserId);

            if (user) {
              await updateGoodreadsAuthentication({
                goodreadsUserData,
                accessToken: hashedAccessToken,
                accessTokenSecret: hashedAccessTokenSecret,
              });
            } else {
              user = await create({
                goodreadsUserId,
                accessToken: hashedAccessToken,
                accessTokenSecret: hashedAccessTokenSecret,
              });
            }

            response.statusCode = 200;
            response.json({
              jwt: generateJWT({ userId: user.id }),
            });
          }
        });
      }
    }
  )
}
