// for mysql database start
import mysql from 'mysql2';
import {addUser, getUsers, getUserById, updateUserById, deleteUserById  } from '../controllers/mysql_users.js';



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
app.post('/add-user', addUser);
// get users
app.get('/get-users', getUsers);
// get user by id
app.get('/get-users/:id', getUserById);
// update user by id
app.patch('/update-user/:id', updateUserById);
// delete user by id
app.delete('/delete-user/:id', deleteUserById);
// for mysql database end