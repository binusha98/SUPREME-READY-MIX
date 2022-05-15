import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import MNavBar from './MNavBar';

export default class StockDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            Stock:([])
        };
    }

    componentDidMount(){
        const _id = this.props.match.params.stockid;
        
        axios.get(`http://localhost:8070/Stock/${_id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Stock:res.data.Stock
                });
                console.log(this.state.Stock);
            }
        });
    }
    render(){

        const {Stock_type,size,date} = this.state.Stock;

      return(

        <><BrowserRouter>

              <div className="container">
                  <MNavBar />

              </div>
          </BrowserRouter>
          
          <div style={{ marginTop: '20px' }}>
                  <h4>Stock Details</h4>
                  <hr />

                  <dl className="row">
                      <dt className="col-sm-9">Stock type</dt>
                      <dd className="col-sm-19">{Stock_type}</dd>

                      <dt className="col-sm-9">Stock size</dt>
                      <dd className="col-sm-19">{size}</dd>

                      <dt className="col-sm-9">Date</dt>
                      <dd className="col-sm-19">{date}</dd>
                  </dl>
              </div></>
      )
    }
}