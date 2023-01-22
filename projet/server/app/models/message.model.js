module.exports = (sequelize, Sequelize) => {

    const Message = sequelize.define("message", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      conversationId: {
        type: Sequelize.INTEGER
      },
      sender: {
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      }
    });
  
    return Message;
    
  };
  