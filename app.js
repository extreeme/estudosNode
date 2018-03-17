var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function (req, res) {
    res.render("secao/tecnologia.ejs");
});

app.get('/formulario-inclusao-noticia', function (req, res) {
    res.render("admin/form-add-noticia.ejs");
});

app.get('/', function (req, res) {
    res.render("home/index.ejs");
});

app.get('/', function (req, res) {
    res.render("noticias/noticias.ejs");
});


app.listen(3000, function () {
    console.log("Servidor rodando com Express")
})