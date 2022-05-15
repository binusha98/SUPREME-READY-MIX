import React, { Component } from 'react'
import axios from 'axios'
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';


export default class CustomerDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            customer:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/customer/view/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    customer:res.data.customer
                });

                console.log(this.state.customer);
            }
        });
    }

    onDelete = (id) =>{

        axios.delete(`http://localhost:8070/delete/${id}`).then((res) =>{
            alert("Record Deleted Successfully");
            this.retriveCustomer();
        })
    }

    render() {

        const {cus_id,cus_name,cus_dob,cus_email,cus_phone,cus_fax,cus_address,cus_designation} = this.state.customer;

        return (
            <><BrowserRouter>
                <div className="container">
                    <CNavBar />
                </div>
            </BrowserRouter>
            <div style={{ marginTop: '20px' }}>
                    <h4>{cus_id}</h4>
                    <hr />

                    <dl className="row">
                        <dt className="col-sm-3">Customer Name</dt>
                        <dd className="col-sm-9">{cus_name}</dd>

                        <dt className="col-sm-3">Customer DOB</dt>
                        <dd className="col-sm-9">{cus_dob}</dd>

                        <dt className="col-sm-3">Customer E-mail</dt>
                        <dd className="col-sm-9">{cus_email}</dd>

                        <dt className="col-sm-3">Customer Phone-No</dt>
                        <dd className="col-sm-9">{cus_phone}</dd>

                        <dt className="col-sm-3">Customer Fax-No</dt>
                        <dd className="col-sm-9">{cus_fax}</dd>

                        <dt className="col-sm-3">Customer Address</dt>
                        <dd className="col-sm-9">{cus_address}</dd>

                        <dt className="col-sm-3">Customer Designation</dt>
                        <dd className="col-sm-9">{cus_designation}</dd>

                    </dl>

                </div></>

            
        )
    }
}