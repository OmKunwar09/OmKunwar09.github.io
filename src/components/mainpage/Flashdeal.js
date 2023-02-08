import React from 'react'
import "react-multi-carousel/lib/styles.css";
import jacket from "../../Image/flash/Jacket.jpg"
import cap from "../../Image/flash/cap.jpg"
import hoodie from "../../Image/flash/hoodie.jpg"
import shoe from "../../Image/flash/shoe.jpg"
import {FaBolt} from 'react-icons/fa'


export const Flashdeal = () => {

    return (
        <>
          <div className="flashdeal">
          <h2><i className='fa fa-fa-bolt'><FaBolt/></i>Flash Deals</h2>
          <div className="container-1 d_flex">
            <div className="first">
              <img src={jacket} width={'300px'} height={'300px'}/>
              <h5>Puffer Jacket</h5>
              <span className='line-through'>रु-2050</span><p>रु-1650</p>
            </div>
            <div className="first">
              <img src={cap}  width={'300px'} height={'300px'}/>
              <h5>Winter Cap</h5>
              <span className='line-through'>रु-1050</span><p>रु-700</p>
            </div>
            <div className="first">
              <img src={hoodie}  width={'300px'} height={'300px'}/>
              <h5>Multi-Color Hoodie</h5>
              <span className='line-through'>रु-1950</span><p>रु-1650</p>
            </div>
            <div className="first">
              <img src={shoe}  width={'300px'} height={'300px'}/>
              <h5>Running Shoe</h5>
              <span className='line-through'>रु-2150</span><p>रु-1850</p>
            </div>
          </div>
          </div>
      </>
      )
    }