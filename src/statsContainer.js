import React from "react";
import StatsItem from './statsItem'
import orderTotal from "./orderTotal";
import uniqueCustomers from "./uniqueCustomers";

const StatsContainer = ({customers}) =>{
    const orderCount = customers.length
    
    return (
        <div className='row'>
            <StatsItem count = {orderCount} text = 'Orders'/>
            <StatsItem count = {orderTotal(customers)} text = 'Amount'/>
            <StatsItem count = {uniqueCustomers(customers).length} text = 'Customers'/>
        </div>
    )
}

export default StatsContainer