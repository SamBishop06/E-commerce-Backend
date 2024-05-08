// Import necessary modules
const { Model, DataTypes } = require('sequelize');

// Import sequelize connection
const sequelize = require('../config/connection');

// Define ProductTag model
class ProductTag extends Model {}

// Initialize ProductTag model with column definitions
ProductTag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true // Auto-incrementing primary key
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // References tag model
        key: 'id' // References id column in tag model
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // References product model
        key: 'id' // References id column in product model
      }
    }
  },
  {
    sequelize, // Connect to sequelize
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Do not pluralize table names
    underscored: true, // Use underscores in column names
    modelName: 'product_tag', // Set model name
  }
);

// Export ProductTag model
module.exports = ProductTag;
