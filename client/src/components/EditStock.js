import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';

export default class EditStock extends Component {
    
    constructor(props){
        super(props);
        this.state={
            Stock_type:"",
            size:"",
            date:"",
            Stock_typeError:"",
            sizeError:"",
            dateError:""
        }
    }

    validate =() =>{
        
        let Stock_typeError="";
        let sizeError="";
        let dateError="";

        if(!this.state.Stock_type){
            Stock_typeError = "Stock Type cannot be blank"
       }
       if(!this.state.size){
            sizeError = "Stock size cannot be blank"
       }
       if(!this.state.date){
            dateError = "Date cannot be blank"
       }

       
        if(Stock_typeError || sizeError || dateError ){
            this.setState({Stock_typeError, sizeError, dateError});
            return false;
        }

        return true;
   };


    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            
            ...this.state,
            [name]:value
            
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const _id = this.props.match.params.stockid;

        const isValid = this.validate();
        if (isValid){


        const {Stock_type,size,date} = this.state;

        const data ={
            Stock_type:Stock_type,
            size:size,
            date:date
        }

        console.log(data)

        axios.put(`http://localhost:8070/Stock/update/${_id}`,data).then((res) =>{
            if(res.data.success){
                alert("Stock Updated Successfully")
                this.setState(
                    {
                        Stock_type:"",
                        size:"",
                        date:"",
                        Stock_typeError:"",
                        sizeError:"",
                        dateError:""
                    }
                )
            }
        })
    }
    }
    componentDidMount(){
        const _id = this.props.match.params.stockid;
        
        axios.get(`http://localhost:8070/Stock/${_id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Stock_type:res.data.Stock.Stock_type,
                    size:res.data.Stock.size,
                    date:res.data.Stock.date
                });
                console.log(this.state.Stock);
            }
        });
    }

    render(){
        return(

            <><BrowserRouter>

                <div className="container">
                    <MNavBar />

                </div>
            </BrowserRouter>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Update Stock</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <labal style={{ marginBottom: '5px' }}>Stock Type  </labal>
                            <input type="text"
                            className="form-control"
                                pattern="[a-z]||[A-Z]{1,15}"
                                title="Stock Type should only contain letters"
                                name="Stock_type"
                                placeholder="Enter Stock Type"
                                value={this.state.Stock_type}
                                onChange={this.handleInputChange} />
                                <div style={{color:"red"}}>
                                    {this.state.Stock_typeError}
                                </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <labal style={{ marginBottom: '5px' }}>Stock Size </labal>
                            <input type="number"
                            className="form-control"
                                title="Stock size should only contain numbers (more than zero)"
                                min="1.00"
                                step="1.00"
                                name="size"
                                placeholder="Enter  size"
                                value={this.state.size}
                                onChange={this.handleInputChange} />
                                <div style={{color:"red"}}>
                                    {this.state.sizeError}
                                </div>

                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <labal style={{ marginBottom: '5px' }}>Date </labal>
                            <input type="date"
                            className="form-control"
                                name="date"
                                placeholder="Enter date"
                                value={this.state.date}
                                onChange={this.handleInputChange} />
                                <div style={{color:"red"}}>
                                    {this.state.dateError}
                                 </div>
                        </div>

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-squre"></i>
                            &nbsp;Update Stock
                        </button>
                    </form>
                </div></>
        )
    }
}
