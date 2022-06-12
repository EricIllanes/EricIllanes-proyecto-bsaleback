require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

// const sequelize= new Sequelize('bsale_test','bsale_test','bsale_test',{
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     dialect:'mysql'
// })

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

//MODELOS
const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  category:{
    type:DataTypes.INTEGER
  }
},
{
  tableName: 'product',
  timestamps:false
});

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
},
{
  tableName: 'category',
  timestamps:false
});

Product.belongsTo(Category, {foreignKey: 'category', as:"categories"});
Category.hasMany(Product, {foreignKey: 'id'});
module.exports = {
  Product,
  Category,
  sequelize
};