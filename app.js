var app = require('./config/server')
var rotaTecnologia = require('./app/routes/tecnologia')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaForm = require('./app/routes/formulario-inclusao-noticia')(app);


app.listen(3000, function () {
    console.log('Server ON')
})