module.exports = (sequelize, Sequelize) => {

    const Bulletin = sequelize.define("bulletin", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_student: {
        type: Sequelize.INTEGER
      },
      file: {
        type: Sequelize.STRING
      }
    });
  
    return Bulletin;
  };
  