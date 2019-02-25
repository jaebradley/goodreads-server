import dotenv from 'dotenv';

dotenv.config();

const {
  GOODREADS_KEY,
  GOODREADS_SECRET,
  PORT,
  ENVIRONMENT,
  JWT_SECRET,
} = process.env;

export {
  GOODREADS_KEY,
  GOODREADS_SECRET,
  PORT,
  ENVIRONMENT,
  JWT_SECRET,
};
