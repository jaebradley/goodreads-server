import Router from 'express-promise-router';

import handleAddBookToShelf from 'Src/requests/api/user/shelves/handleAddBook';

const router = Router();

router.post('/:shelf_name/books', handleAddBookToShelf);

export default router;
