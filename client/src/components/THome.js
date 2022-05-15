import React, {Component}from 'react'
import axios from 'axios'
import PNavBar from './PNavBar';
import { BrowserRouter } from 'react-router-dom';


export default class THome extends Component{
  constructor(props){
    super(props);

    this.state={
       Tender:([])
    };
  }

componentDidMount(){
  this.retriveTender();
}

retriveTender(){
  axios.get("http://localhost:8070/Tender/pview").then(res=>{
    if(res.data.success){
      this.setState({
        Tender:res.data. exitingTender
      });
      console.log(this.state.Tender);
    }
  });
}
  render(){
    return(
      <><BrowserRouter>
        <div className="container">
          <PNavBar />

        </div>
      </BrowserRouter><div className="container">
          <h3>Tender Details</h3>

          &nbsp;

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Tender Company contact no</th>
                <th scope="col">Estimated Time</th>
                <th scope="col">Estimated cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Tender.map((Tender, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/Tender/${Tender._id}`} style={{ textDecoration: 'none' }}>

                      {Tender.T_company_name}
                    </a>

                  </td>
                  <td>{Tender.T_contact_no}</td>
                  <td>{Tender.estimated_time}</td>
                  <td>{Tender.estimate_cost}</td>

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


          <button className="btn btn-success"> <a href="/Tadd" style={{ textDecoration: 'none', color: 'white' }}> Create new details</a></button>
        </div></>
    )
  }
}