import React from 'react';
import '../styles/navi.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Product_Manage = () => {
  return (
   <>

   <div id='navi8' style={{top: '255px',
   left: '847px',
   width: '524px',
   height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
           {/* Add your text to the left */}
           <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
            <div id='eight'> <b >Manage All Your SAAS Contracts From A Single Dashboard</b></div>
   
           <div id='light' style={{color:'white'}} > <p> 
           Track your start and end dates, owner, cost, status and much more.          </p></div> 
   
           </div>
   
           <div style={{width:'auto'}}>
             <img
               src="/images/WhatsApp Image 2023-06-13 at 10.05.07 PM.png"   
               alt="Home Image"
               style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
             />
           </div>
         </div>
   
   
   {/*3.2*/}
   
   
   
   
   
   <div id='navi9' style={{top: '255px',
   left: '847px',
   width: '524px',
   height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
           {/* Add your text to the left */}
           <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
            <div id='nine'> <b >Manage All Your SAAS Contracts From A Single Dashboard</b></div>
   
           <div id='light' style={{color:'black'}} > <p> 
           Track your start and end dates, owner, cost, status and much more.          </p></div> 
   
           </div>
   
           <div style={{width:'auto'}}>
             <img
               src="/images/S 400x.png"   
               alt="Home Image"
               style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
             />
           </div>
         </div>
   
   
   
   
   
   </>
  )
}

export default Product_Manage;