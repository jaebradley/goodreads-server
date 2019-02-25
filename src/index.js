import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

import {
  PORT,
} from './config';

import api from './routes/api';

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(PORT);
