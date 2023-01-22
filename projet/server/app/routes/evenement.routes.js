const { uploadImages, authJwt} = require("../middleware");
const controller = require("../controllers/evenement.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/evenement", controller.createEvenement);

  app.get("/api/evenement/:id", controller.getEvenementById);

  app.get("/api/allevenements", controller.getAllEvenements);

  app.put("/api/evenement/update/:id", controller.updateEvenement);
  
  app.delete("/api/evenement/delete/:id", controller.deleteEvenement);  
  
  app.post("/api/evenement/uploadImg" , uploadImages.uploadEventImg ,  uploadImages.responseIMG);


};
