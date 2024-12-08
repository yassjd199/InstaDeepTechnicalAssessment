const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  priority :{
    type : DataTypes.INTEGER,
    allowNull : false , 
  },
  category :{
    type :DataTypes.STRING,
    allowNull : true ,
  },
  due_date :{
    type : DataTypes.DATE,
    allowNull : true
  },
  completion_status :{
    type : DataTypes.BOOLEAN,
    allowNull : true 
  }


});

// Export the Product model
module.exports = Task;