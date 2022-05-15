import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';

export default class MaterialDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            Material:([])
        };
    }

    componentDidMount(){
        const _id = this.props.match.params.materialid;
        
        axios.get(`http://localhost:8070/Material/${_id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Material:res.data.Material
                });
                console.log(this.state.Material);
            }
        });
    }
    render(){

        const {Material_name,Unit_price,Number_of_Units} = this.state.Material;

      return(

        <><BrowserRouter>

              <div className="container">
                  <MNavBar />

              </div>
          </BrowserRouter>
          
          <div style={{ marginTop: '20px' }}>
                  <h4>Material Details</h4>
                  <hr />

                  <dl className="row">
                      <dt className="col-sm-9">Material Name</dt>
                      <dd className="col-sm-19">{Material_name}</dd>

                      <dt className="col-sm-9">Unit price</dt>
                      <dd className="col-sm-19">{Unit_price}</dd>

                      <dt className="col-sm-9">Number of Units</dt>
                      <dd className="col-sm-19">{Number_of_Units}</dd>
                  </dl>
              </div></>
      )
    }
}