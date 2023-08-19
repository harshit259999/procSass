import React from 'react';
import Product_Manage from "./Product_Manage";
import Assisted_Purchasing from './Assisted_Purchasing';
import Product_approve from './Product_approve';
import '../styles/navi.css';
import { Link ,Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Product = () => {
  return (
    <> 
<div>
 
   {/*
    <div className='grid-container'>
     
     <div style={{ align:'left-align' , margin: '0 1000px',display: 'flex', alignItems: 'center', fontFamily:'sans-serif'}} > <b> </b>  </div>
      <div style={{ position:'relative', marginLeft:'25px', margin:'15px 1000px 0px -1200px',padding:'0px 0px',border:'0px',height:'45px'  }}>
       <nav style={{ display: 'block', alignItems: 'center'
    // Remove underline
 }}>
      
          <ul style={{ display:'flex', alignItems:'flex-start', justifyContent: 'center', listStyle:'none' , marginLeft:'auto'}}>
            
          <li style={{ margin: '0 25px' , padding: '10px', fontFamily:'sans-serif',fontSize:'19px'}}><a href="/" >BACK TO HOMe</a></li>
            
             
            <li style={{ margin: '0 25px', padding: '10px',fontFamily:'sans-serif' ,fontSize:'19px'}}><a href="/Product_Manage.js">PA</a></li>

          </ul> 
        </nav>
        </div> </div>*/  } 
     
     {/*<Switch>
        <Route exact path="/" component={Product_Manage} />
        <Route path="/" component={Product_approve} />
      </Switch>
 
*/}  


















      
    
   
    </div>

    <div id='navi5' style={{top: '255px',
left: '847px',
width: '524px',
height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
       
        <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
         <div id='five'> <b >Discover the best software for your business <br></br></b></div>

        <div id='light' style={{color:'black'}} > <p> 
        Discover what SaaS is best for you and your team based on insights from thousands of software transactions.           
          </p></div> 

        </div>

        <div style={{width:'auto'}}>
          <img
            src="/images/S 2.png"  
            alt="Home Image"
            style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
          />
        </div>
      </div>













<div id='navi6' style={{top: '255px',
left: '847px',
width: '524px',
height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
       
        <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
         <div id='six'> <b >Compare SaaS products on <br></br>multiple parameters for the <br></br>right purchase </b></div>

        <div id='light' style={{color:'white'}} > <p> 
        Evaluate SaaS products based upon Pricing,<br></br> Implementation time, Compatibility, Usage data from <br></br>ProcSaaS Community             
          </p></div> 

        </div>

        <div style={{width:'auto'}}>
          <img
            src="/images/S 4.png"  
            alt="Home Image"
            style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
          />
        </div>
      </div>






<div id='navi3' style={{top: '255px',
left: '847px',
width: '524px',
height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
     
        <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro' }}>
         <div id='three'> <b >Check compatibility of SaaS products with your existing tech stack</b></div>

        <div id='light3' style={{color:'black'}}> <p> 
        Choose the right SaaS product          </p></div> 

        </div>

        
        <div style={{width:'auto'}}>
          <img
            src="/images/S 3.png"  
            alt="Home Image"
            style={{ width: '624px', height: '394px' ,borderRadius:'20px'}}
          />
        </div>
      </div>


 


</>



  );
};

export default Product;
