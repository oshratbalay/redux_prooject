import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditProducts() {
  let filterPurchases;
  function showCustomersName(id) {
    filterPurchases = data.purchases.filter(
      (purchase) => purchase.productID === id
    );

    const filterCustomers = filterPurchases.map((Purchas) =>
      data.customers.find((customer) => customer.ID === Purchas.customerID)
    );
    return filterCustomers;
  }
  const { id } = useParams();
  const [product, setProduct] = useState({
    ID: id,
    name: "",
    price: "",
    quantity: "",
  });
  const data = useSelector((state) => state);
  console.log(data);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const update = () => {
    const action = { type: "UPDATE-PROSUCT", payload: product };
    dispatch(action);
  };

  const deleteproduct = () => {
    const action = { type: "DELETE-PRODUCT", payload: product };
    dispatch(action);
  };
  return (
    <div style={{textAlign:'center'}}>
      <h3>ID:{id}</h3>
      name: <input onChange={handleInput} name="name" type="text" /> <br />
      <br />
      price: <input onChange={handleInput} name="price" type="text" /> <br />
      <br />
      quantity: <input
        onChange={handleInput}
        name="quantity"
        type="text"
      />{" "}
      <br />
      <br />
      <button onClick={update}>Update</button>
      <button onClick={deleteproduct}>Delete</button>
      <ul>
        {data.customers?.map((customer, i) => (
          <Link key={i} to={`/EditCustomers/${customer.ID}/${customer.fName}`}>
            {" "}
            <li>
              {customer.fName} {customer.lName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
