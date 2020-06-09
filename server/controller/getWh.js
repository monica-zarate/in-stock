const fs = require("fs");

const getWh = () => {
  const whData = fs.readFileSync("./model/warehouse.json");
  // const filteredWhData = JSON.parse(whData).filter((warehouse) => warehouse.id);

  const mappedWhData = JSON.parse(whData).map((warehouse) => {
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
  return mappedWhData;
};

module.exports = getWh;
