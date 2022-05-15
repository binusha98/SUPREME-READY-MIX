import React, { Component } from 'react'
import axios from 'axios';

    export default class CreateExpense extends Component {

        constructor(props){
            super(props);
            this.state={
                date:"",
                Description:"",
                Cost_Center:"",
                Remark:"",
                Amount:"",
                dateError: "",
                descriptionError: "",
                costError: "",
                remarkError: "",
                amountError: ""
                
            }
        }
    
        validate = () => {

            let dateError = "";
            let descriptionError = "";
            let costError = "";
            let remarkError = "";
            let amountError = ""; 

            if (!this.state.date) {
                dateError = "Date cannot be blank"
            }
            if (!this.state.Description) {
                descriptionError = "Description cannot be blank"
            }
            if (!this.state.Cost_Center) {
                costError = "cost center cannot be blank"
            }
            if (!this.state.Remark) {
                remarkError = "Remark cannot be blank"
            }
            if (!this.state.Amount) {
                amountError = "Amount cannot be blank"
            }
    
            if (dateError || descriptionError || costError || remarkError || amountError) {
                this.setState({ dateError, descriptionError, costError, remarkError, amountError });
                return false;
            }
    
            return true;
        };
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
        if (isValid) {

        const {date,Description,Cost_Center,Remark,Amount} = this.state;

        const data ={
            date:date,
            Description:Description,
            Cost_Center:Cost_Center,
            Remark:Remark,
            Amount:Amount
        }

        console.log(data)


        axios.post("http://localhost:8070/Expense/einsert",data).then((res) =>{
            if(res.data.success){
                this.setState({
                    date:"",
                    Description:"",
                    Cost_Center:"",
                    Remark:"",
                    Amount:"",
                    dateError: "",
                descriptionError: "",
                costError: "",
                remarkError: "",
                amountError: ""
                })
            }
        })
    }
}
    render() {
         return(
             <div className="col-md-8 mt-4 mx-auto">
                 <h1 className="h3 mb-3 font-weight-normal">Add New Expense</h1>
                 <form className="needs-validation" noValidate>
                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Date</label>
                         <input type="date"
                         className="form-control"
                         name="date"
                         placeholder="Enter Date"
                         value={this.state.date}
                         onChange={this.handleInputChange}/>
                         <div style={{color:"red"}}>
                               {this.state.dateError}
                           </div>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Type</label>
                         <input type="text"
                         className="form-control"
                         name="Description"
                         placeholder="Enter Description"
                         value={this.state.Description}
                         onChange={this.handleInputChange}/>
                         <div style={{color:"red"}}>
                               {this.state.descriptionError}
                           </div>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Description</label>
                         <input type="text"
                         className="form-control"
                         name="Cost_Center"
                         placeholder="Enter cost related sector"
                         value={this.state.Cost_Center}
                         onChange={this.handleInputChange}
                         required="required"/>
                         <div style={{color:"red"}}>
                               {this.state.costError}
                           </div>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Amount</label>
                         <input type="text"
                         className="form-control"
                         name="Remark"
                         placeholder="Enter Remark "
                         value={this.state.Remark}
                         onChange={this.handleInputChange}/>
                         <div style={{color:"red"}}>
                               {this.state.remarkError}
                           </div>
                     </div>

                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Amount</label>
                         <input type="text"
                         className="form-control"
                         name="Amount"
                         placeholder="Enter Amount "
                         value={this.state.Amount}
                         onChange={this.handleInputChange}/>
                         <div style={{color:"red"}}>
                               {this.state.amountError}
                           </div>
                     </div>



                     <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                         <i className="far fa-check-square"></i>
                         &nbsp; save
                     </button>
                 </form>
                 
             </div>
         )
    }
}