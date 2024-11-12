const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const vacanciesRoutes = require('./routes/vacanciesRoutes')
const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL)



const PORT = process.env.PORT;
const app = express();

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log('server listening port ' + PORT);
})

//middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())

app.use(authRoutes)
app.use(vacanciesRoutes)

