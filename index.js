import express from 'express';
import pkg from 'body-parser';
const {bodyParser} = pkg;

import {userRoutes} from './routes/users.js';
import {router } from './routes/placeRouter.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

var corOptions = {
    origin: 'https://localhost: 8081'
}
app.use(cors(corOptions));
app.use(express.urlencoded({extended: true}));


// Test APIs
app.use('/users', userRoutes);

// Sequalize application
app.use('/api/places', router);


app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`));