import React, { useRef } from 'react'
import logo from '../../Image/Log.png'
import {FaTimes,FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Badge, FormControl } from 'react-bootstrap';
import { Container, Dropdown, Navbar} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../../context/Context';
import {Button} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import Productpage from '../../components/productpage/Productpage';
import Cart from '../../components/mainpage/Cart';

export const Navbars = () => {
  const { state:{cart},dispatch,productDispatch}= CartState()
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
{}
  return (
      <header>
    <div>
      <Navbar bg='light' variant='light'>
          <Navbar.Brand>
            <Link to="/"><img src={logo} height={'50px'} width={'70px'}/></Link>
          </Navbar.Brand>

          <nav ref={navRef}>
          <Navbar.Text className='search'>
            <FormControl style={{width:500}}
            placeholder='Search'
            className='m-auto'
            onChange={(e)=>{
              productDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value,
              });
            }}/>
          </Navbar.Text>
          <Link to="/" style={{textDecoration:'none'}}>Home</Link>
          <Link to="/about" style={{textDecoration:'none'}}>About</Link>
          <Link to="/productpage" style={{textDecoration:'none'}}>Product</Link>
          {/* <Link to="/contact" style={{textDecoration:'none'}}>Contact</Link> */}
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
          </button> 
          <Dropdown alignRight>
      <Dropdown.Toggle align="Right" variant="success" id="dropdown-basic">
        <FaShoppingCart/>
         <span> <Badge> {cart.length} </Badge></span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="Right" style={{minWidth:320}}>
        {cart.length>0?(
        <>
          {cart.map((prod)=>(
          <span className='cartitem' key={prod.id}>
                      <img src={prod.image}
                      alt={prod.name}
                      className='cartItemImg'/>

                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>   Rs {prod.price.split(".")[0]}</span>
                      </div>

                      <AiFillDelete
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                      onClick={()=>
                      dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod, 
                      })
                      } 
                      />
                    </span>
            ))}
            <Link to="/cart">
             <Button style={{width:"80%",margin:"0 10px"}}>
              Go To Cart
              </Button>
              </Link>
          </>
        ):(<span style={{padding:10}}>Cart Is Empty!</span>)}
      </Dropdown.Menu>
   
   
    </Dropdown>
      </Navbar>
    </div>
</header>
  )
}
