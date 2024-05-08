import express, {Application, Request, Response } from 'express';

const findTodoById = async(req:Request , res:Response) => {
    res.send('Hello Controller Read')
}

const findAllTodo = async(req: Request, res:Response) => {
    try {
        res.send('Hello list')
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

const createTodo = async(req: Request, res:Response) => {
    try {
        res.send('Hello create')
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

const updateTodo = async(req: Request, res:Response) => {
    try {
        res.send('Hello update')
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

const deleteTodo = async(req: Request, res:Response) => {
    try {
        res.send('Hello delete')
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

const functionTodo = {findTodoById, findAllTodo, createTodo, updateTodo, deleteTodo}

export default functionTodo