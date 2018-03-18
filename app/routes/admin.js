module.exports = function(app) {
  app.get("/formulario-inclusao-noticia", function(req, res) {
    res.render("admin/form-add-noticia");
  });

  app.post("/noticias/salvar", function(req, res) {
    var noticia = req.body;

    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiaModel;

    noticiasModel.salvarNoticia(noticia ,connection, function(error, result) {
      res.redirect('/noticias')
    });
  });
};
