import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";


export default function AddProduct() {
  const { id, name } = useParams();
  const dataState = useSelector((state) => state);
  const [selectVal, setSelectVal] = useState();
  const [alert, setalert] = useState();



let findIdProduct = dataState.products.find(product => product.name == selectVal)


  const dispatch = useDispatch()
  const d = new Date();

function save() {
  let action = {type:'SAVE', payload:{ ID: `c${Math.floor(Math.random()*50)}`, customerID: `${id}`, productID: findIdProduct?.ID  ,date: `${d.getDate()}/${d.getUTCMonth()+1}/${d.getFullYear()}` }}
  dispatch(action)
  setalert('you seccses to add more product ')

}



  return (
    <div style={{textAlign:'center'}} >
      <h1>Hay {name}</h1>
      <label htmlFor="">add more product:</label>
      <select
        onChange={(e) => setSelectVal(e.target.value)}
        name="Product"
        id=""
      >
        <option value="">product</option>
        {dataState.products.map((product, i) => {
         
          return (
            
            <option key={i}  value={product.name}>
              {product.name}
            
            </option>
           
          );
        })}
      </select>
      <div style={{ marginTop: "30px" }}>
        <button onClick={save}>save</button>
      </div>
    </div>
  );
}
