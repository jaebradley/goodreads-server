const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} = process.env;

const MIGRATIONS = Object.freeze({
  directory: `${__dirname}/db/migrations`,
  tableName: 'knex_migrations',
});
const CONNECTION = Object.freeze({
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
  user: DATABASE_USER,
});

const configuration = Object.freeze({
  development: {
    client: 'postgresql',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: MIGRATIONS,
    connection: CONNECTION,
  },
  staging: {
    client: 'postgresql',
    migrations: MIGRATIONS,
    connection: CONNECTION,
  },
  production: {
    client: 'postgresql',
    migrations: MIGRATIONS,
    connection: CONNECTION,
  },
});

// knex needs the config exported via module.exports and not as the default export
module.exports = configuration;
