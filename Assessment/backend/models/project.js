module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    status : { 
      type : DataTypes.STRING, 
      allowNull : false, 
      defaultValue : 'active',
      validate: {
        isIn: { 
          args: [['active', 'inactive', 'declined', 'completed']],
          msg: "Wrong status"
        }
      }
    }
  })
  return Project
}
