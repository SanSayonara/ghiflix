import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import jsend from 'jsend';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const allowedDomains: string[] = require('../allowedDomains.json');

const isDev: Boolean = process.env.NODE_ENV === 'development';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cookieParser());
app.use(compression());
app.use(jsend.middleware);
app.use(bodyParser.json());

if (isDev) {
  app.use(cors());
} else {
  app.use(cors({ origin: allowedDomains }));
}

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
