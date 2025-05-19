export default class productModel {
    constructor(_id, _name, _description, _price, _image) {
        this.id = _id
        this.name = _name
        this.description = _description
        this.price = _price
        this.image = _image
    }

    // creating a method 
    // we will define a static method as they doesnt need to be instenciated they can be directly called 
    static getProducts() {
        return products;
    }
}

var products = [
    new productModel(1, "product 1", "description of product 1", 19.29, "https://www.pinterest.com/pin/70437490146839/"),
    new productModel(2, "product 2", "description of product 2", 19.29, "https://www.pinterest.com/pin/110690103336559846/"),
    new productModel(3, "product 3", "description of product 3", 19.29, "https://www.pinterest.com/pin/21955116929277126/"),
]
