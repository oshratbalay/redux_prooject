import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

export default function Customers() {
  const data = useSelector((state) => state);
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

  console.log(showCustomersName("A1"));

  return (
    <div>
      <h1>customers</h1>
      <div style={{display:"flex",justifyContent:'center'}} >
        {data.customers.map((costomer, i) => (
          <div key={i} style={{width:'250px'}} >
            <div >
             Customer Name : {costomer.fName}
              <br />
              add more product :
              <button
                onClick={() =>
                  navigate(`/addproduct/${costomer.ID}/${costomer.fName}`)
                }
              >
                buy 
              </button>
            </div>
            
            <h4>costumer purchaes and date :</h4>
            <span  style={{display:'flex',justifyContent:"space-between",width:'180px',borderTop:'2px solid grey',borderBottom:'2px solid grey'}}>
            <div >
              {showCustomersName(costomer.ID).map((product, i) => (
              <div> <li key={i}>{product.name}</li></div>
              ))}
            </div>
            <div>
              {" "}
              {filterPurchases.map((v, i) => {
                return <div key={i}>{v.date}</div>;
              })}
            </div></span>
          </div>
        ))}
      </div>

      <button
        style={{
          width: "200px",
          height: "30px",
          margin: "120px 0 0 670px",
          border: "0",
        }}
        onClick={() => navigate("/")}
      >
        back to menu
      </button>
    </div>
  );
}
