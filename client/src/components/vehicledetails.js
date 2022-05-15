import React, { Component } from 'react'
import axios from 'axios'

import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';

export default class vehicledetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/Vehicle/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        <BrowserRouter>
                <div className="container">
                    <Navbarv />

                </div>
            </BrowserRouter>

     
        const {Vehicle_no,Income_ID,Drivername,avg_fuel_economy,Rate,total_distance } = this.state.post;

        return (
            
            <div style={{marginTop:'20px'}}>
                <hr/>
            <h4>{Vehicle_no}</h4>
            <hr/><hr/>

            <dl className="row">
                <dt className="col-sm-3">Income ID</dt>
                <dd className="col-sm-9">{Income_ID}</dd>

                <dt className="col-sm-3">Repair Date</dt>
                <dd className="col-sm-9">{Drivername}</dd>

                <dt className="col-sm-3">Average fuel economy</dt>
                <dd className="col-sm-9">{avg_fuel_economy}</dd>

                <dt className="col-sm-3">Rate</dt>
                <dd className="col-sm-9">{Rate}</dd>

                <dt className="col-sm-3">Total Destance</dt>
                <dd className="col-sm-9">{total_distance}</dd>

                

            </dl>    
            </div>
        )
    }
}