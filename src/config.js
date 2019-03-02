import dotenv from 'dotenv';

dotenv.config();

const {
  GOODREADS_KEY,
  GOODREADS_SECRET,
  PORT,
  ENVIRONMENT,
  JWT_SECRET,
  ENCRYPTION_PASSWORD,
} = process.env;

export {
  GOODREADS_KEY,
  GOODREADS_SECRET,
  PORT,
  ENVIRONMENT,
  JWT_SECRET,
  ENCRYPTION_PASSWORD,
};
