import Router from 'express-promise-router';

import handleGoodReadsBookIdSearch from 'Src/requests/api/books/handleGoodReadsBookIdSearch';

const router = Router();

router.get('/id/search', handleGoodReadsBookIdSearch);

export default router;
