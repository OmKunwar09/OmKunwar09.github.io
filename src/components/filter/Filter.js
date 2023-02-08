import React from 'react'
import { Form } from 'react-bootstrap'
import {useState} from 'react'
import "./../style.css"
import { CartState } from '../../context/Context'
import Rating from '../rating/Rating'
import {Button} from 'react-bootstrap'

const Filter = () => {
//  const [rate, setRate] = useState(2)
 const {
  productDispatch,
  productState: {byStock, byFastDelivery, sort, byRating, searchQuery},
} = CartState();
  return (
    <>
        <div className="filters">
        <span className="title">Filter Products</span>
        <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        </span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <Form.Check
          inline
          label="In Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
          <span>
            <label>Rating: </label>
            <Rating rating={byRating} onClick={(i)=>
             productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })} style={{cursor:'pointer'}}/>
            </span>
            <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
        </div>
    </>
  )
}

export default Filter;