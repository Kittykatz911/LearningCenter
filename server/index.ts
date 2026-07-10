import express from 'express';
import signupRouter from './router/signUp-db.ts';
import cors from 'cors';

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // parses incoming JSON bodies

app.use('/api', signupRouter); // now available at POST /api/signup

app.listen(3001, () => console.log('Server running on port 3001'));