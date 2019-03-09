import {
  xml2js,
} from 'xml-js';
import axios from 'axios';

import {
  GOODREADS_KEY,
} from 'Src/config';
import logger from 'Src/logger';

export default async function handleSearch(request, response, next) {
  let searchResponse;
  try {
    searchResponse = await axios.get(
      'https://www.goodreads.com/search/index.xml',
      {
      params: {
        key: GOODREADS_KEY,
        q: request.query.title,
        'search[field]': 'title',
      },
    });
  } catch (e) {
    logger.error(e);
    response.status = e.response.status;
    response.json({
      message: 'Unable to search for book',
    });
    return null;
  }

  const data = xml2js(searchResponse.data, { compact: true, spaces: 4 });
  const bestBook = data.GoodreadsResponse.search.results.work.find(work => work.best_book.author.name._text === request.query.author);
  response.statusCode = 200;
  response.json(bestBook);
  return null;
}
