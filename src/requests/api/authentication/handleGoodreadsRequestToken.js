import logger from 'Src/logger';
import Goodreads from 'Src/authentication/goodreads';

export default async function handleGoodreadsRequestToken(request, response, next) {
  Goodreads.getOAuthRequestToken(
    null,
    function(error, oauthToken, oauthTokenSecret) {
      if (error) {
        logger.error(error);
        response.statusCode = 400;
        response.json({
          message: 'Error occurred while attempting to generate Goodreads OAuth request token',
        });
      } else {
        logger.info(oauthToken);
        logger.info(oauthTokenSecret);
        response.statusCode = 200;
        response.json({
          token: oauthToken,
          secret: oauthTokenSecret,
        });
      }
    }
  )
}
