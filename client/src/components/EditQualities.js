import React, { Component } from 'react'
import axios from 'axios';
export default class EditQualities extends Component {


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
   const id = this.props.match.params.id;
   const {prodType,prodBrandName,prodStandards,expDate} = this.state;
   const data ={
    prodType:prodType,
    prodBrandName:prodBrandName,
    prodStandards:prodStandards,
    expDate:expDate, 

   }
   console.log(data)

   axios.put(`http://localhost:8070/quality/update/${id}`,data).then((res) =>{
          if(res.data.success){
            alert("Quality details Updated Successfully.")
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


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/quality/qualities/${id}`).then((res) =>{
          if(res.data.success){
              this.setState({
                prodType:res.data.qualities. prodType,
                prodBrandName:res.data.qualities.prodBrandName,
                prodStandards:res.data.qualities.prodStandards,
                expDate:res.data.qualities.expDate,
                });

                console.log(this.state.Qualities);
            
            }
        });
}
    

    render(){ 
      return (
        <div className = "col-md 8 mt-4 mx-auto">
         <h1 className ="h3 mb-3 font-weight-normal">Edit quality details</h1>
          <form className="needs-validation" noValidate>
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Product type</label>
            <input type="text"
            className="form-control"
            name="prodType;"
            placeholder="Enter the product type"
            value={this.state.prodType}
            onChange={this.handleInputChange}/>
            </div>
         
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Brand name of the product</label>
            <input type="text"
            className="form-control"
            name="prodBrandName"
            placeholder="Enter the brand name of the product"
            value={this.state.prodBrandName}
            onChange={this.handleInputChange}/>
           </div>
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Product Standards</label>
            <input type="text"
            className="form-control"
            name="prodStandards"
            placeholder="Enter the standards of the product"
            value={this.state.prodStandards}
            onChange={this.handleInputChange}/>
           </div>
 
           <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Date of expiry of the product</label>
            <input type="text"
            className="form-control"
            name="expDate"
            placeholder="Enter the expiry date of the product"
            value={this.state.expDate}
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