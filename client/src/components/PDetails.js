
import React, { Component} from'react';
import axios from 'axios';

 
export default class PDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      Project:{}
    };
  }

  componentDidMount(){

    const id =this.props.match.params.id;

    axios.get("http://localhost:8070/project/get/${id}").then((res)=>{
      if(res.data.success){
        this.setState({
          Project:res.data.Project
        });

        console.log(this.state.Project);
      }
    });
  
  }

  

  render(){

    const {company_name,company_contact_no,accept_date,handover_date,Project_amount,en_incharge} = this.state.Project;
    return (
      <div style={{marginTop:'20px'}}>
        <h4>{company_name}</h4>
        
      </div>
    )
  }
}