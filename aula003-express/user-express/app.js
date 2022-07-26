const express = require("express");
const app = express();
const routerUser = require('./routes/routerUser')
const PORT = 3000;

app.use(express.json());
app.use('/api', routerUser)

app.listen(PORT, ()=>{
    console.log(`Running in http://localhost:${PORT}`);
})