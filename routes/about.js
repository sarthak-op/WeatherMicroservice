const express = require("express");
const properties = require("../package.json");

const aboutRoute = express.Router();

aboutRoute.get("/", (_req, res)=>{
    const aboutInfo ={
        name: properties.name,
        description: properties.description,
        author: properties.author
    }
    res.json(aboutInfo)
})

module.exports = aboutRoute