import React, { useState } from "react";


import Accordian from "../Accordian/Accordian";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderDashboard.css';
import Header from "../Header/Header";

const OrderDashboard = () => {


    return (
        // Import a ScrollView so that you are able to see more
        // of the orders
        <div className="container">
            <h2>Current Orders</h2>
            <Accordian></Accordian>
            <Accordian></Accordian>
            <Accordian></Accordian>
            <Accordian></Accordian>
            <Accordian></Accordian>
            <Accordian></Accordian>
            <Accordian></Accordian>
        </div>
    )

}




export default OrderDashboard;