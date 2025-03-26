const mongoose = require("mongoose");

// uri = "mongodb+srv://pradeepk3222:qD3WmUGGspoVTWMc@pradeeokumarapi.3ay24.mongodb.net/PradeeokumarAPI?retryWrites=true&w=majority&appName=PradeeokumarAPI" ; 
 

const connectDB = (uri) => { 
 console.log("hhhhhhhhhhhhhhhhhh") ; 

return mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   autoIndex: false,     
}); 
    
};

module.exports = connectDB ; 