require("dotenv").config();
const { Product, Category } = require("./db");
const { Router } = require("express");
const { Op } = require("sequelize");
const router = Router();

//ROUTES PRODUCTS
router.get("/product", async (req, res) => {
  try {
    const productDB = await Product.findAll({
      include: [
        {
          model: Category,
          as: "categories",
          attributes: ["name"],
        },
      ],
    });

    res.send(productDB);
  } catch (error) {
    console.log(error);
  }
});

router.get("/productsearch", async (req, res) => {
  try {
    const { name } = req.query;
    const productFound = await Product.findAll({
      where: {
        name: {
          [Op.like]: '%'+name+'%',
        },
      },
      include: [
        {
          model: Category,
          as: "categories",
          attributes: ["name"],
        },
      ],
    });

    res.send(productFound);
  } catch (error) {
    console.log("El error es:", error);
    return res.status(500).json({ msg: error.message });
  }
});
//ROUTES CATEGORY
router.get("/category", async (req, res) => {
  try {
    let categoryName = [];
    let categoryDB = await Category.findAll();
    categoryDB.forEach((e) => {
      categoryName.push(e.name);
    });

    res.send(categoryName);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
