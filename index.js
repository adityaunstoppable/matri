const express = require("express")
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');




mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));

    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(cors({
        origin:"http://localhost:3000"
    }))    
    app.use(expressValidator());


    app.use('/api', authRoutes);
    app.use('/api', userRoutes);




    const port = process.env.PORT || 1997;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
