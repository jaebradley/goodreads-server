import jwt from 'jsonwebtoken';

import {
  JWT_SECRET,
} from './config';

function generateJWT({ userId }) {
  return jwt.sign({
    userId,
  },
  JWT_SECRET,
  {
    // expire every 30 days
    expiresIn: 60 * 60 * 24 * 30,
  });
}

export default generateJWT;
