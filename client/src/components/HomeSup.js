import React, { Component} from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import NaviBar from './NaviBar';

export default class HomeSup extends Component {
constructor(props){
    super(props);

    this.state={
      Supplies:[]
    };

}
componentDidMount(){
  this.retrievedPosts();
}

retrievedPosts(){
    axios.get("http://localhost:8070/supply/supplies").then(res =>{
      if(res.data.success){
        this.setState({
          Supplies:res.data.existingSupplies
        });

        console.log(this.state.Supplies)
      }

    })
} 
  onDelete = (id) =>{
    axios.delete(`http://localhost:8070/supply/delete/${id}`).then((res)=>{
      alert("Details Deleted Successfully.");
      this.retrievedPosts();

    })
  }  

  filterData(supplies,searchKey){

    const result = supplies.filter((post) =>
    post.supplierName.toLowerCase().includes(searchKey)||
    post.supType.toLowerCase().includes(searchKey)
    )
    this.setState({Supplies:result})
  }

  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:8070/supply/supplies").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingSupplies,searchKey)
       
      }
    });


  }

   render() {
      return (
        <><BrowserRouter>
          <div className="container">
            <NaviBar />


          </div>

        </BrowserRouter><div className="container"></div><div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>Supplies and Supplier Details</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}>


                </input>
              </div>
            </div>
            <table className="table table-hover" style={{ marginTop: '40px' }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Type of Supply</th>
                  <th scope="col">Amount of Supplies</th>
                  <th scope="col">Cost of Supplies</th>
                  <th scope="col">Total amount Paid</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Supplies.map((supplies, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a href={`/supplies/${supplies._id}`} style={{ textDecoration: 'none' }}>
                        {supplies.supplierName}
                      </a>
                    </td>
                    <td>{supplies.supType}</td>
                    <td>{supplies.supAmount}</td>
                    <td>{supplies.supTotalCost}</td>
                    <td>{supplies.amountPaid}</td>
                    <td>
                      <a className="btn btn-warning" href={`/supedit/${supplies._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-warning" href="#" onClick={() => this.onDelete(supplies._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success"><a href="/supadd" style={{ textDecoration: 'none', color: 'white' }}>Add new Supply Details</a></button>
          </div></>
        )
      }
    }