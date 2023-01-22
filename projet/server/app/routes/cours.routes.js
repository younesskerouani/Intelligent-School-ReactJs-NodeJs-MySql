const { authJwt } = require("../middleware");
const controller = require("../controllers/cours.controller");
const { uploadImages} = require("../middleware");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/cours/create",controller.createCours); 
  
  app.get("/api/cours/:id",controller.getCoursById);

  app.get("/api/allcours",controller.getAllCours);

  app.put("/api/cours/update/:id", controller.updateCours);
  
  app.delete("/api/cours/delete/:id",controller.deleteCours);  
  
  
  

  app.post("/api/cours/uploadCours" , uploadImages.uploadCoursFile ,  uploadImages.responseIMG);


};
