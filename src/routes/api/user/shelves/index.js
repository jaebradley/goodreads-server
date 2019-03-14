import Router from 'express-promise-router';

import handleAddBookToShelf from 'Src/requests/api/user/shelves/handleAddBook';
import handleRemoveBookFromShelf from 'Src/requests/api/user/shelves/handleRemoveBookFromShelf';

const router = Router();

router.post('/:shelf_name/books', handleAddBookToShelf);
router.delete('/:shelf_name/books/:book_id', handleRemoveBookFromShelf);

export default router;
