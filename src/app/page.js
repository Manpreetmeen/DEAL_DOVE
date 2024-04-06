"use client";
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
      <div>
            <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> DISCOUNT UPTO 65%</h3>
          </div>
        </div>
      </div>

            



      <p style={{textAlign : "right", marginRight : "10px"}}>For Clients</p>
      </div>
      <h1
        style={{
          fontSize: "60px",
          textAlign: "center",
          margin: "1px",
          fontWeight: "600",
        }}
      >
        Produst List
      </h1>



      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.name}
            style={{
              borderRadius: "10px",
              border: "2px solid #000",
              backgroundColor: "#f0f0f0",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <figure>
              <img
                src="https://images.unsplash.com/photo-1582974114209-b508ec603c6e?q=80&w=1765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "300px" }}
                alt="Shoes"
              />
            </figure>
            <div style={{ padding: "1rem" }}>
              <h2
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.name}
                <div
                  style={{
                    color: "green",
                    fontWeight : "600",
                    display: "inline-block",
                    padding: "0.25rem 0.5rem",
                  }}
                >
                  {item.price}
                </div>
                <div
                  style={{
                    color: "green",
                    display: "inline-block",
                    fontSize: "10px",
                  }}
                >
                  40-65% off
                </div>
              </h2>
              <p style={{ color: "black" }}>{item.model}</p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    color: "black",
                    padding: "0.25rem 0.5rem",
                    marginRight: "0.5rem",
                  }}
                >
                  Free Delivery
                </div>
                <div style={{fontWeight : "600", color: "green",border : "2px solid yellow", borderRadius : "10px" , padding: "0.25rem 0.5rem", background: "lightgreen" }}>
                  Hot Deals
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
