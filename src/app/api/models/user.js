import mongoose from "mongoose";

const Users=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter a name"],
        unique : true
    },
    mobile:{
        type:Number,
        required:[true,'please provide your phone number'],
        unique:true
    },
    email:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        maxlength:16,
        required:true
    },
    isAdmin:{
        default:false,
        type:Boolean
    },
    photo:{
        type:String,
    },
    whistlist:{
        type:Array,
        default:[]
    },
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type: Array,
        default: []
    },
    cancelOrders:{
        type: Array,
        default: []
    }
},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User", Users);

export default User;