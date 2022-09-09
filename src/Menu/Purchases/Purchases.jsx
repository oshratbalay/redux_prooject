import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Purchases() {
  const data = useSelector((state) => state);
  const [product, setproduct] = useState();
  const [customer, setCustomer] = useState();
  const [date, setdate] = useState();

  let filterProductName = data.products.filter(
    (product1) => product1.name === product
  );

  let filtercustomerName = data.customers.filter(
    (customer1) => customer1.fName === customer
  );

  let filterPurchasesDate = data.purchases.filter(
    (purchaes1) => purchaes1.date === date
  );
 let search ;
  let filterPurchases;
  function showCustomersName() {
    filterPurchases = data.purchases?.filter(
      (purchase) => purchase.productID === filterProductName[0]?.ID
    );

    const filterCustomers = filterPurchases?.find(
      (purchase) => filtercustomerName[0]?.ID === purchase.customerID
    );

    const b = [filterCustomers];
    const filterDate = b.includes(undefined)
      ? undefined
      : b?.map(() =>
          b?.find((purchase) => purchase.date === filterPurchasesDate[0]?.date)
        );

    if (filterDate === undefined || filterDate.includes(undefined)) {
      search = "the purchaes not found"
    } else {
      search = 'gfhgbjnm'
      console.log(filterDate);
    }
  }

  showCustomersName()
console.log(search);
  return (
    <div>
      products:{" "}
      <select onChange={(e) => setproduct(e.target.value)} name="" id="">
        <option value="">select</option>
        {data.products.map((product, i) => (
          <option key={i} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
      <br />
      customers:{" "}
      <select onChange={(e) => setCustomer(e.target.value)} name="" id="">
        <option value="">select</option>
        {data.customers.map((customer, i) => (
          <option key={i} value={customer.fName}>
            {customer.fName}
          </option>
        ))}
      </select>
      <br />
      Date: <input onChange={(e) => setdate(e.target.value)} type="text" />
      <br />
      <button onClick={()=>showCustomersName()}>search</button>
      <div>{search}</div>
      {}
      <br />
      <Link to={"/"}>back to menu</Link>
    </div>
  );
}
