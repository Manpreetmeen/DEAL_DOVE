import Link from "next/link";
import DeleteProduct from "../utils/DeleteProduct";
const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function page() {
  const products = await getProducts();

  return (

    <div>
      <h1 style={{fontSize : "60px", textAlign : "center", margin : "10px", fontWeight : "600" }}>Produst List</h1>

    <div style={{ textAlign : "center", display : "flex", alignItems : "center", justifyContent : "center"}}>
      <table style={{ border: "1px solid white"}}>
        <thead>
          <tr>
            <th style={{ border: "1px solid white", padding : "10px" }}>Name</th>
            <th style={{ border: "1px solid white", padding : "10px" }}>Class</th>
            <th style={{ border: "1px solid white", padding : "10px" }}>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td style={{ border: "1px solid white", textAlign : "center", padding : "10px" }}>{item.name}</td>
              <td style={{ border: "1px solid white", textAlign : "center", padding : "10px"}}>{item.price}</td>
              <td style={{ border: "1px solid white", textAlign : "center", padding : "10px"}}>{item.model}</td>
              <td style={{ border : "1px solid white", textAlign : "center", padding : "10px"}}><Link href={`/products/${item._id}`}>Edit</Link> </td>
              <td style={{ border : "1px solid white", textAlign : "center", padding : "10px"}}><DeleteProduct id={item._id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  );
}
