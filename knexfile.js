const dotenv = require('dotenv');

dotenv.config();

const MIGRATIONS = Object.freeze({
  directory: `${__dirname}/db/migrations`,
  tableName: 'knex_migrations',
});

const configuration = Object.freeze({
  development: {
    client: 'pg',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: MIGRATIONS,
    connection: process.env.DATABASE_URL,
  },
  staging: {
    client: 'pg',
    migrations: MIGRATIONS,
    connection: process.env.DATABASE_URL,
  },
  production: {
    client: 'pg',
    migrations: MIGRATIONS,
    connection: process.env.DATABASE_URL,
  },
});

// knex needs the config exported via module.exports and not as the default export
module.exports = configuration;
