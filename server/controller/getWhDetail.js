const fs = require("fs");

const getWhDetail = (id) => {
  const warehouseData = fs.readFileSync("./model/warehouse.json");

  const findWarehouseData = JSON.parse(warehouseData).find((warehouse) => {
    return {
      id: warehouse.id,
      name: warehouse.name,
      location: warehouse.location,
      address: warehouse.address,
      contactName: warehouse.contactName,
      position: warehouse.position,
      phoneNumber: warehouse.phoneNumber,
      email: warehouse.email,
      categories: warehouse.categories,
      products: warehouse.products,
    };
  });
  return findWarehouseData;
};

module.exports = getWhDetail;
