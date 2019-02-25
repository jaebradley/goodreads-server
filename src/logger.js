import winston from 'winston';

export default winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'goodreads-server' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
