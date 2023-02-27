import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';
config();
const app: Application = express();

app.listen('3001', (): void => {
	console.log(process.env.PORT);
	console.log('App listening on PORT 3001');
});
