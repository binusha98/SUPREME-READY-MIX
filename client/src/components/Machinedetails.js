import React, { Component } from 'react'
import axios from 'axios'

import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';

export default class Machinedetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/MachineRepair/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        const {Machine_id,Expense_id,repairdate,addedspare_parts,nextservice_date,m_description } = this.state.post;

        return (

            
                <><BrowserRouter>
                <div className="container">
                    <Navbarv />

                </div>
            </BrowserRouter><div style={{ marginTop: '20px' }}>
                    <hr />
                    <h4>{Machine_id}</h4>
                    <hr /><hr />

                    <dl className="row">
                        <dt className="col-sm-3">Expense ID</dt>
                        <dd className="col-sm-9">{Expense_id}</dd>

                        <dt className="col-sm-3">Repair Date</dt>
                        <dd className="col-sm-9">{repairdate}</dd>

                        <dt className="col-sm-3">Added Spare Part</dt>
                        <dd className="col-sm-9">{addedspare_parts}</dd>

                        <dt className="col-sm-3">Next Service Date</dt>
                        <dd className="col-sm-9">{nextservice_date}</dd>

                        <dt className="col-sm-3">M Description</dt>
                        <dd className="col-sm-9">{m_description}</dd>



                    </dl>
                </div></>
        )
    }
}