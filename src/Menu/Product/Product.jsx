import React from "react";
import { useNavigate } from 'react-router-dom';
import ShowProducs from "./ShowProducs";
import PurchasedAmout from "./PurchasedAmout";
export default function Product() {
  const navigate = useNavigate()
  return (
    <div>
    
      <PurchasedAmout />
      <ShowProducs/>



      <button onClick={()=>navigate('/')}>back to menu</button>
    </div>
  );
}
