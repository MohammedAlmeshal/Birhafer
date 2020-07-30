var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");




app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    res.render("home");

})

app.post("/", (req, res) => {


    res.render("eidCard", { name: req.body.name })



})




const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Sever started on port " + port));