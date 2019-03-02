import Router from 'express-promise-router';

import handleUser from 'Src/requests/api/handleUser';
import handleShelves from 'Src/requests/api/handleShelves';
import handleReviewStatistics from 'Src/requests/api/handleReviewStatistics';

import authentication from './authentication';

const router = Router();

router.use('/authentication', authentication);

router.get('/user', handleUser);
router.get('/user/shelves', handleShelves);
router.get('/book/review_statistics', handleReviewStatistics);

export default router;
