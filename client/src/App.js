import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateIncome from './components/CreateIncome';
import UpdateIncome from './components/UpdateIncome';
import Homei from './components/Homei';
import IncomeDetails from './components/IncomeDetails';
import NavBar from './components/NavBar';
import CreateExpense from './components/CreateExpense';
import UpdateExpense from './components/UpdateExpense';
import ExpenseDetails from './components/ExpenseDetails';
import Homee from './components/Homee';
import MainHome from './components/MainHome';
import CreateCustomer from './components/CreateCustomer'
import CreateInteraction from './components/CreateInteraction'
import CustomerDetails from './components/CustomerDetails'
import EditCustomer from './components/EditCustomer'
import EditInteraction from './components/EditInteraction'
import InteractionDetails from './components/InteractionDetails'
import IntHome from './components/IntHome'
import CHome from './components/CHome'
import CNavBar from './components/CNavBar'
import AddMaterial from './components/AddMaterial'
import MaterialDetails from './components/MaterialDetails'
import MHome from './components/MHome'
import MNavBar from './components/MNavBar'
import EditMaterial from './components/EditMaterial'
import SHome from './components/SHome'
import AddStock from './components/AddStock'
import EditStock from './components/EditStock'
import StockDetails from './components/StockDetails'
import AddSupplies from './components/AddSupplies';
import EditSupplies from './components/EditSupplies';
import HomeSup from './components/HomeSup';
import NaviBar from './components/NaviBar';
import SupplyDetails from './components/SupplyDetails';
import HomeQS from './components/HomeQS';
import AddQualities from './components/AddQualities';
import EditQualities from './components/EditQualities';
import QualityDetails from './components/QualityDetails';
import AddMachine from './components/AddMachine';
import EditDetails from './components/EditDetails';
import Machinedetails from './components/Machinedetails';
import Vehiclehome from './components/Vehiclehome';
import Addvehicle from './components/Addvehicle';
import Editvehicle from './components/Editvehicle';
import vehicledetails from './components/vehicledetails';
import Machinehome from './components/Machinehome';
import Navbarv from './components/Navbarv';
import PCreate from './components/PCreate';
import PDetails from './components/PDetails';
import PEdit from './components/PEdit';
import PHome from './components/PHome';
import THome from './components/THome';
import TCreate from './components/TCreate';
import TEdit from './components/TEdit';
import Tdetails from './components/TDetails';
import PNavBar from './components/PNavBar';




export default class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <div className="container">

                    <Route path="/nav" component={NavBar}></Route>
                    <Route exact path="/"><MainHome /> </Route>
                    <Route path="/homei" component={Homei}></Route>
                    <Route path="/add" component={CreateIncome}></Route>
                    <Route path="/edit/:incomeid" component={UpdateIncome}></Route>
                    <Route path="/get/:incomeid" component={IncomeDetails}></Route>

                    <Route path="/homee" exact component={Homee}></Route>
                    <Route path="/eadd" component={CreateExpense}></Route>
                    <Route path="/eedit/:expenseid" component={UpdateExpense}></Route>
                    <Route path="/eget/:expenseid" component={ExpenseDetails}></Route>


                    <Route path="/CNavBar" component={CNavBar}></Route>
                    <Route path="/homec" component={CHome}></Route>
                    <Route path="/cadd" component={CreateCustomer}></Route>
                    <Route path="/cedit/:id" component={EditCustomer}></Route>
                    <Route path="/view/:id" component={CustomerDetails}></Route>

                    <Route path="/inthome" component={IntHome}></Route>
                    <Route path="/addInt" component={CreateInteraction}></Route>
                    <Route path="/editInt/:id" component={EditInteraction}></Route>
                    <Route path="/viewInt/:id" component={InteractionDetails}></Route>


                    <Route path="/MNavBar" component={MNavBar}></Route>
                    <Route path="/MHome" component={MHome}></Route>
                    <Route path="/Materialadd" component={AddMaterial}></Route>
                    <Route path="/Matedit/:materialid" component={EditMaterial}></Route>
                    <Route path="/Matget/:materialid" component={MaterialDetails}></Route>

                    <Route path="/StockHome" exact component={SHome}></Route>
                    <Route path="/Stockadd" component={AddStock}></Route>
                    <Route path="/sedit/:stockid" component={EditStock}></Route>
                    <Route path="/sget/:stockid" component={StockDetails}></Route>

                    <Route path="/NaviBar" component={NaviBar}></Route>
                    <Route path="/suphome" component={HomeSup}></Route>
                    <Route path="/supadd" component={AddSupplies}></Route>
                    <Route path="/supedit/:id" component={EditSupplies}></Route>
                    <Route path="/supplies/:id" component={SupplyDetails}></Route>


                    <Route path="/qview" exact component={HomeQS}></Route>
                    <Route path="/addQs" component={AddQualities}></Route>
                    <Route path="/editQs/:id" component={EditQualities}></Route>
                    <Route path="/qualities/:id" component={QualityDetails}></Route>



                    <Route path="/NavBarv" component={Navbarv}></Route>

                    <Route path="/vh" component={Vehiclehome}></Route>
                    <Route path="/vadd" component={Addvehicle}></Route>
                    <Route path="/vedit/:id" component={Editvehicle}></Route>
                    <Route path="/vpost/:id" component={vehicledetails}></Route>


                    <Route path="/mah" component={Machinehome}></Route>
                    <Route path="/post/:id" component={Machinedetails}></Route>
                    <Route path="/edit/:id" component={EditDetails}></Route>
                    <Route path="/Madd" component={AddMachine}></Route>


                    <Route path="/PNavBar"  component={PNavBar}></Route>
                    <Route path="/homep" exact component={PHome}></Route>
                    <Route path="/padd" component={PCreate}></Route>
                    <Route path="/pedit/:id" component={PEdit}></Route>
                    <Route path="/Project/:id" component={PDetails}></Route>


                    <Route path="/T" exact component={THome}></Route>
                    <Route path="/Tadd" component={TCreate}></Route>
                    <Route path="/Tedit" component={TEdit}></Route>
                    <Route path="/Tender/:id" component={Tdetails}></Route>


                </div>




            </BrowserRouter>


        )
    }
}
