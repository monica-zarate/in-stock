const express = require("express");
const cors = require("cors");
const fs = require("fs");

// Importing getItem controller
const getItems = require("./controller/getItems");
const getWh = require("./controller/getWh");

// Const App to use express method
const app = express();

app.use(express.json());
app.use(cors());

// Get and Post Item Details

app
  .route("/inventory")
  .get((req, res) => {
    res.json(getItems());
  })
  .post((req, res) => {
    const warehouseArray = getWh();
    let warehouseId = req.body.warehouseId;
    const itemObject = {
      productId: req.body.productId,
      productName: req.body.productName,
      description: req.body.description,
      inStock: req.body.inStock,
    };
    console.log(warehouseId);
    let warehouse = warehouseArray.filter((wh) => wh.id === warehouseId)[0];
    warehouse.products.push(itemObject);
    fs.writeFileSync("./model/warehouse.json", JSON.stringify(warehouseArray));
    res.json(warehouseArray);
  })
  .put((req, res) => {
    const warehouseArray = getWh();
    let productId = req.body.productId;

    for (i = 0; i < warehouseArray.length; i++) {
      let productsArray = warehouseArray[i].products;
      for (j = 0; j < productsArray.length; j++) {
        if (productId === productsArray[j].productId) {
          productsArray[j].productId = req.body.productId;
          productsArray[j].productName = req.body.productName;
          productsArray[j].description = req.body.description;
          productsArray[j].inStock = req.body.inStock;
          productsArray[j].quantity = req.body.quantity;
          productsArray[j].lastOrdered = req.body.lastOrdered;
        }
      }
    }
    fs.writeFileSync("./model.warehouse.json", JSON.stringify(warehouseArray));
    res.json(warehouseArray);
  })
  .delete((req, res) => {});

// Get and Post Warehouse Details

app
  .route("/locations")
  .get((req, res) => {
    res.json(getWh());
  })
  .post((req, res) => {
    const warehouseArray = getWh();
    const warehouseObject = {
      id: req.body.id,
      name: req.body.name,
      location: req.body.location,
      address: req.body.address,
      contactName: req.body.contactName,
      position: req.body.position,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      categories: req.body.categories,
      products: [],
    };
    warehouseArray.push(warehouseObject);
    fs.writeFileSync("./model/warehouse.json", JSON.stringify(warehouseArray));
    res.json(warehouseArray);
  });

// Local Host
app.listen(5000, console.log("app is listening at: http://localhost:5000"));
