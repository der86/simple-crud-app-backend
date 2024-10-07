const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/products', productRoute);




app.get('/', (req, res) => {
    res.send("Hello from node API server");
});




mongoose.connect("mongodb+srv://dj8654974:dlEb0q9VVOtzzqbD@backenddb.4qdls.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("server is running in port 3000");
        });
    })
    .catch(() => {
        console.log("connection failed!");
    });
