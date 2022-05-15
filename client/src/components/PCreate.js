import React, { Component} from'react';
import axios from 'axios'
import PNavBar from './PNavBar';
import { BrowserRouter } from 'react-router-dom';
 
export default class PCreate extends Component{

constructor(props){
  super(props);
  this.state={ 
    company_name:"",
    company_contact_no:"",
    accept_date:"",
    handover_date:"",
    Project_amount:"",
    en_incharge:""

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

  const {company_name,company_contact_no,accept_date,handover_date,Project_amount,en_incharge} = this.state;

  const data ={
    company_name:company_name,
    company_contact_no:company_contact_no,
    accept_date: accept_date,
    handover_date:handover_date,
    Project_amount:Project_amount,
    en_incharge:en_incharge

  }

  console.log(data)

  axios.post("http://localhost:8070/Project/add",data).then((res) =>{
    if(res.data.success){
        this.setState(
          {
            company_name:"",
            company_contact_no:"",
            accept_date:"",
            handover_date:"",
            Project_amount:"",
            en_incharge:""
          }  
          
        )
    }
})
}
  render(){
    return (

      <><BrowserRouter>
        <div className="container">
          <PNavBar />

        </div>
      </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">ADD NEW PROJECT DETAILS </h1>&nbsp;
          <form className="needs-validation" noValidate>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Company Name</label>
              <input type="text"
                className="form-control"
                name="company_name"
                placeholder="Enter company name"
                value={this.state.company_name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Company contact Number</label>
              <input type="text"
                className="form-control"
                name="company_contact_no"
                placeholder="Enter company contact number"
                value={this.state.company_contact_no}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Accept Date</label>
              <input type="text"
                className="form-control"
                name="accept_date"
                placeholder="Enter project accepted date"
                value={this.state.accept_date}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Handover Date</label>
              <input type="text"
                className="form-control"
                name="handover_date"
                placeholder="Enter project Handover date"
                value={this.state.handover_date}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Project amount .(000)</label>
              <input type="text"
                className="form-control"
                name="Project_amount"
                placeholder="enter project amount"
                value={this.state.Project_amount}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Engeneer incharge</label>
              <input type="text"
                className="form-control"
                name="en_incharge"
                placeholder="enter project engineer incharge"
                value={this.state.en_incharge}
                onChange={this.handleInputChange} />
            </div>



            <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp;ADD project details
            </button>

          </form>

        </div></>
    )
  }
}