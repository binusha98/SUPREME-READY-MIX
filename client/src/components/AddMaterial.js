import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';


export default class AddMaterial extends Component {

    constructor(props){
        super(props);
        this.state={
            Material_name:"",
            Unit_price:"",
            Number_of_Units:"",
            Material_nameError:"",
            Unit_priceError:"",
            Number_of_UnitsError:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            
            ...this.state,
            [name]:value
            
        })
    }

    validate =() =>{
        
        let Material_nameError="";
        let Unit_priceError="";
        let Number_of_UnitsError="";

        if(!this.state.Material_name){
            Material_nameError = "Material name cannot be blank"
       }
       if(!this.state.Unit_price){
        Unit_priceError = "Unit price cannot be blank"
       }
       if(!this.state.Number_of_Units){
        Number_of_UnitsError = "Number of Units cannot be blank"
       }

       
        if(Material_nameError || Unit_priceError || Number_of_UnitsError ){
            this.setState({Material_nameError, Unit_priceError, Number_of_UnitsError});
            return false;
        }

        return true;
   };


    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if (isValid){


        const {Material_name,Unit_price,Number_of_Units} = this.state;

        const data ={
            Material_name:Material_name,
            Unit_price:Unit_price,
            Number_of_Units:Number_of_Units
        }

        console.log(data)

        axios.post(`http://localhost:8070/Material/madd`,data).then((res) =>{
            if(res.data.success){
                alert("Successfully added material")
                this.setState(
                    {
                        Material_name:"",
                        Unit_price:"",
                        Number_of_Units:"",
                        Material_nameError:"",
                        Unit_priceError:"",
                        Number_of_UnitsError:""
                    }
                )
            }
        })
    }
}
    render(){
      return(

        <><BrowserRouter>

              <div className="container">
                  <MNavBar />

              </div>
          </BrowserRouter>
          <div className="col-md-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 font-weight-normal">Add Materials</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{ marginBottom: '20px' }}>
                          <labal style={{ marginBottom: '5px' }}>Material Name  </labal>
                          <input type="text"
                          className="form-control"
                              pattern="[a-z]||[A-Z]{1,15}"
                              title="Material Name should only contain letters"
                              name="Material_name"
                              placeholder="Enter Material Name"
                              value={this.state.Material_name}
                              onChange={this.handleInputChange} />
                              <div style={{color:"red"}}>
                               {this.state.Material_nameError}
                           </div>
                      </div>

                      <div className="form-group" style={{ marginBottom: '20px' }}>
                          <labal style={{ marginBottom: '5px' }}>Unit price </labal>
                          <input type="number"
                          className="form-control"
                              title="Unit price should only contain numbers (more than zero)"
                              min="0.00"
                              step="0.01"
                              name="Unit_price"
                              placeholder="Enter Unit price"
                              value={this.state.Unit_price}
                              onChange={this.handleInputChange} />
                              <div style={{color:"red"}}>
                               {this.state.Unit_priceError}
                           </div>
                      </div>

                      <div className="form-group" style={{ marginBottom: '20px' }}>
                          <labal style={{ marginBottom: '5px' }}>Number of Units  </labal>
                          <input type="number"
                          className="form-control"
                              title="Number of Units should only contain numbers (more than one)"
                              min="1.00"
                              step="1.00"
                              name="Number_of_Units"
                              placeholder="Enter Number of Units"
                              value={this.state.Number_of_Units}
                              onChange={this.handleInputChange} />
                              <div style={{color:"red"}}>
                               {this.state.Number_of_UnitsError}
                           </div>
                      </div>

                      <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                          <i className="far fa-check-squre"></i>
                          &nbsp;Add Material
                      </button>
                  </form>
              </div></>
      )
    }
}