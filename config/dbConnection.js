var mysql = require("mysql");

var connMySQL = function() {
  console.log("A conexão foi estabelecida");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "portal_noticias"
  });
};

module.exports = function() {
  console.log("O auto load carregou o modulo de BD");
  return connMySQL;
};
