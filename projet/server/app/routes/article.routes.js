const { uploadImages} = require("../middleware");
const controller = require("../controllers/article.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/article", controller.createArticle);

  app.get("/api/article/:id", controller.getArticleById);

  app.get("/api/allarticles", controller.getAllArticles);

  app.put("/api/article/update/:id", controller.updateArticle);
  
  app.delete("/api/article/delete/:id", controller.deleteArticle);  
  
  app.post("/api/articles/uploadImg" , uploadImages.uploadArticleImg ,  uploadImages.responseIMG);


};
