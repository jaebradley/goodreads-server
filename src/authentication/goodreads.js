import NodeOAuth from 'oauth';

import {
  GOODREADS_KEY,
  GOODREADS_SECRET,
} from 'Src/config';

export default new NodeOAuth.OAuth(
  'https://www.goodreads.com/oauth/request_token',
  'https://www.goodreads.com/oauth/access_token',
  GOODREADS_KEY,
  GOODREADS_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);
