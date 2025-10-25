// IMPORTS
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

// ENV CONFIG
const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = nodeEnv === 'production' ? '.env.prod' : '.env.local';
dotenv.config({ path: envFile });
console.log(`✅ Loaded envFile`);
console.log('... on ' + nodeEnv + ' environment 🚀');

const app: Express = express();

// TOP MIDDLEWARES

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('X-Node-Port', process.env.APP_PORT || '5000');
  next();
});
// ROUTES
const PORT = process.env.APP_PORT;
app.get('/', (req: Request, res: Response) => {
  // throw new Error("Testing gin index");
  res.send(`
    <code>
    Node_Express Server Alive 🛩️🛩️🛩️ 
    </code>
    <p> Served from port: <strong> ${PORT}</strong></p>
    `);
});

export default app;
