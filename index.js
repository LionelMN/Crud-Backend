const mongoRoute = require('./enviroment');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect(`${mongoRoute}`)

app.use(cors({ origin : true}  ));
app.use(express.json())

const itemsRouter = require('./api/items/items.router')
app.use('/items', itemsRouter)

app.listen(5000)
