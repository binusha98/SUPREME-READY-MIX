import React, { Component } from 'react'
import axios from 'axios';
    export default class UpdateExpense extends Component {



        constructor(props){
            super(props);
            this.state={
                date:"",
                Description:"",
                Cost_Center:"",
                Remark:"",
                Amount:""
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
        const _id = this.props.match.params.expenseid;
        const {date,Description,Cost_Center,Remark,Amount} = this.state;

        const data ={
            date:date,
            Description:Description,
            Cost_Center:Cost_Center,
            Remark:Remark,
            Amount:Amount
        }

        console.log(data)


        axios.put(`http://localhost:8070/Expense/eupdate/${_id}`,data).then((res) =>{
            
        if(res.data.success){
                
                this.setState(
                    {

                        date:"",
                        Description:"",
                        Cost_Center:"",
                        Remark:"",
                        Amount:""
                }
                )
                
            }
        })
    }

    
        
        componentDidMount(){

            const _id = this.props.match.params.expenseid;
    
            axios.get(`http://localhost:8070/Expense/${_id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        date:res.data.Expense.date,
                        Description:res.data.Expense.Description,
                        Cost_Center:res.data.Expense.Cost_Center,
                        Remark:res.data.Expense.Remark,
                        Amount:res.data.Expense.Amount
                    });
    
                    console.log(this.state.Expense);
                }
    
            });
        }
        
    

    

        render() {
            return(
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Update Expense</h1>
                    <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Date</label>
                         <input type="date"
                         className="form-control"
                         name="date"
                         placeholder="Enter Date"
                         value={this.state.date}
                         onChange={this.handleInputChange}/>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Type</label>
                         <input type="text"
                         className="form-control"
                         name="Description"
                         placeholder="Enter Description"
                         value={this.state.Description}
                         onChange={this.handleInputChange}/>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Description</label>
                         <input type="text"
                         className="form-control"
                         name="Cost_Center"
                         placeholder="Enter cost related sector"
                         value={this.state.Cost_Center}
                         onChange={this.handleInputChange}/>
                     </div>


                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Amount</label>
                         <input type="text"
                         className="form-control"
                         name="Remark"
                         placeholder="Enter Remark "
                         value={this.state.Remark}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Amount</label>
                         <input type="text"
                         className="form-control"
                         name="Amount"
                         placeholder="Enter Amount "
                         value={this.state.Amount}
                         onChange={this.handleInputChange}
                         required="required"/>
                     </div>
   
                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update
                        </button>
                    </form>
                    
                </div>
            )
       }
}   