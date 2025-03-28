const mongoose = require("mongoose") ; 

const ProductSchema =  new mongoose.Schema ({

name: {
 type: String, 
 required: true, 
},
Price: { 
type: Number, 
required: [true, "price must be provided " ],
}, 
featured: {
    type: Boolean, 
    default: false,
}, 
rating: { 
    type: Number, 
    default: 4.8,
}, 
createdAt:{
 type: Date, 
 default: Date.now(),  
}, 
company: {
 type : String, 
 enum: {
  values: ["apple" , "samsung" , "dell", "mi"], 
  message: `{VALUE} is  not supported `,
 },
}, 
}) ; 

module.exports = mongoose.model("Product", ProductSchema); 

