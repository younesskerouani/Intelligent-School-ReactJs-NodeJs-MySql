module.exports = (sequelize, Sequelize) => {

    const Forum = sequelize.define("forums", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.STRING
      }
    });
  
    return Forum;
    
  };
  