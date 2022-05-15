import React, { Component } from 'react'
import axios from 'axios'
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';


export default class EditCustomer extends Component{
    constructor(props){
        super(props);
        this.state={
           cus_id:"",
           cus_name:"",
           cus_dob:"",
           cus_email:"",
           cus_phone:"",
           cus_fax:"",
           cus_address:"",
           cus_designation:""
        }
    }

    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {cus_id,cus_name,cus_dob,cus_email,cus_phone,cus_fax,cus_address,cus_designation} = this.state;

        const data ={
            cus_id:cus_id,
            cus_name:cus_name,
            cus_dob:cus_dob,
            cus_email:cus_email,
            cus_phone:cus_phone,
            cus_fax:cus_fax,
            cus_address:cus_address,
            cus_designation:cus_designation
        }

        console.log(data)

        axios.put(`http://localhost:8070/customer/update/${id}`,data).then((res) =>{
             if(res.data.success){
                 alert("Customer Details Updated")
                 this.setState(
                   {
                    cus_id:"",
                    cus_name:"",
                    cus_dob:"",
                    cus_email:"",
                    cus_phone:"",
                    cus_fax:"",
                    cus_address:"",
                    cus_designation:""
                   }  
                 )
             }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/customer/view/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    cus_id:res.data.customer.cus_id,
                    cus_name:res.data.customer.cus_name,
                    cus_dob:res.data.customer.cus_dob,
                    cus_email:res.data.customer.cus_email,
                    cus_phone:res.data.customer.cus_phone,
                    cus_fax:res.data.customer.cus_fax,
                    cus_address:res.data.customer.cus_address,
                    cus_designation:res.data.customer.cus_designation 
                });

                console.log(this.state.customer);
            }
        });
    }

    render() {
        return (
            <><BrowserRouter>
                <div className="container">
                    <CNavBar />
                </div>
            </BrowserRouter>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">EDIT CUSTOMER DETAILS</h1>&nbsp;
                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer ID</label>
                            <input type="text"
                                className="form-control"
                                name="cus_id"
                                placeholder="enter ID"
                                value={this.state.cus_id}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer Name</label>
                            <input type="text"
                                className="form-control"
                                name="cus_name"
                                placeholder="enter name"
                                value={this.state.cus_name}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer DOB</label>
                            <input type="text"
                                className="form-control"
                                name="cus_dob"
                                placeholder="enter date of birth"
                                value={this.state.cus_dob}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer E-mail</label>
                            <input type="text"
                                className="form-control"
                                name="cus_email"
                                placeholder="enter email"
                                value={this.state.cus_email}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer Contact NO</label>
                            <input type="text"
                                className="form-control"
                                name="cus_phone"
                                placeholder="enter mobile no"
                                value={this.state.cus_phone}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer FAX</label>
                            <input type="text"
                                className="form-control"
                                name="cus_fax"
                                placeholder="enter fax no"
                                value={this.state.cus_fax}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer Address</label>
                            <input type="text"
                                className="form-control"
                                name="cus_address"
                                placeholder="enter address"
                                value={this.state.cus_address}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer Designation</label>
                            <input type="text"
                                className="form-control"
                                name="cus_designation"
                                placeholder="enter designation"
                                value={this.state.cus_designation}
                                onChange={this.handleInputChange} />
                        </div>

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;UPDATE DETAILS
                        </button>

                    </form>

                </div></>
        );
    }
}