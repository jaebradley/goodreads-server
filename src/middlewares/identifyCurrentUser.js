import unless from 'express-unless';
import {
  getById,
} from '../store/users';

async function identifyCurrentUser(request, _, next) {
  if (request.user.userId) {
    const user = await getById(request.user.userId);
    request.currentUser = user;
  }

  next();
}

identifyCurrentUser.unless = unless;

export default identifyCurrentUser;
