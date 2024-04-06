'use client'

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter();
    let id = props.id
    const deleterecord = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`,{
            method : "delete",
        });
        response = await response.json();
        if(response.success){
            alert("product deleted")
            router.push("/products")
        }

    }
    return (
        <button onClick={deleterecord}>Delete Product</button>
    )
}