import express, {Application, Request, Response } from 'express';
import authRouter from './router/auth';
import router from './router/todoRouter';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app:Application = express();
app.use(express.urlencoded({ extended: true }), morgan('dev'), cors());
let PORT:number = 3340;

app.get('/', (req:Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.use('/api', router)
app.use('/api', authRouter)


app.listen(PORT, () => console.log(`Server Running port ${PORT}`)) 