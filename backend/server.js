const express = require('express');
const dotenv = require('dotenv').config();
const { sequelize} = require('./models')
const port = process.env.PORT || 5000;
const memesRoute = require('./routes/memesRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//? ---Routes
app.use('/api/memes', memesRoute);

app.listen({ port: 5000 }, async () => {
  console.log(`Server started on port ${port}`)
  await sequelize.authenticate()
  console.log('Database has connected')
})
