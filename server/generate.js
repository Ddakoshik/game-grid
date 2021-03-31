var faker = require('faker');
faker.locale = "ru";

var database = { 
  games: {
    en: [],
    ru: []
  }
};

for (var i = 1; i<= 100; i++) {
  const game = {
    id: i,
    categoryId: getRandomInt(),
    imageUrl: `https://loremflickr.com/320/240?lock=${i}`,
  }

  faker.locale = "en";
  database.games.en.push({
    ...game,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences()
  });

  faker.locale = "ru";
  database.games.ru.push({
    ...game,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences()
  });
}

function getRandomInt(min = 1, max = 5) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(JSON.stringify(database));