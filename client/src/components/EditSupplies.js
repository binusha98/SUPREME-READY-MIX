import React, { Component } from 'react'
import axios from 'axios';
export default class EditSupplies extends Component {


  constructor(props){
    super(props);
    this.state={
     supplierName:"",
     supType:"",
     supAmount:"",
     supTotalCost:"",
     amountPaid:""




    }
  }
  handleInputChange = (e) =>{
    const{name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
  })

 }

 onSubmit = (e) =>{
   
   e.preventDefault();
   const id = this.props.match.params.id;
   const {supplierName,supType,supAmount,supTotalCost,amountPaid} = this.state;
   const data ={
     supplierName:supplierName,
     supType:supType,
     supAmount:supAmount,
     supTotalCost:supTotalCost, 
     amountPaid:amountPaid

   }
   console.log(data)
   axios.put(`http://localhost:8070/supply/update/${id}`,data).then((res) =>{
          if(res.data.success){
            alert("Details Updated Successfully.")
            this.setState(
              {
               supplierName:"",
               supType:"",
               supAmount:"",
               supTotalCost:"",
               amountPaid:""

              }
            )
          }
   })


 }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/supply/supplies/${id}`).then((res) =>{
          if(res.data.success){
              this.setState({
                supplierName:res.data.supplies.supplierName,
                supType:res.data.supplies.supType,
                supAmount:res.data.supplies.supAmount,
                supTotalCost:res.data.supplies.supTotalCost,
                amountPaid:res.data.supplies.amountPaid
                });

                console.log(this.state.Supplies);
            
            }
        });
}
    

    render(){ 
      return (
        <div className = "col-md 8 mt-4 mx-auto">
         <h1 className ="h3 mb-3 font-weight-normal">Edit Supply and Supplier Details</h1>
          <form className="needs-validation" noValidate>
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Supplier Name</label>
            <input type="text"
            className="form-control"
            name="supplierName"
            placeholder="Enter Supplier Name"
            value={this.state.supplierName}
            onChange={this.handleInputChange}/>
            </div>
         
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Type of Supply</label>
            <input type="text"
            className="form-control"
            name="supType"
            placeholder="Enter the Type of supplies"
            value={this.state.supType}
            onChange={this.handleInputChange}/>
           </div>
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Supply Amount</label>
            <input type="text"
            className="form-control"
            name="supAmount"
            placeholder="Enter the amount of supplies"
            value={this.state.supAmount}
            onChange={this.handleInputChange}/>
           </div>
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Total cost of Supplies</label>
            <input type="text"
            className="form-control"
            name="supTotalCost"
            placeholder="Enter the total cost of Supplies"
            value={this.state.supTotalCost}
            onChange={this.handleInputChange}/>
           </div>
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Amount Paid</label>
            <input type="text"
            className="form-control"
            name="amountPaid"
            placeholder="Enter the amount that paid to the supplier"
            value={this.state.amountPaid}
            onChange={this.handleInputChange}/>
           </div>
 
           <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update Details
 
           </button>
 
 
 
         </form>
 
 
 
        
       </div>
 
 
     );
    }
 
   }