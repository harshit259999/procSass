import React from 'react'
import '../styles/navi.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Product_approve = () => {
  return (
    <> <Router>
    <div id='navi10' style={{top: '255px',
    left: '847px',
    width: '524px',
    height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
            {/* Add your text to the left */}
            <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
             <div id='ten'> <b >Set Approval Workflows</b></div>
    
            <div id='light' style={{color:'white'}} > <p> 
            Approval workflows makes approval process across teams faster and more efficient.       </p></div> 
    
            </div>
    
            <div style={{width:'auto'}}>
              <img
                src="/images/404.png"   
                alt="Home Image"
                style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
              />
            </div>
          </div>
    
    
    
    {/*4.2*/}
    
    
    <div id='navi11' style={{top: '255px',
    left: '847px',
    width: '524px',
    height: '374px', display: 'flex',width: 'auto',height:'758px', alignItems: 'center', justifyContent: 'center' ,  margin:'0px' }}>
            {/* Add your text to the left */}
            <div style={{ marginRight: '20px' ,fontSize:'20px',width:'659px',height:'252px',fontFamily:'Source Sans Pro'}}>
             <div id='eleven'> <b >Track the Approval Process</b></div>
    
            <div id='light' style={{color:'black'}} > <p> 
            Get notified when the request is approved by any approver in the approval workflow.       </p></div> 
    
            </div>
    
            <div style={{width:'auto'}}>
              <img
                src="/images/S44.png"   
                alt="Home Image"
                style={{ width: '624px', height: '374px' ,borderRadius:'20px'}}
              />
            </div>
          </div>
    </Router>
    </>
)}

export default Product_approve;