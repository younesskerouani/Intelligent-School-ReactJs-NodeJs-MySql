const {uploadImages, authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/:id",controller.getUserById);

  app.get("/api/allusers" , controller.getAllUsers);

  app.put("/api/user/update/:id" , controller.updateUser);

  // app.put("/api/user/update/:id",
  //   [authJwt.verifyToken,authJwt.isAdmin],
  //    controller.updateUser);
  
  // app.delete("/api/user/delete/:id",
  //    [authJwt.verifyToken,authJwt.isAdmin],
  //     controller.deleteUser);  
  
  app.delete("/api/user/delete/:id",controller.deleteUser); 

  app.post("/api/user/uploadImg", uploadImages.uploadUserImg , uploadImages.responseIMG);
  
};
