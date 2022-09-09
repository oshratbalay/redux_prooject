import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EditCustomers() {
  const dataState = useSelector((state) => state);
  const { id, name } = useParams();
  let filterPurchases;
  function showCustomersName() {
    filterPurchases = dataState.purchases?.filter(
      (purchase) => purchase.customerID === id
    );

    console.log(filterPurchases);

    const filterproducts = filterPurchases?.map((Purchas) =>
      dataState.products?.find((product) => product.ID === Purchas.productID)
    );

    return filterproducts;
  }

  const [customer, setCustomer] = useState({ID:id ,fName:'',lName:'', city:'' });
  console.log(customer);

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);

  const handleInput = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const update = () => {
    let action = { type: "UPDATE-CUSTOMER", payload: customer };
    dispatch(action);
  };

  const deleteC = () => {
    let action = { type: "DELETE-CUSTOMER", payload: customer };
    dispatch(action);
  };
  return (
    <div style={{textAlign:'center'}}>
      <h1>hey {name}</h1>
      <h3>{id}</h3>
      fName : <input
        onChange={handleInput}
        type="text"
        name="fName"
      /> <br /> <br />
      lName : <input
        onChange={handleInput}
        type="text"
        name="lName"
      /> <br /> <br />
      city : <input
        onChange={handleInput}
        type="text"
        name="city"
      /> <br /> <br />
      <button onClick={update}>update</button>
      <button onClick={deleteC}>delete</button>
      <ul>
        {showCustomersName()?.map((product, i) => (
          <Link key={i} to={`/editProducts/${product.ID}`}>
            {" "}
            <li>{product.name} </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
