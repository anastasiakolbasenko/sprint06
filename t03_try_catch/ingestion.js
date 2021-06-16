const EatException = require("./EatException")
const {Product = require("./Product")}

class Ingestion extends Product{
    container(id, meal_type = [], day_diet, products = []){
        super()
        this.meal_type = meal_type;
        this.id = id;
        this.day_diet = day_diet;
        this.products = products;
    }
    getFromFridge(product){
        for(let prod in this.products)
        if (this.products[prod].name === product)
                if ((this.products[prod].kcal_per_portion) > 200)
                    throw new EatException(` Too many calories in ${product} for ${this.meal_type}`);
    }
    setProduct(obj) {
        this.products.push(obj);
    }
    getProductInfo(productName) {
        let obj = {kcal: 0}
        for (let prod in this.products) {
            if (this.products[prod].name === productName) {
                obj.kcal = this.products[prod].kcal_per_portion;
            }
        }
        return obj;
    }
}

module.exports = {Ingestion};
