import Router from 'express-promise-router';

import handleGoodReadsBookIdSearch from 'Src/requests/api/books/handleGoodReadsBookIdSearch';
import handleBooksSearch from 'Src/requests/api/books/handleSearch';

const router = Router();

router.get('/id/search', handleGoodReadsBookIdSearch);
router.get('/search', handleBooksSearch);

export default router;
