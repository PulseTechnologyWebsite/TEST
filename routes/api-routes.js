
const db = require("../models")

module.exports = (app)=>{
    app.get("/404", (req, res)=>{
        res.render("404")
    });
    
    app.get("/page1", (req, res)=>{
        res.render("page1")
    });

    app.get("/home", (req, res)=>{
        res.render("home")
    });

    app.get("/careers", (req, res)=>{
        res.render("careers")
    });

    app.get("/order", (req, res)=>{
        res.render("order")
    });





}
