import React from "react";
import { useNavigate } from 'react-router-dom';
import ShowProducs from "./ShowProducs";
import PurchasedAmout from "./PurchasedAmout";
export default function Product() {
  const navigate = useNavigate()
  return (
    <div style={{display:'flex',justifyContent:'center', flexDirection:'column' , textAlign:'center'}}>
    
      <PurchasedAmout />
      <ShowProducs/>



      <button style={{width:'200px' ,height:'30px',margin:'120px 0 0 670px',border:'0'}}  onClick={()=>navigate('/')}>back to menu</button>
    </div>
  );
}
