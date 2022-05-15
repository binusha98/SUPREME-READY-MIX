import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import NavBar from './NavBar';

export default class CreateIncome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Income_date: "",
            Income_Type: "",
            Income_Description: "",
            Income_Amount: "",
            dateError: "",
            TypeError: "",
            DescriptionError: "",
            AmountError: ""
        }
    }


    validate = () => {

        let dateError = "";
        let TypeError = "";
        let DescriptionError = "";
        let AmountError = "";

        if (!this.state.Income_date) {
            dateError = "Date cannot be blank"
        }
        if (!this.state.Income_Type) {
            TypeError = "Income type cannot be blank"
        }
        if (!this.state.Income_Description) {
            DescriptionError = "Description cannot be blank"
        }
        if (!this.state.Income_Amount) {
            AmountError = "Amount cannot be blank"
        }

        if (dateError || TypeError || DescriptionError || AmountError) {
            this.setState({ dateError, TypeError, DescriptionError, AmountError });
            return false;
        }

        return true;
    };


    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            const { Income_date, Income_Type, Income_Description, Income_Amount } = this.state;

            const data = {
                Income_date: Income_date,
                Income_Type: Income_Type,
                Income_Description: Income_Description,
                Income_Amount: Income_Amount
            }

            console.log(data)


            axios.post("http://localhost:8070/Income/iinsert", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        Income_date: "",
                        Income_Type: "",
                        Income_Description: "",
                        Income_Amount: "",
                        dateError: "",
                        TypeError: "",
                        DescriptionError: "",
                        AmountError: ""
                    })
                }
            })
        }
    }
    render() {
        return (

            <><BrowserRouter>

                <div className="container">
                    <NavBar />

                </div>
            </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Add New Income</h1>
                    <form className="needs-validation" novalidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Date</label>
                            <input type="date"
                                className="form-control"
                                name="Income_date"
                                placeholder="Enter Date"
                                value={this.state.Income_date}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.dateError}
                            </div>

                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Type</label>
                            <input type="text"
                                className="form-control"
                                name="Income_Type"
                                placeholder="Enter Income type"
                                value={this.state.Income_Type}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.TypeError}
                            </div>
                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Description</label>
                            <input type="text"
                                className="form-control"
                                name="Income_Description"
                                placeholder="Enter Description"
                                value={this.state.Income_Description}
                                onChange={this.handleInputChange} />
                            <div style={{ color: "red" }}>
                                {this.state.DescriptionError}
                            </div>
                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Amount</label>
                            <input type="number"
                                min="1"
                                step="any"

                                className="form-control"
                                name="Income_Amount"
                                placeholder="Enter Amount "
                                value={this.state.Income_Amount}
                                onChange={this.handleInputChange}
                                required="required" />
                            <div style={{ color: "red" }}>
                                {this.state.AmountError}
                            </div>
                        </div>


                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; save
                        </button>
                    </form>

                </div></>
        )
    }
}