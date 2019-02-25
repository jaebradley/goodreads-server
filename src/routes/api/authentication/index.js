import Router from 'express-promise-router';

import handleGoodreadsRequestToken from 'Src/requests/api/authentication/handleGoodreadsRequestToken';
import handleGoodreadsAccessToken from 'Src/requests/api/authentication/handleGoodreadsAccessToken';

const router = Router();

router.post('/request_token', handleGoodreadsRequestToken);
router.post('/access_token', handleGoodreadsAccessToken);

export default router;
