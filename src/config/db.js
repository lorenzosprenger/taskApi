// Arquivo responsável pela configuração e conexão com o banco de dados
 
// Importar o pacote do mysql
const mysql = require('mysql2');

// Importar o pacote de acesso aos de variáveis de ambiente
const dotenv = require('dotenv').config();

// Estabelece a criação da conexão com banco 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Testa se o banco esta conectado
connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar com o banco de dados: ", err.stack);
    return;
  } else {
    console.log("Mysql Connected!");
  }
});

module.exports = connection;