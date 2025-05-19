import path from "path";
import productModel from "../models/product.model.js"


export default class productController {
    // here productController is a class and 
    // getProducts is a method
    getProducts(req, res) {
        console.log(path.resolve());
        let product = productModel.getProducts();
        // console.log(product);

        res.render("products", { products: product })
        // res.send(path.resolve())
        // return res.sendFile(path.join(path.resolve(), "node-mvc-basics", "src", "views", "products.html")); // Fixed typo here
    }
}