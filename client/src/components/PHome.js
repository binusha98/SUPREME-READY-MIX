import React, {Component}from 'react'
import axios from 'axios'
import PNavBar from './PNavBar';
import { BrowserRouter } from 'react-router-dom';


export default class PHome extends Component{
  constructor(props){
    super(props);

    this.state={
       Project:([])
    };
  }

componentDidMount(){
  this.retriveProject();
}

retriveProject(){
  axios.get("http://localhost:8070/project/pview").then(res=>{
    if(res.data.success){
      this.setState({
        Project:res.data. exitingProject
      });
      console.log(this.state.Project);
    }
  });
}
  render(){
    return(
      <><BrowserRouter>
        <div className="container">
          <PNavBar />

        </div>
     </BrowserRouter>
      
      <div className="container">
          <h3>Projects Details</h3>

          &nbsp;


          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Company contact no</th>
                <th scope="col">accept Date</th>
                <th scope="col">Handover Date</th>
                <th scope="col">Project Amount</th>
                <th scope="col">Engineer Incharge</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Project.map((Project, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/Project/${Project._id}`} style={{ textDecoration: 'none' }}>

                      {Project.company_name}
                    </a>

                  </td>
                  <td>{Project.company_contact_no}</td>
                  <td>{Project.accept_date}</td>
                  <td>{Project.handover_date}</td>
                  <td>{Project.Project_amount}</td>
                  <td>{Project.en_incharge}</td>
                  <td>
                    <a className="btn btn-warning" href="#">
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>

                    &nbsp;

                    <a className="btn btn-danger" href="#">
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}


            </tbody>

          </table>


          <button className="btn btn-success"> <a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Create new details</a></button>

        </div></>
    )
  }
}