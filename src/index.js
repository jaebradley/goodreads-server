import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import expressJWT from 'express-jwt';

import {
  JWT_SECRET,
  PORT,
} from './config';
import api from './routes/api';
import identifyCurrentUser from './middlewares/identifyCurrentUser';

const CORS_OPTIONS = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const UNAUTHENTICATED_PATHS = [
  '/api/authentication/request_token',
  '/api/authentication/access_token',
];

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressJWT({ secret: JWT_SECRET }).unless({ path: UNAUTHENTICATED_PATHS }))
app.use(identifyCurrentUser.unless({ path: UNAUTHENTICATED_PATHS }));

app.use('/api', api);

app.listen(PORT);
