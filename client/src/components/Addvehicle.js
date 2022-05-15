import React, { Component } from 'react'
import axios from 'axios'

import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';

export default class Addvehicle extends Component{

    constructor(props){
        super(props);
        this.state={

        Vehicle_no:"",
        Income_ID:"",
        Drivername:"",
        avg_fuel_economy:"",
        Rate:"",
        total_distance:"",
        idError:"",
           nameError:"",
           dobError:"",
           emailError:"",
           phoneError:"",
           faxError:"",
           addresssError:"",
           designationError:""
        }
    }

    validate =() =>{
        let idError="";
        let nameError ="";
        let dobError="";
        let emailError ="";
        let phoneError="";
        let faxError="";
        let addresssError="";
        let designationError="";

        if(!this.state.Vehicle_no){
           idError = "Field cannot be blank"
       }
       if(!this.state.Income_ID){
           nameError = "Field cannot be blank"
       }
       if(!this.state.Drivername){
           dobError = "Field cannot be blank"
       }
       if(!this.state.avg_fuel_economy){
           emailError = "Field cannot be blank"
       }
       if(!this.state.Rate){
           phoneError = "Field cannot be blank"
       }
       if(!this.state.total_distance){
           faxError = "Field cannot be blank"
       }
       if(!this.state.total_distance){
           addresssError = "Field cannot be blank"
       }
       if(!this.state.cus_designation){
           designationError = "Field cannot be blank"
       }
       if(!this.state.cus_email.includes("@")){
           emailError = "Enter a valid email"
       }

       
        if(idError || nameError || dobError || emailError || phoneError || faxError || addresssError || designationError){
            this.setState({idError, nameError, dobError,emailError, phoneError, faxError, addresssError,designationError});
            return false;
        }

        return true;
   };


    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmite = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){

        const {Vehicle_no,Income_ID,Drivername,avg_fuel_economy,Rate,total_distance} = this.state;

        const data ={
                Vehicle_no:Vehicle_no,
                Income_ID:Income_ID,
                Drivername:Drivername,
                avg_fuel_economy:avg_fuel_economy,
                Rate:Rate,
                total_distance:total_distance 

                
        }

        console.log(data)

        axios.post("http://localhost:8070/Vehicle/add",data).then((res) =>{
             if(res.data.success){
                 this.setState(
                   {
                   
                    Vehicle_no: "",
                    Income_ID: "",
                    Drivername: "",
                    avg_fuel_economy: "",
                    Rate: "",
                    total_distance: "",
                    idError:"",
           nameError:"",
           dobError:"",
           emailError:"",
           phoneError:"",
           faxError:"",
           addresssError:"",
           designationError:""


                   }  
                   
                 )
             }
        })

    }
    }

    render() {
        return (

            <><BrowserRouter>
                <div className="container">
                    <Navbarv />

                </div>
            </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">ADD NEW VEHICLE</h1>&nbsp;

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



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmite}>
                            <i className="far fa-check-square"></i>
                            &nbsp;ADD Vehicle
                        </button>

                    </form>


                </div></>
        );
    }
}