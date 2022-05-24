const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const fileUpload = require("express-fileupload");

const Route = require("./routes/Routes");


mongoose
  .connect("mongodb://localhost:27017")
  .then((res) => {
    console.log("CONNECTED TO DB");
  })
  .catch((err) => {
    console.log("ERROR OCCURED IN DB CONNECTION", err);
  });

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

//Set template engine
app.set("view engine", "ejs");

app.use("/api", Route);

app.use('*',(req,res)=>{
    res.render('error');
})

app.listen(8080, () => {
  console.log(`Listening at port 8080`);
});
