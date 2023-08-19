import React from 'react';
import { Link ,Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/navi.css';
import Home from './Home';
import Product from './Product';
import Product_Manage from './Product_Manage';
import Product_approve from './Product_approve';
import Assisted_Purchasing from './Assisted_Purchasing';
import  { useState } from 'react';



const Navbar = () => {const linkStyles = {
  color: 'black',         // Set link color to black
  textDecoration: 'none'  // Remove underline
};
{/*const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

*/}

  return (  <>    <Router> 
    <div className='grid-container'>
      <div style={{ align:'left-align' , margin: '0 25px', display: 'flex', alignItems: 'center', marginRight: '10px' }} > <img src="./images/ProcSaa$Artboard 2.png" className="i1" alt="logo" style={{ width: '105px', height: '75px' }} />  </div>
     <div style={{ align:'left-align' , margin: '0 0px',display: 'flex', alignItems: 'center'}} > <img src="./images/ProcSaa$Artboard 1.png" alt="logo" className="i2" style={{ width: '155px', height: '45px' }} />  </div>
      <div style={{ position:'relative', marginLeft:'25px', margin:'15px 100px -1000px 0px',padding:'0px 0px',border:'0px',height:'45px'  }}>
      <nav style={{ display: 'block', alignItems: 'center'
    // Remove underline
 }}>
      
          <ul style={{ display:'flex', alignItems:'flex-start', justifyContent: 'center', listStyle:'none' , marginLeft:'auto'}}>
            
        <li style={{ margin: '0 25px', padding: '10px', fontFamily:'sans-serif',fontSize:'19px'}}><a href="/" >Home</a></li>
        <li style={{ margin: '0 25px', padding: '10px',fontFamily:'sans-serif' ,fontSize:'19px'}}><a href="/product">Platform</a></li>   
         
        <li style={{ margin: '0 25px', padding: '10px',fontFamily:'sans-serif' ,fontSize:'19px'}}><a href="/product_manage">Manage</a></li>   
        <li style={{ margin: '0 25px', padding: '10px',fontFamily:'sans-serif' ,fontSize:'19px'}}><a href="/product_approve">Approve</a></li>   
        <li style={{ margin: '0 25px', padding: '10px',fontFamily:'sans-serif' ,fontSize:'19px'}}><a href="/assisted_purchasing">Assisted purchasing</a></li>   
</ul>

{/*
         <li style={{ margin: '0 25px', padding: '10px', fontFamily: 'sans-serif', fontSize: '19px' }}>
              {/* Add onClick event to toggle the dropdown visibility 
              <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>Product</span>
              {/* Render the dropdown links based on visibility state 
              {isDropdownVisible && (
                <ul style={{ position: 'absolute', top: '120%', alignItems:'center', left: 660, height:'70px', background: 'white', padding: '8px 0',listStyle:'none', zIndex: 1 }}>
                  <li>
                    <a href="./Product_Manage.js" style={{linkStyles,margin: '10px 25px' , padding: '10px', fontFamily:'sans-serif',fontWeight:'bolder' ,fontSize:'20px'}}>Discover</a>
                  </li>
                  <li>
                    <a href="./Product_approve.js " style={{linkStyles,margin: '0 25px' , padding: '10px', fontFamily:'sans-serif',fontWeight:'bolder',fontSize:'20px'}}>Manage</=>
                  </li>
                  <li>
                    <a href="./Assisted_Purchasing.js" style={{linkStyles,margin: '0 25px' , padding: '10px', fontFamily:'sans-serif',fontWeight:'bolder',fontSize:'20px'}}>Approve</=>
                  </li>
                </li>
              */}         
                
                
{/*
                <Router>
                <Switch>
        <Route exact path="./Product.js"  />
        <Route exact path="./Product_Manage.js"   />
        <Route exact path="./Product_approve.js" />

      </Switch>
                </Router>
                
          
            */}
           
        </nav>
        </div> 
     </div>
   <Switch>
    
        <Route exact path="/" component={Home.js} />
        <Route exact path="/product" component={Product.js} />
 
           
    </Switch>
 </Router>
      

        </>
  );
};

export default Navbar;
