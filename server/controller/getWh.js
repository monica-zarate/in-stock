const fs = require("fs");

const getWh = () => {
  const whData = fs.readFileSync("./model/warehouse.json");
  const filteredWhData = JSON.parse(whData).filter((warehouse) => warehouse.id);
  return filteredWhData;
};

module.exports = getWh;
