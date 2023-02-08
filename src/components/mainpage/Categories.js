import React from "react";
import hoodie from "../../Image/hoodies.jpg";
import cap from "../../Image/cap.jpg";
import jacket from "../../Image/jacket.jpg";
import shoe from "../../Image/shoe.jpg";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="categories">
      <ul className="Categoires-list">
        <li>
          <Link to="/" style={{textDecoration:'none'}}>
            {" "}
            <span>
              <img src={hoodie} alt="" width={"50px"} height={'50px'}/>
            </span>
            Hoodie
          </Link>
        </li>
        <li>
          <Link to="/" style={{textDecoration:'none'}}>
            <span>
              <img src={shoe} alt="" width={'50px'} height={'50px'}/>
            </span>
            Shoe
          </Link>
        </li>
        <li>
          <Link to="/" style={{textDecoration:'none'}}>
            <span>
              <img src={jacket} alt="" width={'50px'} height={'50px'}/>
            </span>
            Jacket
          </Link>
        </li>
        <li>
          <Link to="" style={{textDecoration:'none'}}>
            <span>
              <img src={cap} alt="" width={'50px'} height={'50px'}/>
            </span>
            Cap
          </Link>
        </li>
      </ul>
    </div>
  );
};
