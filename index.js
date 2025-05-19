// const express = require("express");
import express from "express";
import path from "path";

import productController from "./node-mvc-basics/src/controlers/product.controller.js";
const server = express();

//setup view engine settings 
server.set("view engine", "ejs")         // set function tells that we are using specific attrubite or function 
server.set("views", path.join(path.resolve(), "node-mvc-basics", "src", "views"));


// to call a method from a class we need to create a instance of a class 
// as methods and functions are different 
const productController1 = new productController();
server.get('/', productController1.getProducts)   // when are path is default please go to the getproructs and get the required functions 


server.get("/", (req, res) => {
    res.send("Welcome to the inmentory");
});

server.listen('3100', () => {
    console.log("server is listening on port 3100");
});
