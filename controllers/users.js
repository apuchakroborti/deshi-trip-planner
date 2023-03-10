import {v4 as uuid4} from 'uuid';
const users =[];

//all routes in here are starting with /users
export const getUsers = (req, res)=>{
    res.send(users);
};

export const getUser = (req, res)=>{
    const {id} = req.params.id;
    console.log(`id: ${id}`);
    console.log(`Users: ${users}`);

    const foundUser = users.find((user)=> user.id === id );
    console.log(`found user: ${foundUser}`);

    res.send(foundUser);
};

export const createUser = (req, res)=>{
    const user = req.body;
    const userID = uuid4();

    const userWithID = {...user, id: userID}; 

    users.push(userWithID);

    res.send(`User with first name ${user.firstName} added to the database`);
};

export const deleteUser = (req, res)=>{
    const {id} = req.params;
    const users = users.filter((user)=> user.id !== id);

    res.send(`User with id ${id} deleted from the database.`);
};

export const updateUser = (req, res)=>{
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user)=> user.id===id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with first name ${user.firstName} updated to the database`);
};