// const intialState = {
//     products: [
//       { ID: "A1", name: "Iphon", price: 3000, quantity: 4 },
//       { ID: "A2", name: "apple computer", price: 6000, quantity: 2 },
//     ],
//     customers: [
//       { ID: "B1", fName: "oshrat", lName: "balay", city: "rehovot" },
//       { ID: "B2", fName: "haim", lName: "arka", city: "yavne" },
//     ],
//     purchases: [],
//   }

function appreducer(
  state = {
    products: [
      { ID: "A1", name: "Iphon", price: 3000, quantity: 4 },
      { ID: "A2", name: "apple watch", price: 6000, quantity: 12 },
      { ID: "A3", name: "apple computer ", price: 3000, quantity: 8 },
      { ID: "A4", name: "airpods", price: 600, quantity: 7 },
    ],
    customers: [
      { ID: "B1", fName: "oshrat", lName: "balay", city: "rehovot" },
      { ID: "B5", fName: "mazal", lName: "balay", city: "rehovot" },
      { ID: "B2", fName: "haim", lName: "arka", city: "yavne" },
    ],
    purchases: [
      { ID: "C1", customerID: "B1", productID: "A1", date: "20.4.22" },
      { ID: "C2", customerID: "B2", productID: "A1", date: "21.4.22" },
      { ID: "C3", customerID: "B5", productID: "A2", date: "23.4.22" },
      { ID: "C4", customerID: "B5", productID: "A3", date: "23.4.22" },
      { ID: "C5", customerID: "B2", productID: "A4", date: "23.4.22" },
    ],
  },
  action
) {
  switch (action.type) {
    case "SAVE":
      return { ...state, purchases: [...state.purchases, action.payload] };

    case "UPDATE-PROSUCT":
      const id = action.payload.ID
      const arr = [...state.products]
      const index = [...arr]
      .findIndex(product => product.ID === id)
      console.log("index", index)
      if (index >= 0) {
          arr[index] = action.payload
      }

      return arr

      case "DELETE-PRODUCT":
        const id2 = action.payload.ID
        const arr2 = [...state.products]
        const index2 = arr2.findIndex(product => product.ID === id2)
        if (index2 >=0) {
          arr2.splice(index2,1)
        }

        return arr2

 
        case 'UPDATE-CUSTOMER':
         let id3 = action.payload.ID
         let arr3=  [...state.customers]
         let index3 = arr3.findIndex(customer=> customer.ID === id3) 
         if( index3>= 0 ){
          arr3[index3]= action.payload
         }
         return arr3

         case 'DELETE-CUSTOMER':
          let id4 = action.payload.ID
          let arr4 = [ ...state.customers]
          let index4 = arr4.findIndex(customer => customer.ID === id4)
          if (index4 >= 0) {
            arr4.splice(index4,1)
            
          }
          return arr4


    default:
      return state;
  }
}

export default appreducer;
