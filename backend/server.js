import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import tamaRoutes from './routes/tama.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON data

app.use("/api/tama", tamaRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});

