import React, { Component } from 'react';
import axios from 'axios';
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';


export default class IntHome extends Component{
  constructor(props){
    super(props);

    this.state={
      customersInt:([])
    };
  }

  componentDidMount(){
    this.retrieveCustomersInt();
  }

  retrieveCustomersInt(){
    axios.get("http://localhost:8070/customerInt/viewCus").then(res =>{
      if(res.data.success){
        this.setState({
          customersInt:res.data.existingcustomersInt
        });

        console.log(this.state.customersInt)
      }
    });
  }

  oneDelete = (id) =>{

    axios.delete(`http://localhost:8070/customerInt/deleteCus/${id}`). then((res) =>{
      alert("Record Deleted Successfully");
      this.retrieveCustomersInt();
    })
  }

  filterData(customersInt,searchKey){

    const result = customersInt.filter((customersInt) =>
    customersInt.Interaction_id.toLowerCase().includes(searchKey)||
    customersInt.visitor_name.toLowerCase().includes(searchKey)
    )

    this.setState({customersInt:result})
  }

  handleSearchArea =(e) =>{

    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:8070/customerInt/viewCus").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingcustomersInt,searchKey)
      }
    });

  }


  render(){
    return(
       <><BrowserRouter>
        <div className="container">
          <CNavBar />
        </div>
      </BrowserRouter>
      
      <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4> ALL INTERACTIONS </h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}>

              </input>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Interction ID</th>
                <th scope="col">Visitor Name</th>
                <th scope="col">Site Visited Times</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customersInt.map((customersInt, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/viewInt/${customersInt._id}`} style={{ textDecoration: 'none' }}>
                      {customersInt.Interaction_id}
                    </a>
                  </td>
                  <td>{customersInt.visitor_name}</td>
                  <td>{customersInt.site_visitedTimes}</td>
                  <td>
                    <a className="btn btn-warning" href={`/editInt/${customersInt._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;EDIT
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.oneDelete(customersInt._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;DELETE
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success">
            <a href="/addInt" style={{ textDecoration: 'none', color: 'white' }}>Add New Interaction</a>
          </button>


        </div></>
    )
  }
}