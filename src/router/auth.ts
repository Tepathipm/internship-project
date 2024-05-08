import express, {Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const authRouter = express.Router()

authRouter.get('/auth', (req:Request, res:Response) => {
    res.send('Get Auth')
})
export default authRouter