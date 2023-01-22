module.exports = (sequelize, Sequelize) => {

    const Cours = sequelize.define("cours", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: Sequelize.STRING
      },
      id_prof: {
        type: Sequelize.INTEGER
      },
      prof_fullname:{
        type: Sequelize.STRING
      },
      prof_photo:{
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      }
    });
  
    return Cours;
  };
  