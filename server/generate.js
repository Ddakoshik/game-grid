var faker = require('faker');
faker.locale = "ru";

var database = { games: []};

for (var i = 1; i<= 100; i++) {
  database.games.push({
    id: i,
    category: getCategoryId(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    imageUrl: `https://loremflickr.com/320/240?random=${i}`,
    quantity: faker.datatype.number()
  });
}

function getCategoryId(min = 1, max = 5) {
    return Math.random() * (max - min) + min;
}

console.log(JSON.stringify(database));