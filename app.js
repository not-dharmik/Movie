const { response } = require("express");
var express = require ("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.get("/", function(req,res){
    res.render("search");
    console.log("Rendering /")
});


app.get("/results", function(req,res){
    var moviename = req.query.movie;
    var url = "https://www.omdbapi.com/?apikey=8e5590ca&s="+ moviename;
    request( url , function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data : data});
            //res.send(parseData["Search"][0]["Title"]);
        }
    });
    console.log("Rendering Results");
});



app.listen(process.env.PORT || 8000, function(){
    console.log("Search Server !!");
});