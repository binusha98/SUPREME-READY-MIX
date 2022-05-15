import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import NavBar from './NavBar';
export default class Homee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Expense: ([])

        };
    }

    componentDidMount() {
        this.retrieveExpense();
    }


    retrieveExpense() {
        axios.get("http://localhost:8070/Expense/eview").then(res => {
            if (res.data.success) {
                this.setState({
                    Expense: res.data.existingexpenses
                });

                console.log(this.state.Expense)
            }


        });
    }
    onDelete = (id) => {

        axios.delete(`http://localhost:8070/Expense/edelete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveExpense();
        })

    }

    filterData(Expense, searchkey) {

        const result = Expense.filter((Expense) =>

            Expense.date.includes(searchkey) ||
            Expense.Description.toLowerCase().includes(searchkey) ||
            Expense.Cost_Center.toLowerCase().includes(searchkey) ||
            Expense.Remark.toLowerCase().includes(searchkey)
        )

        this.setState({ Expense: result })
    }

    handleSearchArea = (e) => {

        const searchkey = e.currentTarget.value;

        axios.get("http://localhost:8070/Expense/eview").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingexpenses, searchkey)

            }
        });

    }

    render() {
        return (
            <> <BrowserRouter>
            
            <div className="container">
                <NavBar/>
                
            </div>
    
            
            </BrowserRouter> 
           <header class="site-header sticky-top py-1"> 
            </header><div className="container">
                    <div className="row">
                        <div className="col-lg-9 mt-2 mb-2">
                            <h4>All Expenses</h4>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="search"
                                name="searchQuery"
                                aria-label="Search"
                                onChange={this.handleSearchArea}>

                            </input>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Cost_Center</th>
                                <th scope="col">Remark</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Expense.map((Expense, index) => (
                                <tr key={index}>
                                    <th scope="row"> {index + 1}</th>
                                    <td>
                                        <a href={`/eget/${Expense._id}`} style={{ textDecoration: 'none' }}>


                                            {Expense.date}
                                        </a>
                                    </td>
                                    <td>{Expense.Description}</td>
                                    <td>{Expense.Cost_Center}</td>
                                    <td>{Expense.Remark}</td>
                                    <td>{Expense.Amount}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/eedit/${Expense._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Update
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(Expense._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="btn btn-success"><a href="/eadd" style={{ textDecoration: 'none', color: 'white' }}>Add New Expense</a></button>

                </div></>
        )
    }
}