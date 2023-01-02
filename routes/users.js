import express from 'express';
import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';

export const userRoutes = express.Router();

let users =[];

//all routes in here are starting with /users
userRoutes.get('/', getUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.delete('/:id', deleteUser);
userRoutes.patch('/:id', updateUser);

// export default router;