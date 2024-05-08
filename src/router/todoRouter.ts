import express, {Application, Request, Response } from 'express';
import functionTodo from '../controller/todoController';

const router = express.Router()

router.get('/todo', functionTodo.findAllTodo)
router.get('/todo/:id', functionTodo.findTodoById)
router.post('/addTodo', functionTodo.createTodo)
router.patch('/editTodo/:id', functionTodo.updateTodo)
router.delete('/deleteTodo/:id', functionTodo.deleteTodo)

export default router