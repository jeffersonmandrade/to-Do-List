const express = require("express");
const app = express();
var cors = require('cors')
const logiRoute = require('../Routes/loginRoute')
const toDoListRoute = require('../Routes/toDoListRoute')
const middlewaresErrors = require('../middlewares/error')

const PORT = 3001;
app.use(express.json());
app.use(cors())

app.use('/login',logiRoute);
app.use('/todolist',toDoListRoute );



app.use(middlewaresErrors);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
