const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres',  // Replace with the dialect you're using (e.g., 'mysql', 'postgres')
  host: 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// You can test the connection here
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
