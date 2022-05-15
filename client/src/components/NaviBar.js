import React, { Component } from 'react'
export default class NaviBar extends Component {
   render(){ 
    return (
     <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
      <div className="container-fluid">
         <button className="navbar-toggler" type="button"
         data-bs-toggle="collapse"
         data-bs-target="navbarNav" aria-controls="navbarNav"
         arial-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item">
               <a className="nav-link" aria-current="page" href="/">Home</a>
                  
                  </li>
                  <li><a className="nav-link" aria-current="page" href="/qview">Product Quality</a></li>
                 <li><a className="nav-link" aria-current="page" href="/suphome">Supplies</a></li>
                 </ul>
               </div>
              



       
       </div>
      </nav>


    )
   }

 



}