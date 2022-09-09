import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";


export default function Customers() {
    const data = useSelector(state => state)
    const navigate = useNavigate();

   let filterPurchases;
   
  function showCustomersName(id) {
    filterPurchases = data.purchases.filter(
      (purchase) => purchase.customerID === id
    );

    const filterCustomers = filterPurchases.map((Purchas) =>
      data.products.find((customer) => customer.ID === Purchas.productID)
      
    );
    console.log(filterCustomers);
    return filterCustomers;
  }

  console.log(showCustomersName('A1')); 
   
  return (
    <div>
    <table border={1}>
      <tbody><tr>
        <th>name</th>
        <th>product list</th>
        <th>purchase date</th></tr>
    

      
     {data.customers.map((costomer,i)=>(
      <tr key={i}>
      <td >{costomer.fName}<br/>
      <button onClick={()=>navigate(`/addproduct/${costomer.ID}/${costomer.fName}`)}>buy more</button>
      </td>
      <td>{showCustomersName(costomer.ID).map((product,i) =>(
        <li key={i}>{product.name}</li>
      ))}</td>
      <td> {filterPurchases.map((v , i)=>{
      return  <div key={i}>{v.date}</div>}
      )}</td>
     </tr>
     ))}
       </tbody>
    </table>


           <Link to={'/'}>back to menu</Link>
    </div>
  )
}
