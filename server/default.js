const products = require('./constants/data.js')
const Product = require('./model/product-schema.js')
const DefaultData = async () => {
    
    try {
        await Product.insertMany(products)
        // await Product.deleteMany({})
        console.log("Data Inserted Successfully")
    } catch (e) {
        console.log("Error While Inserting Data " , e.message)
    }

}
module.exports = DefaultData