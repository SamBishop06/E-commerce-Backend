const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// Define the Category model
Category.init(
  {
    // Define columns for the Category model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true // Auto-incrementing primary key
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false // Category name cannot be null
    }
  },
  {
    sequelize, // Connect to sequelize
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Do not pluralize table names
    underscored: true, // Use underscores in column names
    modelName: 'category', // Set model name
  }
);

// Export the Category model
module.exports = Category;
