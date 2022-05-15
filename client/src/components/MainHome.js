import React, { Component } from 'react'
import axios from 'axios'
export default class Homei extends Component {

    render() {
        return (
            <><nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div class="container-fluid">
                    

                    <div class="collapse navbar-collapse" id="navbarsExample03">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./homei">Incomes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./homee">Expenses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./homee">Expenses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./homei">Incomes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav><div>
                    <div id="templatemo_about" class="container_wapper">
                        <div class="container-fluid">
                            <h1>About Our Organization</h1>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap mission"><i class="fa fa-usd"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/homei" style={{ textDecoration: 'none', color: 'white' }}>Financial Management</a></button>
                                </div>
                                <p>Manage all the incomes and expenses</p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap product"><i class="fa fa-cubes"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/MHome" style={{ textDecoration: 'none', color: 'white' }}>Inventory Management</a></button>
                                </div>
                                <p>Manage all Inventory Items from here</p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap testimonial"><i class="fa fa-briefcase"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/homep" style={{ textDecoration: 'none', color: 'white' }}>Project and contact management </a></button>
                                </div>
                                <p>Manage all Project and contacts Details </p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap statistic"><i class="fa fa-truck"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/vh" style={{ textDecoration: 'none', color: 'white' }}>Machines and vehicle management </a></button>
                                </div>
                                <p>Manage all vehical and machinary details</p>
                            </div><br />
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap mission"><i class="fa fa-check-square"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/suphome" style={{ textDecoration: 'none', color: 'white' }}>Supplies and quality management </a></button>
                                </div>
                                <p>Manage all the Supplies and thei quality</p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap product"><i class="fa fa-users"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/homec" style={{ textDecoration: 'none', color: 'white' }}>Customer Relationship Management </a></button>
                                </div>
                                <p>Manage all Customer details and interactions</p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap testimonial"><i class="fa fa-address-card"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/ihome" style={{ textDecoration: 'none', color: 'white' }}>Human Resource Management</a></button>
                                </div>
                                <p>Manage Human Resources of the company</p>
                            </div>
                            <div class="col-sm-6 col-md-3 about_icon">
                                <div class="imgwap statistic"><i class="fa fa-unlock-alt"></i></div>
                                <div class="col text-center">
                                    <button className="btn btn-success"><a href="/ihome" style={{ textDecoration: 'none', color: 'white' }}>System Administration </a></button>
                                </div>
                                <p>Manage System administration</p>
                            </div>
                            <div class="clearfix testimonial_top_bottom_spacer"></div>

                            <div id="testimonial_text_wap" class="col-xs-9 col-sm-10">
                                <div class="testimonial_text">

                                    <div class="col-sm-9">
                                        <h2>Who are we?</h2>
                                        <p>Supreme Ready Mix has become the best emerging quality ready-mix supplier among Sri Lankan ready-mix suppliers during the last decade, by expanding its plant capacity and investing in new technologies to meet the rapidly increasing concrete demand. As of now, Supreme Ready Mix has two ready-mix concrete plants at Udugampola as well as Uswetakeiyawa.</p>
                                    </div>
                                </div>

                            </div>       </div>

                        <div class="clearfix testimonial_top_bottom_spacer"></div>
                    </div>
                </div></>
                    
                

                )


    }





}

