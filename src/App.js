import './App.css';
import { Footer } from './common/footer/Footer';
import Header from './common/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './components/mainpage/Mainpage';
import Productpage from './components/productpage/Productpage';
import Cart from './components/mainpage/Cart';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route>
          <Route index element={<Mainpage />} />
          <Route path='/productpage' element={<Productpage/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* <Route path='/contact' element={<Contact/>}></Route> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
