const { authJwt } = require("../middleware");
const controller = require("../controllers/bulletin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/bulletin/:id",controller.getBulletinById
    );

  app.get("/api/allbulletin",controller.getAllBulletin);

  app.put("/api/bulletin/update/:id", controller.updateBulletin);
  
  app.delete("/api/bulletin/delete/:id",controller.deleteBulletin);  
  
  
  app.post("/api/bulletin/create",controller.createBulletin); 




};
