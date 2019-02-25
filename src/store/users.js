import knex from './knex';

const COLUMNS = [
  'id',
  'goodreads_user_id',
  'access_token',
  'access_token_secret',
  'created_at',
  'updated_at',
];

async function create({ goodreadsUserId, accessToken, accessTokenSecret }) {
  return knex('users').insert({
    goodreads_user_id: goodreadsUserId,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
  });
}

async function getById(id) {
  return knex('users').select(COLUMNS).where('id', id).first();
}

async function getByGoodreadsUserId(goodreadsUserId) {
  return knex('users').select(COLUMNS).where('goodreads_user_id', goodreadsUserId).first();
}

async function updateGoodreadsAuthentication({ goodreadsUserId, accessToken, accessTokenSecret }) {
  return knex('users').update({
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
  }).where('goodreads_user_id', goodreadsUserId);
}

export {
  create,
  getById,
  getByGoodreadsUserId,
  updateGoodreadsAuthentication,
};
