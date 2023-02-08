import React from 'react'
import { Button } from 'react-bootstrap';
import { CartState } from '../../context/Context';
import { Card } from 'react-bootstrap';
import Filter from '../filter/Filter';
import Rating from '../rating/Rating';
import { useState } from 'react';
import "./../style.css"

const Productpage = () => {

   
    const {
        state: { products,cart},
        dispatch,
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

      const transformProducts = () => {
        let sortedProducts = products;
    
        if (sort) {
          sortedProducts = sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
          );
        }
    
        if (!byStock) {
          sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
    
        if (byFastDelivery) {
          sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }
    
        if (byRating) {
          sortedProducts = sortedProducts.filter(
            (prod) => prod.ratings >= byRating
          );
        }
    
        if (searchQuery) {
          sortedProducts = sortedProducts.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
          );
        }
    
        return sortedProducts;
      };
  return (
    
    <div className='productPage'>

      <div className="filter">
        <Filter/>
      </div>

      <div className="container-1">
      {transformProducts().map((prod,index)=>{
        return (
          <div className="products" key={index}>
            <Card style={{ width: 'fit-content' }}>
      <Card.Img variant="top" src={prod.image} style={{width:'250px',height:'200px'}}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} /> <br/>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
      </Card.Body>
    </Card>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Productpage