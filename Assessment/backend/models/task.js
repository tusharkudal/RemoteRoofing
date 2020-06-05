module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    score: DataTypes.INTEGER,
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
  return Task
}
