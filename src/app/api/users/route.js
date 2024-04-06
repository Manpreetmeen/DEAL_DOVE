import { NextResponse } from "next/server";
import { connectionStr } from "@/app/utils/database";
import mongoose from "mongoose";
import { Product } from "@/app/utils/model/product";

export async function GET(){
    let data = [];
    let success = true
    try {
       await mongoose.connect(connectionStr);
       data = await Product.find();
    } catch (error) {
        data = {result : "error", success : false}
    }
    return NextResponse.json({result : data, success : true}, {success})
}


export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionStr);

    let product = new Product(payload);

    const result = await product.save();
    return NextResponse.json({result, success : true})
}