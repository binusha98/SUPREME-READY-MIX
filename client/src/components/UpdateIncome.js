import React, { Component } from 'react'
import axios from 'axios';
    export default class UpdateIncome extends Component {



        constructor(props){
            super(props);
            this.state={
                Income_date:"",
                Income_Type:"",
                Income_Description:"",
                Income_Amount:""
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
        const _id = this.props.match.params.incomeid;
        const {Income_date,Income_Type,Income_Description,Income_Amount} = this.state;

        const data ={
            Income_date:Income_date,
            Income_Type:Income_Type,
            Income_Description:Income_Description,
            Income_Amount:Income_Amount
        }

        console.log(data)


        axios.put(`http://localhost:8070/Income/update/${_id}`,data).then((res) =>{
            alert("Income Updated Successfully");
        if(res.data.success){
                
                this.setState(
                    {

                    Income_date:"",
                    Income_Type:"",
                    Income_Description:"",
                    Income_Amount:""
                }
                )
            }
        })
    }

    
        
        componentDidMount(){

            const _id = this.props.match.params.incomeid;
    
            axios.get(`http://localhost:8070/Income/${_id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        Income_date:res.data.Income.Income_date,
                        Income_Type:res.data.Income.Income_Type,
                        Income_Description:res.data.Income.Income_Description,
                        Income_Amount:res.data.Income.Income_Amount
                    });
    
                    console.log(this.state.Income);
                }
    
            });
        }
        
    

    

        render() {
            return(
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Update Income</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Date</label>
                            <input type="date"
                            className="form-control"
                            name="Income_date"
                            placeholder="Enter Date"
                            value={this.state.Income_date}
                            onChange={this.handleInputChange}/>
                        </div>
   
   
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Type</label>
                            <input type="text"
                            className="form-control"
                            name="Income_Type"
                            placeholder="Enter Income type"
                            value={this.state.Income_Type}
                            onChange={this.handleInputChange}/>
                        </div>
   
   
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="Income_Description"
                            placeholder="Enter Description"
                            value={this.state.Income_Description}
                            onChange={this.handleInputChange}/>
                        </div>
   
   
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Amount</label>
                            <input type="text"
                            className="form-control"
                            name="Income_Amount"
                            placeholder="Enter Amount "
                            value={this.state.Income_Amount}
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