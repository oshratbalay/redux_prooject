import React from "react";
import { useSelector } from "react-redux";

export default function PurchasedAmout() {
  const dataState = useSelector((state) => state);

  const purchasesAmout = dataState.purchases.length;

  return (
    <div>
      <div> purchases amount : {purchasesAmout}</div>
      <br />
    </div>
  );
}
