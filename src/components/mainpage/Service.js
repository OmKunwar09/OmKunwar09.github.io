import React from 'react'
import { FaHeadset, FaShieldAlt, FaTruck } from 'react-icons/fa'
import { FcCustomerSupport } from "react-icons/fc";

export const Service = () => {
  return (
    <div>
        <div className="service">
            <h1> <FcCustomerSupport/> Our Service</h1>
            <div className="container-1">
                <div className="first-1">
                    <i className='icon'><FaTruck/></i> 
                    <h4>Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum?</p>
                </div>
                <div className="first-1">
                    <i className='icon'><FaShieldAlt/></i>
                    <h4>Shop With Confidence</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum?</p>
                </div>
                <div className="first-1">
                    <i className='icon'><FaHeadset/></i>
                    <h4>24/7 Service</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum?</p>
                </div>
            </div>
        </div>
    </div>
  )
}
