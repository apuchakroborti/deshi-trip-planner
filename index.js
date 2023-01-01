import {express} from 'express';
import {bodyParser} from 'body-parser';

import {userRoutes} from './routes/users.js';
import {placeRoutes} from './routes/placeRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(express.json());

var corOptions = {
    origin: 'https://localhost: 8081'
}
app.use(cors(corOptions));
app.use(express.urlencoded({extended: true}));

// testing api
app.get('/test', (req, res)=>{
    res.json({message: "Hello from API"});
});


app.use('/users', userRoutes);

app.get('/', (req, res)=>{
    console.log('[TEST]');
    res.send('Hello from Homepage..');
})

// Sequalize application
app.use('/api/places', placeRoutes);


app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`));