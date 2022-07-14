const mysql = require("mysql");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'nikku123',
    database : 'data',
    port:3306
  });

  connection.getConnection((error)=>{
    if(error){
        console.log("Database is not connected ...");
        return;
    }
    console.log("Database is connected...")
  })
  module.exports= connection;