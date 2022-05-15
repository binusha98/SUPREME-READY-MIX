import React, { Component } from 'react'
import axios from 'axios';
export default class AddSupplies extends Component {

   constructor(props){
     super(props);
     this.state={
      supplierName:"",
      supType:"",
      supAmount:"",
      supTotalCost:"",
      amountPaid:"",
      nameError:"",
      typeError:"",
      amountError:"",
      totalcostError:"",
      paidError:"",
      






     }
   }
  
  validate =()=>{
   let nameError="";
   let typeError="";
   let amountError="";
   let totalcostError="";
   let paidError="";

   if(!this.state.supplierName){
    nameError = "Field cannot be blank"
}
if(!this.state.supType){
    typeError = "Field cannot be blank"
}
if(!this.state.supAmount){
    amountError = "Field cannot be blank"
}
if(!this.state.supTotalCost){
     totalcostError = "Field cannot be blank"
}
if(!this.state.amountPaid){
     paidError = "Field cannot be blank"
}



 if(nameError || typeError || amountError || totalcostError || paidError){
     this.setState({nameError, typeError, amountError,totalcostError, paidError});
     return false;
 }

 return true;




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
    const isValid = this.validate();
        if (isValid){
    const {supplierName,supType,supAmount,supTotalCost,amountPaid} = this.state;
    const data ={
      supplierName:supplierName,
      supType:supType,
      supAmount:supAmount,
      supTotalCost:supTotalCost, 
      amountPaid:amountPaid

    }
    console.log(data)

    axios.post("http://localhost:8070/supply/add",data).then((res) =>{
           if(res.data.success){
            alert("Suppliers and Supplies details Added Successfully.")
             this.setState(
               {
                supplierName:"",
                supType:"",
                supAmount:"",
                supTotalCost:"",
                amountPaid:"",
                nameError:"",
                typeError:"",
                amountError:"",
                totalcostError:"",
                paidError:""

               }
             )
           }
    })

  }
  }

   render(){ 
     return (
       <div className = "col-md 8 mt-4 mx-auto">
        <h1 className ="h3 mb-3 font-weight-normal">Add Supply and Supplier Details</h1>
         <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Supplier Name</label>
           <input type="text"
           className="form-control"
           name="supplierName"
           placeholder="Enter Supplier Name"
           value={this.state.supplierName}
           onChange={this.handleInputChange}/>

                <div style={{color:"red"}}>
                               {this.state.nameError}
                </div>
           </div>
        

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Type of Supply</label>
           <input type="text"
           className="form-control"
           name="supType"
           placeholder="Enter the Type of supplies"
           value={this.state.supType}
           onChange={this.handleInputChange}/>

                <div style={{color:"red"}}>
                               {this.state.typeError}
                </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Supply Amount</label>
           <input type="text"
           className="form-control"
           name="supAmount"
           placeholder="Enter the amount of supplies"
           value={this.state.supAmount}
           onChange={this.handleInputChange}/>

                <div style={{color:"red"}}>
                               {this.state.amountError}
                </div>
              
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Total cost of Supplies</label>
           <input type="text"
           className="form-control"
           name="supTotalCost"
           placeholder="Enter the total cost of Supplies"
           value={this.state.supTotalCost}
           onChange={this.handleInputChange}/>

                  <div style={{color:"red"}}>
                               {this.state.totalcostError}
                </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Amount Paid</label>
           <input type="text"
           className="form-control"
           name="amountPaid"
           placeholder="Enter the amount that paid to the supplier"
           value={this.state.amountPaid}
           onChange={this.handleInputChange}/>

           <div style={{color:"red"}}>
                               {this.state.paidError}
                </div>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
             <i className="far fa-check-square"></i>
             &nbsp; Save Details

          </button>



        </form>



       
      </div>


    );
   }

  }

 
