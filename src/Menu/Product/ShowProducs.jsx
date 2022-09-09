import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ShowProducs() {
  const dataState = useSelector((state) => state);
  const navigate = useNavigate();
 

  let filterPurchases;
  function showCustomersName(id) {
    filterPurchases = dataState.purchases.filter(
      (purchase) => purchase.productID === id
    );

    const filterCustomers = filterPurchases.map((Purchas) =>
      dataState.customers.find((customer) => customer.ID === Purchas.customerID)
    );
    return filterCustomers;
  }

  showCustomersName();
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h1>products</h1>
    <div style={{display:'flex', justifyContent:'space-around',width:'1000px' }}>
      
          {dataState.products.map((product, i) => {
            return (
              <div  key={i}>
                <div> Product ID : {product.ID}</div>
                <div>
                  Product Name:<Link to={`/editProducts/${product.ID}`}> {product.name}</Link>
                </div>
                <div>Price : {product.price}</div>
                <div> Quantity {product.quantity}</div>
                <div>
                  {showCustomersName(product.ID)?.map((val, i) => (
                    <div 
                      key={i}
                      style={{
                        margin:'5px 0',
                        borderTop:'2px solid grey',
                        borderBottom:'2px solid grey'
                      }}
                    >
                      <div >
                        <div>
                         Customer Thet Buy : <Link to={`/EditCustomers/${val.ID}/${val.fName}`}> {val.fName}</Link>{" "}
                        </div> 
                        {filterPurchases
                          .filter((p) => p.customerID === val.ID)
                          .map((v, i) => (
                            <div key={i}>purchase date : {v.date}</div>
                          ))}
                      </div>
                     
                      add more product :  <button onClick={()=>navigate(`/addproduct/${val.ID}/${val.fName}`)} style={{ border: "0" }}>add</button> <br />
                     
                    </div>
                  ))}
                </div>
                
              </div>
            );
          })}
        
    </div></div>
  );
}
