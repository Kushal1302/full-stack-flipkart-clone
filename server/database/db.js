const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/flipkart" , {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(() => console.log("Connection Successfull"))
.catch((e) => console.log("Error While Connecting with database" , e.message))
    


