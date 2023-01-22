const { uploadImages } = require("../middleware");
const controller = require("../controllers/emploi.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/emploi",controller.createEmploi); 

  app.get("/api/emploi/:id",controller.getEmploiById
    );

  app.get("/api/allemplois",controller.getAllEmplois);

  app.put("/api/emploi/update/:id", controller.updateEmploi);
  
  app.delete("/api/emploi/delete/:id",controller.deleteEmploi);  
  
  app.post("/api/emploi/upload" , uploadImages.uploadEmploisImg ,  uploadImages.responseIMG);

};
