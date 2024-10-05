const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => {
  console.log('DB connection succesfully');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('App running on PORT 3000');
});
