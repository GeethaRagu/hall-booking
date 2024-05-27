import express from 'express';
import cors from 'cors';
import roomRouter from './Routers/roomRouter.js';

const app = express();
const PORT = 4000;

//middleware

app.use(express.json());
app.use(cors());

app.use('/api',roomRouter);
//Default
app.get('/',(req,res)=>{
 res.status(200).send("Hall booking API is running successfully");
})


app.listen(PORT,()=>{
    console.log("App is running in the port",PORT)
})