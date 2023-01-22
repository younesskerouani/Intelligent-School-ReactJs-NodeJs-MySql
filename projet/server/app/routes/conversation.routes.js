const controller = require("../controllers/conversation.controller");
const { verifyDuplicateConversation } = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

      app.post("/api/conversations",verifyDuplicateConversation, controller.createConversation);
      app.get("/api/conversations/:userId", controller.getconversationByUserId);
      app.get("/api/conversations/:firstUserId/:secondUserId", controller.getconversationOfTwoUsers);
    
    }



