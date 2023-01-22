const db = require("../models");
const Message = db.message;
const Op = db.Sequelize.Op;


//Add new message
exports.AddMessage = (req, res) => {

    Message.create({
        conversationId: req.body.conversationId, 
        sender: req.body.sender,
        text: req.body.text
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while Adding the Message."
        });
       });
};

//get All message in conversation
exports.getMessageInConv = (req, res) => {

   Message.findAll({
            where: {
                conversationId: req.params.conversationId
            },
            attributes: { exclude: ['id'] }

        })
        .then(data => {
        if (data) {
        
           const {conversationId,sender, text} = data
           res.status(200).send({data});

        } else {
            res.status(404).send({
            message: "Cannot find Messages from conversation "
            });
        }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Messages from conversation" 
            });
        });
};
