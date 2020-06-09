const fs = require("fs");

const getWhDetail = (id) => {
  const warehouseData = fs.readFileSync("./model/warehouse.json");

  const findWarehouseData = JSON.parse(warehouseData).find(
    (warehouse) => warehouse.id === id
  );
  return findWarehouseData;
};

module.exports = getWhDetail;
