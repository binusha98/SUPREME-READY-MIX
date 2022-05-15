import React, { Component } from 'react'
import axios from 'axios';
    export default class IncomeDetails  extends Component {
    constructor(props){
        super(props);

        this.state={
            Income:([])
        };
    }

    componentDidMount(){

        const _id = this.props.match.params.incomeid;

        axios.get(`http://localhost:8070/Income/${_id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Income:res.data.Income
                });

                console.log(this.state.Income);
            }

        });
    }
        render() {

            const{Incomes,Income_date,Income_Type,Income_Description,Income_Amount} = this.state.Income;
         return(
             <div style={{marginTop:'20px'}}>
                <h4>{Incomes}</h4>
                <hr/>

                <dl className="row">

                <dt ClassName="col-sm-3">Date</dt>
                <dd ClassName="col-sm-9">{Income_date}</dd>

                <dt ClassName="col-sm-3">Type</dt>
                <dd ClassName="col-sm-9">{Income_Type}</dd>

                <dt ClassName="col-sm-3">Description</dt>
                <dd ClassName="col-sm-9">{Income_Description}</dd>

                <dt ClassName="col-sm-3">Amount</dt>
                <dd ClassName="col-sm-9">{Income_Amount}</dd>

                </dl>
             </div>
             
         )
    }
}