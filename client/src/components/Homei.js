import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import NavBar from './NavBar';
export default class Homei extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Income: ([])

        };
    }

    componentDidMount() {
        this.retrieveIncome();
    }


    retrieveIncome() {
        axios.get("http://localhost:8070/Income/iview").then(res => {
            if (res.data.success) {
                this.setState({
                    Income: res.data.existingincomes
                });

                console.log(this.state.Income)
            }


        });
    }
    onDelete = (id) => {

        axios.delete(`http://localhost:8070/Income/idelete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveIncome();
        })

    }

    filterData(Income, searchkey) {

        const result = Income.filter((Income) =>

            Income.Income_Type.includes(searchkey) ||
            Income.Income_Description.toLowerCase().includes(searchkey) ||
            Income.Income_date.toLowerCase().includes(searchkey)
        )

        this.setState({ Income: result })
    }

    handleSearchArea = (e) => {

        const searchkey = e.currentTarget.value;

        axios.get("http://localhost:8070/Income/iview").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingincomes, searchkey)

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
                            <h4>All Incomes</h4>
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
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Income.map((Income, index) => (
                                <tr key={index}>
                                    <th scope="row"> {index + 1}</th>
                                    <td>
                                        <a href={`/get/${Income._id}`} style={{ textDecoration: 'none' }}>


                                            {Income.Income_date}
                                        </a>
                                    </td>
                                    <td>{Income.Income_Type}</td>
                                    <td>{Income.Income_Description}</td>
                                    <td>{Income.Income_Amount}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/edit/${Income._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Update
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(Income._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="btn btn-success"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Add New Income</a></button>

                </div></>
        )
    }
}