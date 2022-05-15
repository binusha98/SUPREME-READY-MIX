import React, { Component } from 'react'
import axios from 'axios';
import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';




export default class Editvehicle extends Component{



    constructor(props){
        super(props);
        this.state={

        Vehicle_no: "",
        Income_ID: "",
        Drivername: "",
        avg_fuel_economy: "",
        Rate: "",
        total_distance: "" 
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

        
        const {Vehicle_no,Income_ID,Drivername,avg_fuel_economy,Rate,total_distance } = this.state;

        const data ={
            Vehicle_no: Vehicle_no,
            Income_ID: Income_ID,
            Drivername: Drivername,
            avg_fuel_economy: avg_fuel_economy,
            Rate: Rate,
            total_distance: total_distance 

            
    }

        console.log(data)

        axios.put(`http://localhost:8070/Vehicle/post/update/${id}`,data).then((res) =>{
             if(res.data.success){
                 alert("post updated successfully")


                 this.setState(
                   {
                    Vehicle_no: "",
                    Income_ID: "",
                    Drivername: "",
                    avg_fuel_economy: "",
                    Rate: "",
                    total_distance: "" 
                   }  
                 )
             }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/Vehicle/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({

                   

                    Vehicle_no:res.data.post.Vehicle_no,
                    Income_ID:res.data.post.Income_ID,
                    Drivername:res.data.post.Drivername,
                    avg_fuel_economy:res.data.post.avg_fuel_economy,
                    Rate:res.data.post.Rate,
                    total_distance:res.data.post.total_distance,


                    
                });

                console.log(this.state.post);
            }
        });
    }


   
    render() {
        return (
            <><BrowserRouter>
                <div className="container">
                    <Navbarv />

                </div>
            </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">UPDATE VEHICLE</h1>&nbsp;
                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle no</label>
                            <input type="text"
                                className="form-control"
                                name="Vehicle_no"
                                placeholder="enter vehicle number"
                                value={this.state.Vehicle_no}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Income ID</label>
                            <input type="text"
                                className="form-control"
                                name="Income_ID"
                                placeholder="enter income ID"
                                value={this.state.Income_ID}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Driver Name</label>
                            <input type="text"
                                className="form-control"
                                name="Drivername"
                                placeholder="enter Driver name"
                                value={this.state.Drivername}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Avarage Fuel Economy</label>
                            <input type="text"
                                className="form-control"
                                name="avg_fuel_economy"
                                placeholder="enter average fuel economy"
                                value={this.state.avg_fuel_economy}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Rate</label>
                            <input type="text"
                                className="form-control"
                                name="Rate"
                                placeholder="enter Rate of the vehicle"
                                value={this.state.Rate}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Total Destance</label>
                            <input type="text"
                                className="form-control"
                                name="total_distance"
                                placeholder="enter total destemce"
                                value={this.state.total_distance}
                                onChange={this.handleInputChange} />
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Save CHENGERS
                        </button>

                    </form>

                </div></>
        );
    }

}