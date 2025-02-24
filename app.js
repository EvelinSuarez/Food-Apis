// app.js
import express, { json } from 'express';
const app = express();

app.use(json());

import empleadoRoutes from './routes/empleadoRoutes.js';

app.use('/employee', empleadoRoutes);

export default app;
