import knex from 'knex';

import knexfile from '../../knexfile';
import {
  ENVIRONMENT,
} from '../config';

const configuration = knexfile[ENVIRONMENT];

export default knex(configuration);
