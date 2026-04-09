import express from 'express';
import dbConnection from './config/dbConnect.js';
import route from './routes/index.js';
import errorController from './middlewares/errorController.js';
import error404 from './middlewares/error404.js';


const connect = await dbConnection();
const app = express();

connect.on('error', (err)=>{
    console.log('erro de conexão:', err);
});

connect.once('open', ()=>{
    console.log('conexão feito com sucesso.');
    
})

route(app)
app.use(error404);
app.use(errorController);

export default app;

