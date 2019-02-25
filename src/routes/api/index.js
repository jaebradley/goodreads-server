import Router from 'express-promise-router';

import authentication from './authentication';

const router = Router();

router.use('/authentication', authentication);

export default router;
