import React, { Component } from 'react'
import axios from 'axios'

import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';
//import { post } from '../../../BACKEND/routes/MachineRepairs';
export default class Vehiclehome extends Component {
    constructor(props){
        super(props);

        this.state={
            Vehicle:([])

        };
    }

    componentDidMount(){
         this.retreveVehicle();
    }


    retreveVehicle(){
        axios.get("http://localhost:8070/Vehicle/Vehicles").then(res =>{
            if(res.data.success){
                this.setState({
                    Vehicle:res.data.existingVehicles
                });

                console.log(this.state.Vehicle)
            }


    });
    }

  /*  render() {
      return (
        <div>

          
        {this.state.MachineRepair.map(MachineRepair =>(
            
                <div>
                    
                    <p>{MachineRepair.Machine_id}</p>
                    <p>{MachineRepair.Expense_id}</p>
                    <p>{MachineRepair.repairdate}</p>
                    <p>{MachineRepair.addedspare_parts}</p>
                    <p>{MachineRepair.nextservice_date}</p>
                    <p>{MachineRepair.m_description}</p>
                 </div>
             
         ))}
     </div>
      )
  }
}
*/

onDelect = (id) =>{

    axios.delete(`http://localhost:8070/Vehicle/post/delect/${id}`).then (() =>{
        alert("Delected Successfully");

        this.retreveVehicle();



    })
}

filterdata(Vehicle,searcheKey){
    const result = Vehicle.filter((post) =>
    post.Vehicle_no.toLowerCase().includes(searcheKey)||
    post.Income_ID.toLowerCase().includes(searcheKey)||
    post.Drivername.toLowerCase().includes(searcheKey)||
    post.avg_fuel_economy.toLowerCase().includes(searcheKey)||
    post.Rate.toLowerCase().includes(searcheKey)||
    post.total_distance.toLowerCase().includes(searcheKey)
    ) 

    this.setState({Vehicle:result})

}


handleSearchArea = (e) =>{
  const searcheKey=  e.currentTarget.value;


  axios.get("http://localhost:8070/Vehicle/Vehicles").then(res =>{
            if(res.data.success){
                this.filterdata(res.data.existingVehicles,searcheKey)

            }
               

    });

}

    render() {
      return (

        <><BrowserRouter>
          <div className="container">
            <Navbarv />

          </div>
        </BrowserRouter><div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <p><center><h4> All Vehicle Details</h4></center></p>
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
                  <th scope="col">Vehicle NO</th>
                  <th scope="col">Income ID</th>
                  <th scope="col">Drivername</th>
                  <th scope="col">Avg fuel Economy</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Totle Distanse</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.Vehicle.map((Vehicle, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>

                      <a href={`/vpost/${Vehicle._id}`} style={{ textDecoration: 'none' }}>
                        {Vehicle.Vehicle_no}
                      </a>
                    </td>

                    <td>{Vehicle.Income_ID}</td>
                    <td>{Vehicle.Drivername}</td>
                    <td>{Vehicle.avg_fuel_economy}</td>
                    <td>{Vehicle.Rate}</td>
                    <td>{Vehicle.total_distance}</td>
                    <td>
                      <a className="btn btn-warning" href={`/vedit/${Vehicle._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => this.onDelect(Vehicle._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delect
                      </a>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/vadd" style={{ textDecoration: 'none', color: 'white' }}>Add New Vehicle</a>
            </button> &nbsp;

            




          </div></>
      )
    }
    }
      


    
