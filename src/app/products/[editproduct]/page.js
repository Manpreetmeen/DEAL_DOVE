'use client'
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Page({params}){
    
    const[name, setName] = useState();
    const[price, setPrice] = useState();
    const[model, setModel] = useState();
    useEffect(()=> {
        getProductDetail()        
    }, [])

    const getProductDetail = async () => {
        let id = params.editproduct
        let productDetail = await fetch(`http://localhost:3000/api/users/${id}`);
        productDetail = await productDetail.json();
        if(productDetail.success){
            let result = productDetail.result
            setName(result.name);
            setPrice(result.price);
            setModel(result.model);
        }
        console.log(productDetail)
    }

    const updateProduct = async () => {
        let id = params.editproduct
        let data = await fetch(`http://localhost:3000/products/${id}`, {
            method : "PUT",
            body:JSON.stringify({name, price, model})
        });
        data = await data.json();
        if(data.result){
            alert("Product hass been updated")
        }
    }

    return(
        <div style={{textAlign : "center"}}>
            <h1>Update products</h1>
            <br />
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"></input><br /><br />
            <input value={model} onChange={(e)=>setModel(e.target.value)} type="text" placeholder="Model"></input><br /><br />
            <input value={price} onChange={(e)=> setPrice(e.target.value)}  type="number" placeholder="Price"></input><br /><br />
            <button onClick={updateProduct}>Update Product</button> <br /> <br />
            <Link href={"/products"}>Go to product list</Link> 
        </div>
    )
}