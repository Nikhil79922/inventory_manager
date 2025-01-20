const express= require("express")
var cors = require('cors');
const app=express();
const port = 8000;

const ProductRoute=require("./routes/Products");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/products",ProductRoute)

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})
