import Router from 'express-promise-router';

import books from './books';
import shelves from './shelves';

const router = Router();

router.use('/books', books);
router.use('/shelves', shelves);

export default router;
