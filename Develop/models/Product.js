// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    
    // Define columns
id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true // Auto-incrementing primary key
},
product_name: {
  type: DataTypes.STRING,
  allowNull: false // Product name cannot be null
},
price: {
  type: DataTypes.DECIMAL(10,2),
  allowNull: false,
  validate: {
    isDecimal: true // Price must be a valid decimal number
  }
},
stock: {
  type: DataTypes.INTEGER,
  allowNull: false,
  defaultValue: 10, // Default stock value is 10
  validate: {
    isNumeric: true // Stock must be a valid numeric value
  }
},
category_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'category', // References category model
    key: 'id' // References id column in category model
  }
}

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
