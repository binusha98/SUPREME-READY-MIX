import React, { Component } from 'react'
import axios from 'axios';

export default class QualityDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            Qualities:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/quality/qualities/${id}`).then((res) =>{
              if(res.data.success){
                  this.setState({
                      Qualities:res.data.qualities
                    });

                    console.log(this.state.Qualities);
                
                }
            });
    }
   render(){
       const {prodType,prodBrandName,prodStandards,expDate} = this.state.Qualities;
    
       return (
       <div style={{marginTop:'20px'}}>
           <h4>Quality details about the products bought from the company</h4>
           <hr/>
           <dl className="row">
               <dt className="col-sm-3">Product Type </dt>
               <dd className="col-sm-9">{prodType}</dd>

               <dt className="col-sm-3">Product Brand Name </dt>
               <dd className="col-sm-9">{prodBrandName}</dd>

               <dt className="col-sm-3">Standards of the product </dt>
               <dd className="col-sm-9">{prodStandards}</dd>

               <dt className="col-sm-3">Date of expiry </dt>
               <dd className="col-sm-9">{expDate}</dd>







           </dl>














       </div>







    


    )
   }

 



}