import React, { Component } from 'react'

export default class CNavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
             <div className="container-fluid">
                 {/*<a class="navbar-brand" >CRUD app using MERS stack</a> */}

                 <button className="navbar-toggler" type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarNav" aria-controls="navbarNav"
                 arial-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                         <li className="nav-item">
                             <a className="nav-link" aria-current="page" href="/">CUSTOMERS</a>
                         </li>
                         <li>
                             <a className="nav-link" aria-current="page" href="/inthome">INTERACTIONS</a>
                         </li>
                     </ul>
                 </div>


             </div>
            </nav>
            
        )
    }
}