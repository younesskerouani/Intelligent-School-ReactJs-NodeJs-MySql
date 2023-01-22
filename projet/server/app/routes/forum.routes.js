const { uploadImages, authJwt} = require("../middleware");
const controller = require("../controllers/forum.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/forum", controller.createForum);

  app.get("/api/forum/:id", controller.getForumById);

  app.get("/api/allforums", controller.getAllForums);

  app.put("/api/forum/update/:id", controller.updateForum);
  
  app.delete("/api/forum/delete/:id", controller.deleteForum);  
  
  app.post("/api/forum/uploadImg" , uploadImages.uploadForumImg ,  uploadImages.responseIMG);


};
