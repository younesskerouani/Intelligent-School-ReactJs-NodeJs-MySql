module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING
    },
    fullname: {
      type: Sequelize.STRING
    },
    adresse: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.STRING
    }
  });

  return User;
};
