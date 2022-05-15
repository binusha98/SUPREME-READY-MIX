import React, {Component} from 'react'
import axios from 'axios'
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';

export default class CHome extends Component {
  constructor(props){
    super(props);

    this.state={
      customers:([])
    };

  }

  componentDidMount(){
    this.retreveCustomers();
  }
 
  retreveCustomers(){
    axios.get("http://localhost:8070/customer/view").then(res =>{
      if(res.data.success){
        this.setState({ 
          customers:res.data.existingcustomers
        });

        console.log(this.state.customers);
      }
    });
  }
  
  oneDelete = (id) =>{

    axios.delete(`http://localhost:8070/customer/delete/${id}`). then((res) =>{
      alert("Record Deleted Successfully");
      this.retreveCustomers();
    })
  }

  filterData(customers,searchKey){

    const result = customers.filter((customers) =>
       customers.cus_id.toLowerCase().includes(searchKey)||
       customers.cus_name.toLowerCase().includes(searchKey)
       
    )

    this.setState({customers:result})


  }

  handleSearchArea =(e) =>{
    
   const searchKey = e.currentTarget.value;

   axios.get("http://localhost:8070/customer/view").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingcustomers,searchKey)
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
              <h4> ALL CUSTOMERS </h4>
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
          <table className="table table-hover" style={{ marginTop: '40px' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Contact Name</th>
                <th scope="col">Contact NO</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customers, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/view/${customers._id}`} style={{ textDecoration: 'none' }}>
                      {customers.cus_id}
                    </a>
                  </td>
                  <td>{customers.cus_name}</td>
                  <td>{customers.cus_phone}</td>
                  <td>
                    <a className="btn btn-warning" href={`/cedit/${customers._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;UPDATE
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.oneDelete(customers._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;DELETE
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success">
            <a href="/cadd" style={{ textDecoration: 'none', color: 'white' }}>Add New Customer</a>
          </button>

        </div></>
    )
  }
}