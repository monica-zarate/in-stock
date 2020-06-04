const fs = require("fs");

const getItems = () => {
  const itemData = fs.readFileSync("./model/warehouse.json");

  const mappedItemData = JSON.parse(itemData).map((warehouse) => {
    return warehouse.products;
  });

  return mappedItemData.flat(2);
};

module.exports = getItems;
