import React from 'react'
import '../styles/navi.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Assisted_Purchasing = () => {
  return (
    <><Router>
    
<div id='navi12' style={{top: '255px',
left: '847px',
width: '524px',
height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
        {/* Add your text to the left */}
        <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
         <div id='twelve'> <b >Expert SAAS Negotiators</b></div>

        <div id='light' style={{color:'white'}} > <p> 
        Get the best deals on your existing contracts or new purchases by reaching out to our expert SAAS negotiators   </p></div> 

        </div>

        <div style={{width:'auto'}}>
          <img
            src="/images/WhatsApp Image 2023-06-13 at 10.09.01 PM.png"    
            alt="Home Image"
            style={{ width: '624px', height: '174px' ,borderRadius:'20px'}}
          />
        </div>
      </div>




{/*5.2*/}



<div id='navi13' style={{top: '255px',
left: '847px',
width: '724px',
height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
        {/* Add your text to the left */}
        <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro',paddingRight:'150px'}}>
         <div id='thirteen'> <b >Get Immediate Assistance On Chat Or Call</b></div>

        <div id='light' style={{color:'white'}} > <p> 
        Our expert negotiators will assist you in procurement process to expedite the purchase. </p></div> 

        </div>

        <div style={{width:'500px'}}>
          <img
            src="/images/WhatsApp Image 2023-06-13 at 10.09.01 PM (1).png"    
            alt="Home Image"
            style={{ width: '424px', height: '574px' ,borderRadius:'20px'}}
          />
        </div>
      </div>


</Router>

    </>
  )
}

export default Assisted_Purchasing;