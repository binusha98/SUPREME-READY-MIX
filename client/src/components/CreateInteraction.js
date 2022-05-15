import React, { Component } from 'react'
import axios from 'axios'
import CNavBar from './CNavBar';
import { BrowserRouter,Route } from 'react-router-dom';


export default class CreateInteraction extends Component{

    constructor(props){
        super(props);
        this.state={
            Interaction_id:"",
            lead_source:"",
            satisfaction:"",
            visitor_name:"",
            site_visitedTimes:"",
            iderror:"",
            leaderror:"",
            satisfactionerror:"",
            visitorerror:"",
            siteerror:""

        }
    }

    validate =() =>{
        let iderror ="";
        let leaderror ="";
        let satisfactionerror="";
        let visitorerror="";
        let siteerror="";

        if(!this.state.Interaction_id){
           iderror = "Field cannot be blank"
       }
        if(!this.state.lead_source){
           leaderror = "Field cannot be blank"
       }
        if(!this.state.satisfaction){
           satisfactionerror = "Field cannot be blank"
       }
        if(!this.state.visitor_name){
           visitorerror = "Field cannot be blank"
       }
        if(!this.state.site_visitedTimes){
           siteerror = "Field cannot be blank"
       }
       
        if(iderror || leaderror || satisfactionerror || visitorerror || siteerror){
            this.setState({iderror, leaderror, satisfactionerror, visitorerror, siteerror});
            return false;
        }

        return true;
   };

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){

        const {Interaction_id,lead_source,satisfaction,visitor_name,site_visitedTimes}= this.state;

        const data ={
            Interaction_id:Interaction_id,
            lead_source:lead_source,
            satisfaction:satisfaction,
            visitor_name:visitor_name,
            site_visitedTimes:site_visitedTimes
        }

        console.log(data)

        axios.post("http://localhost:8070/customerInt/addCus",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        Interaction_id:"",
                        lead_source:"",
                        satisfaction:"",
                        visitor_name:"",
                        site_visitedTimes:"",
                        iderror:"",
                        leaderror:"",
                        satisfactionerror:"",
                        visitorerror:"",
                        siteerror:""
                    }

                )
            }
        })
    }
    }


    render() {
        return (
            <><BrowserRouter>
                <div className="container">
                    <CNavBar />
                </div>
            </BrowserRouter>
            
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">ADD NEW INTERACTION</h1>&nbsp;
                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Interaction ID</label>
                            <input type="text"
                                className="form-control"
                                name="Interaction_id"
                                placeholder="enter ID"
                                value={this.state.Interaction_id}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.iderror}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Lead Source</label>
                            <input type="text"
                                className="form-control"
                                name="lead_source"
                                placeholder="enter source"
                                value={this.state.lead_source}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.leaderror}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Satisfaction</label>
                            <input type="text"
                                className="form-control"
                                name="satisfaction"
                                placeholder="enter satisfaction"
                                value={this.state.satisfaction}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.satisfactionerror}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Visitor Name</label>
                            <input type="text"
                                className="form-control"
                                name="visitor_name"
                                placeholder="enter name"
                                value={this.state.visitor_name}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.visitorerror}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Site Visited Times</label>
                            <input type="text"
                                className="form-control"
                                name="site_visitedTimes"
                                placeholder="enter amount"
                                value={this.state.site_visitedTimes}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.siteerror}
                            </div>
                        </div>

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;ADD INTERACTION
                        </button>

                    </form>

                </div></>
        );
    }
}