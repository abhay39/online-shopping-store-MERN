import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "../models/products";

const URL=process.env.MONGO_URI;

export async function GET(){
    await connect();
    try{
        const datas=await Product.find();
        return NextResponse.json({
            "message":"Welcome to products page.",
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
    const {title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images1,images2,images3,images4,images5}=data;

    try{
        // const findItem=await Product.find({
        //     title:title
        // });
        // console.log(findItem)
        // if(findItem){
            
            const newProduct=new Product({
                title:title,
                description:description,
                price:Number(price),
                discountPercentage:Number(discountPercentage),
                rating:Number(rating),
                stock:Number(stock),
                brand:brand,
                category:category,
                thumbnail:thumbnail,
                images:[
                    images1,images2,images3,images4,images5
                ]
            })
            const savedData=await newProduct.save();
            if(savedData){
                return NextResponse.json({
                    "message":"Product added successfully!",
                    status:"success",
                    info:savedData
                },{status:202})
            }else{
                return NextResponse.json({
                    "message":"error adding product!",
                    status:"fail"
                },{status:406})
            } 
        // }else{
        //     return NextResponse.json({
        //         "message":"Product is already added."
        //     },{status:404})
        // }
    }catch(err){
        return NextResponse.json({
            "error":err.message
        },{status:406})
    }
}