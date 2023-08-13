import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "../../models/products";


const URL=process.env.MONGO_URI;
export async function GET(request,content){
    const id=content.params.id;
    await connect();
    try{
        const datas=await Product.findById({
            _id:id
        });
        return NextResponse.json({
            "message":"Lets find to products page.",
            productss:datas
        })
    }catch(err){
        return NextResponse.json({
            "error":err.message
        })
    }
}
export const connect=async()=>{
    try{
        await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // console.log("Connected");
    }catch(err){
        console.log(err.message);
    }
}
export async function POST(request){
    await connect();
    const data=await request.json();
    const {id}=data;

    try{
        const findItem=await Product.find({
            _id:id
        });
        // console.log(findItem)
        if(findItem){
            return NextResponse.json({
                "message":"Found",
                result:findItem
            },{status:202})
            
        }else{
            return NextResponse.json({
                "message":"Product Not found."
            },{status:404})
        }
    }catch(err){
        return NextResponse.json({
            "error":err.message
        },{status:406})
    }
}