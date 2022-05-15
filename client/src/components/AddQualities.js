import React, { Component } from 'react'
import axios from 'axios';
export default class AddQualities extends Component {

   constructor(props){
     super(props);
     this.state={
        prodType:"",
        prodBrandName:"",
        prodStandards:"",
        expDate:""




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
    const {prodType,prodBrandName,prodStandards,expDate}  = this.state
    const data ={
    prodType:prodType,
    prodBrandName:prodBrandName,
    prodStandards:prodStandards,
    expDate:expDate

    }
    console.log(data)

    axios.post("http://localhost:8070/quality/add",data).then((res) =>{
      alert("Quality details Added Successfully.")
           if(res.data.success){
             this.setState(
               {
                prodType:"",
                prodBrandName:"",
                prodStandards:"",
                expDate:""
        

               }
             )
           }
    })


  }

   render(){ 
     return (
       <div className = "col-md 8 mt-4 mx-auto">
        <h1 className ="h3 mb-3 font-weight-normal">Add Quality Details</h1>
         <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Product Type</label>
           <input type="text"
           className="form-control"
           name="prodType"
           placeholder="Enter the product type ex:cement,stones etc.."
           value={this.state.prodType}
           onChange={this.handleInputChange}/>
           </div>
        

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Brand name of the Product</label>
           <input type="text"
           className="form-control"
           name="prodBrandName"
           placeholder="Enter the brand name of the product"
           value={this.state.prodBrandName}
           onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Standards of the product</label>
           <input type="text"
           className="form-control"
           name="prodStandards"
           placeholder="Enter the standards of the product"
           value={this.state.prodStandards}
           onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Product date of expiry</label>
           <input type="text"
           className="form-control"
           name="expDate"
           placeholder="Enter the date of expiry of the product"
           value={this.state.expDate}
           onChange={this.handleInputChange}/>
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