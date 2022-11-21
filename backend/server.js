const express = require('express');
const dotenv = require('dotenv').config();
/* const connectDB = require('./database/db'); */
const port = process.env.PORT || 5000;
const memesRoute = require('./routes/memesRoute');

//connect to DB
//connectDB();
//const NAMESPACE = 'Server';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//? ---Routes
app.use('/api/memes', memesRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
