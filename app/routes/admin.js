module.exports = function(app) {
  app.get("/formulario-inclusao-noticia", function(req, res) {
    res.render("admin/form-add-noticia");
  });

  app.post("/noticias/salvar", function(req, res) {
    var noticia = req.body;

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect('/noticias')
    });
  });
};
