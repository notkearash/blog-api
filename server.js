const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

const blogsRouter = require('./routes/blogs');
app.use('/blogs', blogsRouter);

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`));
