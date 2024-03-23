const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const app = require('./app');

dotenv.config({path: './C.env'});

//const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//mongoose.connect(Db).then(() => console.log("DB sucessfully connected"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
