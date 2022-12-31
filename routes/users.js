import express from 'express';
import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();

let users =[];

//all routes in here are starting with /users
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;