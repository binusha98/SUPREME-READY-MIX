import React, { Component } from 'react'
import axios from 'axios';
import Navbarv from './Navbarv';
import { BrowserRouter } from 'react-router-dom';



export default class EditDetails extends Component{



    constructor(props){
        super(props);
        this.state={
           

           Machine_id:"",
           Expense_id:"",
           repairdate:"",
           addedspare_parts:"",
           nextservice_date:"",
           m_description:""
        }
    }

    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

       
        e.preventDefault();
        const id = this.props.match.params.id;

        const {Machine_id,Expense_id,repairdate,addedspare_parts,nextservice_date,m_description} = this.state;

        const data ={
            Machine_id:Machine_id,
           Expense_id:Expense_id,
           repairdate:repairdate,
           addedspare_parts:addedspare_parts,
           nextservice_date:nextservice_date,
           m_description:m_description
        }

        console.log(data)

        axios.put(`http://localhost:8070/MachineRepair/post/update/${id}`,data).then((res) =>{
             if(res.data.success){
                 alert("post updated successfully")


                 this.setState(
                   {
                    Machine_id:"",
                    Expense_id:"",
                    repairdate:"",
                    addedspare_parts:"",
                    nextservice_date:"",
                    m_description:""
                   }  
                 )
             }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/MachineRepair/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({

                    Machine_id:res.data.post.Machine_id,
                    Expense_id:res.data.post.Expense_id,
                    repairdate:res.data.post.repairdate,
                    addedspare_parts:res.data.post.addedspare_parts,
                    nextservice_date:res.data.post.nextservice_date,
                    m_description:res.data.post.m_description
                    
                });

                console.log(this.state.post);
            }
        });
    }


   
    render() {
        return (


            <><BrowserRouter>
                <div className="container">
                    <Navbarv />

                </div>
            </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Update MACHINE</h1>&nbsp;
                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Machine ID</label>
                            <input type="text"
                                className="form-control"
                                name="Machine_id"
                                placeholder="enter ID"
                                value={this.state.Machine_id}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Expense ID</label>
                            <input type="text"
                                className="form-control"
                                name="Expense_id"
                                placeholder="enter name"
                                value={this.state.Expense_id}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Repair Date</label>
                            <input type="text"
                                className="form-control"
                                name="repairdate"
                                placeholder="enter date of birth"
                                value={this.state.repairdate}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Added Spare part</label>
                            <input type="text"
                                className="form-control"
                                name="addedspare_parts"
                                placeholder="enter email"
                                value={this.state.addedspare_parts}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Next servise Date</label>
                            <input type="text"
                                className="form-control"
                                name="nextservice_date"
                                placeholder="enter mobile no"
                                value={this.state.nextservice_date}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Customer FAX</label>
                            <input type="text"
                                className="form-control"
                                name="m_description"
                                placeholder="enter fax no"
                                value={this.state.m_description}
                                onChange={this.handleInputChange} />
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;SAVE CHANGES
                        </button>

                    </form>

                </div></>
        );
    }


}