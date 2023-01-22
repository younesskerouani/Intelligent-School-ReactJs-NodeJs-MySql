const db = require("../models");
const Conversation = db.conversation;
const Op = db.Sequelize.Op;

verifyDuplicateConversation = (req, res, next) => {

   // conversation
   const firstUserId = req.body.senderId;
   const secondUserId = req.body.receiverId;

   Conversation.findOne({
    where: {
      [Op.or]: [
        {senderId: firstUserId},
        {receiverId: secondUserId},
        {senderId: secondUserId},
        {receiverId: firstUserId}
       ]
     }

  }).then(conversation => {
    if (conversation) {
      res.status(400).send({
        message: "Failed! Conversation is already in use!"
      });
      return;
    }
    next();
  });
 
}

module.exports = verifyDuplicateConversation;