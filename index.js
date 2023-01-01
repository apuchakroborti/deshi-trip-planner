import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(express.json());

// for mysql database start
import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'apu',
    password: 'tigerit',
    database: 'tripplanner'
});

// connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
})
// create db
app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE tripplanner';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// create users table
app.get('/create-users-table', (req, res)=>{
    let sql = 'CREATE TABLE users(id bigint AUTO_INCREMENT, first_name varchar(255), last_name varchar(255), email varchar(255), age int, primary key(id) )';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Users table has been created...');
    });
});

// Insert user 1
app.post('/add-user', (req, res)=>{
    let {
        first_name,
        last_name,
        email,
        age
    } = req.body;

    let sql = 'Insert into users (first_name, last_name, email, age ) VALUES(?, ?, ?, ?) ';
    db.query(sql, [first_name, last_name, email, age], (err, result)=>{
        if(err)throw err;
        
        res.send('User has been created...');
    });
});

// get users
app.get('/get-users', (req, res)=>{
    
    let sql = 'select * from users';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
});

// get user by id
app.get('/get-users/:id', (req, res)=>{
    
    let sql = `select * from users where id= ${req.params.id}`;

    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
});

// update user by id
app.patch('/update-user/:id', (req, res)=>{
    
    let first_name = `updated first name Apu Kumar ${req.params.id}`;
    console.log(`User updating new first name: ${first_name}`);

    let sql = `Update users set first_name = '${first_name}' where id = ${req.params.id} `;

    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
});

app.delete('/delete-user/:id', (req, res)=>{
    console.log(`Deleting user id: ${req.params.id}`);
    let sql = `delete from users where id = ${req.params.id} `;
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
});

// for mysql database end

app.use('/users', userRoutes);

app.get('/', (req, res)=>{
    console.log('[TEST]');
    res.send('Hello from Homepage..');
})



app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`));