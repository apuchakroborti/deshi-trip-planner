import { Sequelize, DataTypes, Model } from "sequelize";




// connect db
const connection = new Sequelize("tripplanner", "apu", "tigerit");

const User = connection.define("users", {
    first_name: Sequelize.String,
    last_name: Sequelize.String,
    email: Sequelize.String,
    age: DataTypes.Integer
});
connection.sync();

export const addUser = (req, res)=>{
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
};

// get users
export const getUsers = (req, res)=>{
    
    let sql = 'select * from users';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
};

// get user by id
export const getUserById=(req, res)=>{
    
    let sql = `select * from users where id= ${req.params.id}`;

    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
};

// update user by id
export const updateUserById = (req, res)=>{
    
    let first_name = `updated first name Apu Kumar ${req.params.id}`;
    console.log(`User updating new first name: ${first_name}`);

    let sql = `Update users set first_name = '${first_name}' where id = ${req.params.id} `;

    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
};

export const deleteUserById = (req, res)=>{
    console.log(`Deleting user id: ${req.params.id}`);
    let sql = `delete from users where id = ${req.params.id} `;
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
};