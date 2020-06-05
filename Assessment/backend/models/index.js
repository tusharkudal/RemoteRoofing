const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.js")(sequelize, Sequelize);
db.task = require("./task.js")(sequelize, Sequelize);
db.project = require("./project.js")(sequelize, Sequelize);

/* Relations Start */

//Each project should have an assigner
db.users.hasOne(db.project,{foreignKey: 'assigner_id'})

//Each task ( Task) should have an assigner (User) and a project
db.users.hasOne(db.task,{foreignKey: 'assigner_id',as: 'assigner'})
db.project.hasOne(db.task,{foreignKey: 'project_id'})

db.users.belongsToMany(db.task,{ through: 'assignedTaskToUsers'})
db.project.belongsToMany(db.users,{ through: 'assignedProjectToUsers' })




/* Relations End */

module.exports = db;