const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');
const partnershipRoute = require('./routes/partnershipRoute.js');
const propertyRoutes = require('./routes/propertyRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const { globalErrorHandler } = require('./utils/errorhandlers.js');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/properties', propertyRoutes);
app.use('/users', userRoutes);
app.use('./messages', messageRoutes);

app.use(globalErrorHandler);

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
