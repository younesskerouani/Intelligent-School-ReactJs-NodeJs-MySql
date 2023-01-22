const controller = require("../controllers/message.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

      app.post("/api/messages", controller.AddMessage);
      app.get("/api/messages/:conversationId", controller.getMessageInConv);
}