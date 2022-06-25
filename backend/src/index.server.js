const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//routes

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

//environment variable or contants
env.config();

//mongodb connection
// mongodb+srv://root:<password>@cluster0.shxlg.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.shxlg.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
   
// }).then(()=>{
//     console.log("Database connected")
// });
mongoose.connect('mongodb://localhost:27017/Ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to db Successfully")
    }
})


app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});