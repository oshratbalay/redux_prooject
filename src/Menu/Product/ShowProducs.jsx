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
    <div>
      <h3 >products</h3>
      <table border={1}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Customers Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {dataState.products.map((product, i) => {
            return (
              <tr key={i}>
                <td> {product.ID}</td>
                <td>
                  <Link to={`/editProducts/${product.ID}`}> {product.name}</Link>
                </td>
                <td>
                  {showCustomersName(product.ID)?.map((val, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span>
                          <Link to={`/EditCustomers/${val.ID}/${val.fName}`}>{val.fName}</Link>{" "}
                        </span>
                        {filterPurchases
                          .filter((p) => p.customerID === val.ID)
                          .map((v, i) => (
                            <span key={i}>{v.date}</span>
                          ))}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <button onClick={()=>navigate(`/addproduct/${val.ID}/${val.fName}`)} style={{ border: "0" }}>add</button> <br />
                      </div>
                    </div>
                  ))}
                </td>
                <td> {product.price}</td>
                <td> {product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
