import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link ,Switch} from 'react-router-dom';
import './styles/navi.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';

import Product_Manage from './components/Product_Manage';
import Product_approve from './components/Product_approve';
import Assisted_Purchasing from './components/Assisted_Purchasing';


 

<div style={{ textAlign: 'center', paddingTop: '20px' ,width:'50px', height:'28px'}}></div>


const App = () => {
  return (
    
    <>
<Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route exact path="/product_manage" component={Product_Manage} />
        <Route exact path="/product_approve" component={Product_approve} />
        <Route path="/product_manage" component={Product_Manage} />
        <Route path="/product_approve" component={Product_approve} />
        <Route path="/assisted_purchasing" component={Assisted_Purchasing} />
      </Switch>
    </Router>
     {/*} <div>
      <ul>
        <li>
          <a href="/">Homei</a>
        </li>
        <li>
          <a href='./components/Product.jsx'>Products</a>
        </li>
        
      </ul>
      </div>/<Home/>
  *}
   



  {/*  <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Switch>


    </Router>
     */}   
     



 

</>
   
  );
};

export default App;












