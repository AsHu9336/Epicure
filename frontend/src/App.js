import './App.css';
import Home from './Screens/Home';
import About from './Screens/About';
//import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import SignUpPage from './Screens/SignUpPage';
import { CartProvider } from './Components/ContextReducer';
import MyCart from './Screens/MyCart';
import MyOrder from './Screens/MyOrder';




function App() {

  return (

    <CartProvider>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/SignUpPage" element={<SignUpPage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/MyCart" element={<MyCart />} />
          <Route exact path="/MyOrder" element={<MyOrder />} />
        </Routes>

      </Router>
    </CartProvider>


  );
}

export default App;
