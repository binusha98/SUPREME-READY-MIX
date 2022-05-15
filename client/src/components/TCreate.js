import React, { Component} from'react';
import axios from 'axios'
import PNavBar from './PNavBar';
import { BrowserRouter } from 'react-router-dom';
 
export default class PCreate extends Component{

constructor(props){
  super(props);
  this.state={ 
        T_company_name:"",
        T_contact_no:"",
        estimated_time:"",
        estimate_cost:""
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

  const {T_company_name,T_contact_no,estimated_time,estimate_cost} = this.state;

  const data ={
      T_company_name:T_company_name,
        T_contact_no:T_contact_no,
        estimated_time: estimated_time,
        estimate_cost:estimate_cost

  }

  console.log(data)

  axios.post("http://localhost:8070/Tender/add",data).then((res) =>{
    if(res.data.success){
        this.setState(
          {
            T_company_name:"",
            T_contact_no:"",
            estimated_time:"",
            estimate_cost:""
      
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
      </BrowserRouter>
      <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">ADD NEW Tender DETAILS </h1>&nbsp;
          <form className="needs-validation" noValidate>


            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Tender Company Name</label>
              <input type="text"
                className="form-control"
                name="T_company_name"
                placeholder="Enter company name"
                value={this.state.T_company_name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Company contact Number</label>
              <input type="text"
                className="form-control"
                name="T_contact_no"
                placeholder="Enter company contact number"
                value={this.state.T_contact_no}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Estimated Time (Week)</label>
              <input type="text"
                className="form-control"
                name="estimated_time"
                placeholder="Enter Estimated Time on week"
                value={this.state.estimated_time}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Estimated Cost (.000)</label>
              <input type="text"
                className="form-control"
                name="estimate_cost"
                placeholder="Enter Estimated cost"
                value={this.state.estimate_cost}
                onChange={this.handleInputChange} />
            </div>




            <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp;ADD Tender details
            </button>

          </form>

        </div></>
    )
  }
}