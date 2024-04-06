'use client'

import { useState } from "react"

export default function Page(){
    
    const[name, setName] = useState();
    const[price, setPrice] = useState();
    const[model, setModel] = useState();

    const addUser = async () => {
        // console.log(name, classname, roll)
        let data = await fetch("http://localhost:3000/api/users", {
            method : "POST",
            body : JSON.stringify({name, model, price})
        });
        data = await data.json();
        if(data.success){
            alert("new product added")
        }
    }
    return(
            <div>
            <h1 style={{fontSize : "40px", textAlign : "center"}}>Add products</h1>
            <div style={{ display : "flex", justifyContent : "center", alignItems : "center"}}>
            
            <div>
            <div><input style={{width : "400px", height : "50px", border : "2px solid white", padding : "3px", textAlign : "center" , borderRadius: "10px", margin : "5px" }} value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"></input></div>
            <div><input style={{width : "400px", height : "50px", border : "2px solid white", padding : "3px", textAlign : "center" , borderRadius: "10px", margin : "5px" }} value={model} onChange={(e)=>setModel(e.target.value)} type="text" placeholder="Model"></input></div>
            <div><input style={{width : "400px", height : "50px", border : "2px solid white", padding : "3px", textAlign : "center" , borderRadius: "10px", margin : "5px" }} value={price} onChange={(e)=> setPrice(e.target.value)}  type="number" placeholder="Price"></input></div>
            <button style={{ width : "400px", height : "50px", border : "2px solid white", padding : "3px", textAlign : "center" , borderRadius: "10px", margin : "5px" }} value={price} onChange={(e)=> setPrice(e.target.value)} onClick={addUser}>Add Product</button>
            </div>
            </div>
        </div>
    )
}