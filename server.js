//dotenv é sempre inicializado no ponto mais "alto" da aplicação
import 'dotenv/config';
import app from "./src/app.js";

const PORT = 3005;

app.listen(PORT, ()=>{
    console.log('server ativo.');
    
})