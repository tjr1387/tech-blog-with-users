const sequelize = require('../config/connection');
const { User, Entry } = require('../models');

const userData = require('./userData.json');
const entryData = require('./entryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

// will need to be changed

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });


// will need a chunk for adding blogposts (entries) to users

  process.exit(0);
};

seedDatabase();
