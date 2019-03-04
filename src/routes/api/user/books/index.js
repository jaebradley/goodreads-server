import Router from 'express-promise-router';

import handleBookReview from 'Src/requests/api/user/books/handleBookReview';

const router = Router();

router.get('/:book_id/review', handleBookReview);

export default router;
