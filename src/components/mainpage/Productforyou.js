import React from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context';

export const Productforyou = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div>
        <div className="product-for-you">
                <div className="header">
                    <h1>Products For You</h1>
                    <Link to="/productpage">See More</Link>
                </div>
            <div className="container-1">
                {products.map((value, index) => {
          return (
            <div className="first" key={index}>
              <img src={value.image} alt="cap" width={'150px'} height={'150px'}/>
              <h4>{value.name}</h4>
              <p>Rs: {value.price}</p>
              </div>
          );
        })}
            </div>
        </div>
    </div>
  )
}