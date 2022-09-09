import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
  return (
    
<div>    
  <h1>Hey store manager what you want to know ?</h1>
  <div className="menu" >
      <Link to="products">Product</Link> <br></br>
      <Link to="customers">Customers</Link>
      <br></br>
      <Link to="purchases">Purchases</Link>
      <br></br>
      {/* <Product/> */}
    </div></div>
  );
}
