import React, { Component} from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import NaviBar from './NaviBar';

export default class HomeQS extends Component {
constructor(props){
    super(props);

    this.state={
      Qualities:[]
    };

}
componentDidMount(){
  this.retrievedPosts();
}

retrievedPosts(){
    axios.get("http://localhost:8070/quality/qualities").then(res =>{
      if(res.data.success){
        this.setState({
            Qualities:res.data.existingQualities
        });

        console.log(this.state.Qualities)
      }

    })
} 
  onDelete = (id) =>{
    axios.delete(`http://localhost:8070/quality/delete/${id}`).then((res)=>{
      alert("Details Deleted Successfully.");
      this.retrievedPosts();

    })
  }  

  filterData(qualities,searchKey){

    const result = qualities.filter((post) =>
    post.prodType.toLowerCase().includes(searchKey)||
    post.prodBrandName.toLowerCase().includes(searchKey)
    )
    this.setState({Qualities:result})
  }

  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:8070/quality/qualities").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingQualities,searchKey)
       
      }
    });


  }

   render() {
      return (
        <><BrowserRouter>
          <div className="container">
            <NaviBar />


          </div>

        </BrowserRouter><div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>Quality Details of the Products</h4>
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
                  <th scope="col">Product type</th>
                  <th scope="col">Product Brandname</th>
                  <th scope="col">Product Standards</th>
                  <th scope="col">Date of expiry</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Qualities.map((qualities, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a href={`/qualities/${qualities._id}`} style={{ textDecoration: 'none' }}>
                        {qualities.prodType}
                      </a>
                    </td>
                    <td>{qualities.prodBrandName}</td>
                    <td>{qualities.prodStandards}</td>
                    <td>{qualities.expDate}</td>
                    <td>
                      <a className="btn btn-warning" href={`/editQs/${qualities._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-warning" href="#" onClick={() => this.onDelete(qualities._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success"><a href="/addQs" style={{ textDecoration: 'none', color: 'white' }}>Add new Product Quality Details</a></button>
          </div></>
        )
      }
    }