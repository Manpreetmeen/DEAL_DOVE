import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    name : String,
    price : Number,
    model : String
})

export const Product = mongoose.models.products || mongoose.model("products", ProductModel)