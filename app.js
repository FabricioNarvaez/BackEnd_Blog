'use strict'

// Cargar módulos de node para crear el servidor
var express = require('express');
//**var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');

// MiddLewares 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Añadir/cargar prefijos a rutas
app.use('/api',article_routes);

// Exportar módulo (fichero actual)
module.exports = app;