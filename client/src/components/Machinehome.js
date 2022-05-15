import React, { Component } from 'react'
import axios from 'axios'
import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';

//import { post } from '../../../BACKEND/routes/MachineRepairs';
export default class Machinehome extends Component {
    constructor(props){
        super(props);

        this.state={
            MachineRepair:([])

        };
    }

    componentDidMount(){
         this.retreveMachineRepair();
    }


    retreveMachineRepair(){
        axios.get("http://localhost:8070/MachineRepair/MachineRepairs").then(res =>{
            if(res.data.success){
                this.setState({
                    MachineRepair:res.data.existingMachineRepairs
                });

                console.log(this.state.MachineRepair)
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

    axios.delete(`http://localhost:8070/MachineRepair/post/delect/${id}`).then (() =>{
        alert("Delected Successfully");

        this.retreveMachineRepair();



    })
}

filterdata(MachineRepair,searchKey){
    const result = MachineRepair.filter((post) =>
    post.Machine_id.toLowerCase().includes(searchKey)||
    post.Expense_id.toLowerCase().includes(searchKey)||
    post.repairdate.toLowerCase().includes(searchKey)||
    post.addedspare_parts.toLowerCase().includes(searchKey)||
    post.nextservice_date.toLowerCase().includes(searchKey)
    ) 

    this.setState({MachineRepair:result})

}


handleSearchArea = (e) =>{
  const searchKey=  e.currentTarget.value;


  axios.get("http://localhost:8070/MachineRepair/MachineRepairs").then(res =>{
            if(res.data.success){
                this.filterdata(res.data.existingMachineRepairs,searchKey)

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
                <p><center><h4> All Machine Details</h4></center></p>
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
                  <th scope="col">Machine  ID</th>
                  <th scope="col">Expense ID</th>
                  <th scope="col">Repair Date</th>
                  <th scope="col">Added Spare Part</th>
                  <th scope="col">Next Servise Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.MachineRepair.map((MachineRepair, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>

                      <a href={`/post/${MachineRepair._id}`} style={{ textDecoration: 'none' }}>
                        {MachineRepair.Machine_id}
                      </a>
                    </td>

                    <td>{MachineRepair.Expense_id}</td>
                    <td>{MachineRepair.repairdate}</td>
                    <td>{MachineRepair.addedspare_parts}</td>
                    <td>{MachineRepair.nextservice_date}</td>
                    <td>{MachineRepair.m_description}</td>
                    <td>
                      <a className="btn btn-warning" href={`/edit/${MachineRepair._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => this.onDelect(MachineRepair._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delect
                      </a>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/Madd" style={{ textDecoration: 'none', color: 'white' }}>&nbsp;Add New Machine</a>
            </button> &nbsp;
            








          </div></>
      )
    }
    }
      


    
