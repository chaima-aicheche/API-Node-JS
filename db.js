const mongoose = require("mongoose"); // import de mongoose

mongoose
  .connect('mongodb+srv://appi-node:1mIvh0EKxeyenUn1@cluster0.uhhfat1.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion Database réussie !");
  })
  .catch(() => console.log("Connexion Database échouée !"));

  //SQL

//  var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "root",
//   user: "",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });