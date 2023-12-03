const express = require('express');
const app = express();
const dontenv = require('dotenv');
const moongose = require('mongoose');

//importar rotas
const authRoute = require('./routes/auth');
const getRoute = require('./routes/getUser');

dontenv.config();

// Conectar ao banco
moongose.connect(process.env.DB_CONNECT);


// Middleware
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/getuser', getRoute);

app.listen(3000, () => console.log('Servidor rodando!'));