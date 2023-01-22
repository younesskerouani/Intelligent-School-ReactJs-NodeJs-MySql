module.exports = (sequelize, Sequelize) => {

    const Emploi = sequelize.define("emploi", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      }
    });
  
    return Emploi;
  };
  