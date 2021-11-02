const express = require("express");
const app = express();
const logiRoute = require('../Routes/loginRoute')
const middlewaresErrors = require('../middlewares/error')
const PORT = 3001;
app.use(express.json());

app.use('/login',loginRoute)




app.use(middlewaresErrors);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
