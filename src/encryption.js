import crypto from 'crypto';

import {
  ENCRYPTION_PASSWORD,
} from './config';

const ALGORITHM = 'aes-256-ctr';

function encrypt(text){
  const cipher = crypto.createCipher(ALGORITHM, ENCRYPTION_PASSWORD)
  let crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  const decipher = crypto.createDecipher(ALGORITHM, ENCRYPTION_PASSWORD)
  let dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

export {
  encrypt,
  decrypt,
};
