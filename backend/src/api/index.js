const express = require("express");
const app = express();
const logiRoute = require('../Routes/loginRoute')
const toDoListRoute = require('../Routes/toDoListRoute')
const middlewaresErrors = require('../middlewares/error')
const PORT = 3001;
app.use(express.json());

app.use('/login',logiRoute);
app.use('/todolist',toDoListRoute );




app.use(middlewaresErrors);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
