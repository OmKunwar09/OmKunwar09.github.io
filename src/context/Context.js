import { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { useReducer } from 'react';
import { cartReducer } from './Reducer';
import { productReducer } from './Reducer';
import { useContext } from 'react';
import Pdata from "./Pdata.js"


const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

  const products= [...Pdata.map((value,index)=>({
    id: value.id,
    name: value.Name,
    price:value.price,
    image:value.image,
    inStock:value.inStock,
    fastDelivery:value.fastDelivery,
    ratings:value.ratings,
  }))]
      
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch,productState, productDispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};


export default Context;