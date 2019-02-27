import Router from 'express-promise-router';

import handleUser from 'Src/requests/api/handleUser';
import handleShelves from 'Src/requests/api/handleShelves';

import authentication from './authentication';

const router = Router();

router.use('/authentication', authentication);

router.get('/user', handleUser);
router.get('/user/shelves', handleShelves);

export default router;
