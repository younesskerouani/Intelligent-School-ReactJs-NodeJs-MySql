const db = require("../models");
const Conversation = db.conversation;
const Op = db.Sequelize.Op;

//new conv
exports.createConversation = (req, res) => {

    Conversation.create({
        senderId: req.body.senderId, 
        receiverId: req.body.receiverId,
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Conversation."
        });
       });
};

//get conv of a user

exports.getconversationByUserId = (req, res) => {
  const id = req.params.userId;

  Conversation.findAll({
    where: {
      
     [Op.or]: [
          {senderId: id},
          {receiverId: id}
         ]
    }
  })
    .then(data => {
      if (data) {
        res.status(200).send({data});
      } else {
        res.status(404).send({
          message: `Cannot find conversation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving conversation with id=" + id
      });
    });
};

// get conv of two users 
exports.getconversationOfTwoUsers = (req, res) => {

    Conversation.findOne({
      where: { [Op.and]: { 
        [Op.or]:[[{senderId: req.params.firstUserId},{receiverId: req.params.secondUserId}],
       [{senderId: req.params.secondUserId},{receiverId: req.params.firstUserId}]]
        } },
    })
    .then(data => {
      if (data) {
        res.status(200).send({data});
      } else {
        Conversation.create({
          senderId: req.params.secondUserId, 
          receiverId: req.params.firstUserId,
        }).then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Conversation."
          });
         });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving conversation" 
      });
    });
  
};
