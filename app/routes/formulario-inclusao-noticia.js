module.exports = function (app) {
    app.get('/formulario-inclusao-noticia', function (req, res) {
        res.render("admin/form-add-noticia");
    });
}