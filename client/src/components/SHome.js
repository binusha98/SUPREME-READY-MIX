import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';

export default class SHome extends Component {
  constructor(props){
    super(props);

    this.state={
      Stock:([])
    };
  }
  
  componentDidMount(){
    this.retriveStock();
  }

  retriveStock(){
    axios.get(`http://localhost:8070/Stock/sview`).then(res =>{
      if(res.data.success){
        this.setState({
            Stock:res.data.existingstocks
        });

        console.log(this.state.Stock)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:8070/Stock/delete/${id}`).then((res) =>{
      alert("Stock Deleted");
      this.retriveStock();
    })
  }

  filterData(Stock,searchKey){
    const result = Stock.filter((Stock) =>
    Stock.Stock_type.toLowerCase().includes(searchKey)
    //||Material.Unit_price.includes(searchKey)
    //||Material.Number_of_Units.includes(searchKey)
  )

   this.setState({Stock:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8070/Stock/sview").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingstocks,searchKey)
      }
    });
  }

  render(){
    return(
      <><BrowserRouter>

        <div className="container">
          <MNavBar />

        </div>


      </BrowserRouter><div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Stocks</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="from-control"
                type="search"
                name="searchquery"
                placeholder="Search"
                onChange={this.handleSearchArea}>

              </input>
            </div>
          </div>
          <table className="table table-hover" style={{ marginTop: '40px' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Stock Type</th>
                <th scope="col">Stock Size</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Stock.map((Stock, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/sget/${Stock._id}`} style={{ textDecoration: 'none' }}>
                      {Stock.Stock_type}
                    </a>
                  </td>
                  <td>{Stock.size}</td>
                  <td>{Stock.date}</td>
                  <td>
                    <a className="btn btn-warning" href={`/sedit/${Stock._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Update
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(Stock._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success"><a href="/Stockadd" style={{ textDecoration: 'none', color: 'white' }}>Add New Stocks</a></button>

        </div></>
    )
  }
}