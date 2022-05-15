import React, { Component } from 'react'
import axios from 'axios';

export default class SupplyDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            Supplies:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/supply/supplies/${id}`).then((res) =>{
              if(res.data.success){
                  this.setState({
                      Supplies:res.data.supplies
                    });

                    console.log(this.state.Supplies);
                
                }
            });
    }
   render(){
       const{supplierName,supType,supAmount,supTotalCost,amountPaid} = this.state.Supplies;
    
       return (
       <div style={{marginTop:'20px'}}>
           <h4>Supplies details about the supplier : {supplierName}</h4>
           <hr/>
           <dl className="row">
               <dt className="col-sm-3">Supplier Full Name </dt>
               <dd className="col-sm-9">{supplierName}</dd>

               <dt className="col-sm-3">Type of Supplies </dt>
               <dd className="col-sm-9">{supType}</dd>

               <dt className="col-sm-3">Supplies Amount </dt>
               <dd className="col-sm-9">{supAmount}</dd>

               <dt className="col-sm-3">Total Cost of Supplies </dt>
               <dd className="col-sm-9">{supTotalCost}</dd>

               <dt className="col-sm-3">Total amount paid </dt>
               <dd className="col-sm-9">{amountPaid}</dd>







           </dl>














       </div>







    


    )
   }

 



}