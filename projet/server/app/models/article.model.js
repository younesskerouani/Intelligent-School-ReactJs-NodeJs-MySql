module.exports = (sequelize, Sequelize) => {

    const Article = sequelize.define("article", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      user_fullname:{
        type: Sequelize.STRING
      },
      user_photo:{
        type: Sequelize.STRING
      }
    });
  
    return Article;
    
  };
  