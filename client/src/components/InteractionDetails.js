import React, { Component } from 'react'
import axios from 'axios'
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';

export default class InteractionDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            customerInt:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/customerInt/viewCus/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    customerInt:res.data.customerInt
                });

                console.log(this.state.customerInt);
            }
        });
    }

    onDelete = (id) =>{

        axios.delete(`http://localhost:8070/customerInt/deleteCus/${id}`).then((res) =>{
            alert("Record Deleted Successfully");
            this.retrieveCustomersInt();
        })
    }

    render() {

        const {Interaction_id,lead_source,satisfaction,visitor_name,site_visitedTimes} = this.state.customerInt;

        return (
            <><BrowserRouter>
                <div className="container">
                    <CNavBar />
                </div>
            </BrowserRouter>
            <div style={{ marginTop: '20px' }}>
                    <h4>{Interaction_id}</h4>
                    <hr />

                    <dl className="row">
                        <dt className="col-sm-3">LEAD SOURCE</dt>
                        <dd className="col-sm-9">{lead_source}</dd>

                        <dt className="col-sm-3">SATISFACTION</dt>
                        <dd className="col-sm-9">{satisfaction}</dd>

                        <dt className="col-sm-3">VISITOR NAME</dt>
                        <dd className="col-sm-9">{visitor_name}</dd>

                        <dt className="col-sm-3">SITE VISITED TIMES</dt>
                        <dd className="col-sm-9">{site_visitedTimes}</dd>

                    </dl>

                </div></>

            
        )
    }
}