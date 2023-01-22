module.exports = (sequelize, Sequelize) => {

    const Evenement = sequelize.define("events", {
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
  
    return Evenement;
    
  };