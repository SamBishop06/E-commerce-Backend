// Import necessary modules
const { Model, DataTypes } = require('sequelize');

// Import sequelize connection
const sequelize = require('../config/connection.js');

// Define Tag model
class Tag extends Model {}

// Initialize Tag model with column definitions
Tag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true // Auto-incrementing primary key
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false // Tag name cannot be null
    }
  },
  {
    sequelize, // Connect to sequelize
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Do not pluralize table names
    underscored: true, // Use underscores in column names
    modelName: 'tag', // Set model name
  }
);

// Export Tag model
module.exports = Tag;

