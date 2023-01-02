var express = require('express');
const app = express();
require("./db.js");


const userRoutes = require('./routers/usersRouter');
app.use(userRoutes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// app.listen(3000, () => {
//     console.log("Serveur sur le port 3000, en marche de chaima")
// });
module.exports = app;