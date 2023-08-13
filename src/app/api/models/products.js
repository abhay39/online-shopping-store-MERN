import mongoose from "mongoose";

const Products=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountPercentage:{
        type:Number,
        default:0,
        required:true
    },
    rating:{
        type:Number,
        default:0,
        required:true
    },
    stock:{
        type:Number,
        default:0,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        default:"",
        required:true
    },
    thumbnail:{
        type: String,
        default: "",
        required:true
    },
    images:{
        type: Array,
        default: []
    }
},{timestamps:true})

const Product = mongoose.models.Product || mongoose.model("Product", Products);

export default Product;