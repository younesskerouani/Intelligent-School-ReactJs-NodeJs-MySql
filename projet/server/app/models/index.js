const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.forum = require("../models/forum.model.js")(sequelize, Sequelize);
db.evenement = require("../models/evenement.model.js")(sequelize, Sequelize);
db.conversation = require("./conversation.model.js")(sequelize, Sequelize);
db.message = require("./message.model.js")(sequelize, Sequelize);
db.cours = require("../models/cours.model.js")(sequelize, Sequelize);
db.article = require("../models/article.model.js")(sequelize, Sequelize);
db.bulletin = require("../models/bulletin.model.js")(sequelize, Sequelize);
db.emploi = require("../models/emploi.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["admin", "user","directeur","secretaire","surveillant","infirmier","enseignant","etudiant","parent"];

module.exports = db;
