import Router from 'express-promise-router';

import books from './books';

const router = Router();

router.use('/books', books);

export default router;
