import React, { Component } from 'react'
import axios from 'axios';

    export default class ExpenseDetails  extends Component {
    constructor(props){
        super(props);

        this.state={
            Expense:([])
        };
    }

    componentDidMount(){

        const _id = this.props.match.params.expenseid;

        axios.get(`http://localhost:8070/Expense/${_id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Expense:res.data.Expense
                });

                console.log(this.state.Expense);
            }

        });
    }
        render() {

            const {Expenses,date,Description,Cost_Center,Remark,Amount}  = this.state.Expense;
         return(
             
             <div style={{ marginTop: '20px' }}>
                 <h4>{Expenses}</h4>
                 <hr />

                 <dl className="row">

                     <dt ClassName="col-sm-3">Date</dt>
                     <dd ClassName="col-sm-9">{date}</dd>

                     <dt ClassName="col-sm-3">Description</dt>
                     <dd ClassName="col-sm-9">{Description}</dd>

                     <dt ClassName="col-sm-3">Cost_Center</dt>
                     <dd ClassName="col-sm-9">{Cost_Center}</dd>

                     <dt ClassName="col-sm-3">Remark</dt>
                     <dd ClassName="col-sm-9">{Remark}</dd>

                     <dt ClassName="col-sm-3">Amount</dt>
                     <dd ClassName="col-sm-9">{Amount}</dd>

                 </dl>
             </div>
             
         )
    }
}