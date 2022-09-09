import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div style={{display:'flex',margin:'auto',width:'900px',justifyContent:'space-between'}}>
      <Link to="products">Product</Link> <br></br>
      <Link to="customers">Customers</Link>
      <br></br>
      <Link to="purchases">Purchases</Link>
      <br></br>
      {/* <Product/> */}
    </div>
  );
}
