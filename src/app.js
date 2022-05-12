const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../template/views");
const partialspath = path.join(__dirname,"../template/partials");

app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));


app.get("", (req,res)=>{
    res.render("index");
})
app.get("/jewellry", (req,res)=>{
    res.render("jewellery");
})
app.get("/gemstones", (req,res)=>{
    res.render("gemstones");
})
app.get("orders", (req,res)=>{
    res.render("orders");
})
app.get("/contact", (req,res)=>{
    res.render("contact");
})
app.get("/signuppage", (req,res)=>{
    res.render("signuppage");
})
app.get("*", (req,res)=>{
    res.render("error");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})