module.exports = (sequelize, Sequelize) => {

    const Conversation = sequelize.define("conversation", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      senderId: {
        type: Sequelize.INTEGER
      },
      receiverId: {
        type: Sequelize.INTEGER
      }
    });
  
    return Conversation;
    
  };
  