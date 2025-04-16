require("dotenv").config()
const express = require("express");
const app = express();
const authRoute = require("./routes/auth-router");
const connectDb = require("./utilis/db");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");  
const productRoutes = require("./routes/productRoutes");  
const adminRoute = require("./routes/admin-router");

// handling cors policy
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true
}

app.use(cors(corsOptions));

// connect to db
app.use(express.json());

app.use("/api/auth", authRoute);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use("/api/admin", adminRoute);



const PORT = process.env.PORT || 5000;


connectDb().then(() => {
  app.listen(PORT, ()=>{
    console.log(`server is runing at port ${PORT}`)
  })
})

