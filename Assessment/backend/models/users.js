module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  })
  
  return Users
}
