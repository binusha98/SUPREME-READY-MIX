import React,{Component} from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';


export default class MHome extends Component{
  constructor(props){
    super(props);

    this.state={
      Material:([])
    };
  }
  
  componentDidMount(){
    this.retriveMaterial();
  }

  retriveMaterial(){
    axios.get(`http://localhost:8070/Material/mview`).then(res =>{
      if(res.data.success){
        this.setState({
          Material:res.data.existingmaterials
        });

        console.log(this.state.Material)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:8070/Material/delete/${id}`).then((res) =>{
      alert("Material Deleted");
      this.retriveMaterial();
    })
  }

  filterData(Material,searchKey){
    const result = Material.filter((Material) =>
    Material.Material_name.toLowerCase().includes(searchKey)
    //||Material.Unit_price.includes(searchKey)
    //||Material.Number_of_Units.includes(searchKey)
  )

    this.setState({Material:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8070/Material/mview").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingmaterials,searchKey)
      }
    });
  }

  render(){
    return(

      <><BrowserRouter>

        <div className="container">
          <MNavBar />

        </div>
      </BrowserRouter>
      <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Materials</h4>
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
                <th scope="col">Material Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Number of Units</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Material.map((Material, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/Matget/${Material._id}`} style={{ textDecoration: 'none' }}>
                      {Material.Material_name}
                    </a>
                  </td>
                  <td>{Material.Unit_price}</td>
                  <td>{Material.Number_of_Units}</td>
                  <td>
                    <a className="btn btn-warning" href={`/Matedit/${Material._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Update
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(Material._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success"><a href="/Materialadd" style={{ textDecoration: 'none', color: 'white' }}>Add New Materials</a></button>

        </div></>
    )
  }
}