import React from "react";
import OrderChart from './orderChart'
import OrderTable from './orderTable'
import uniqueCustomers from "./uniqueCustomers";

const OrderContainer =({customers}) => {

    const customerFrequency = () =>{
            const customerData = uniqueCustomers(customers)

            // console.log(customerData.length);
            const frequencyObj = {1:0, 2:0, 3:0, 4:0, '5+': 0}

            customerData.forEach((customer) =>{
                const customerOrder = customers.filter((c)=>{
                    return c.Phone ===  customer.Phone
                })
                console.log(customerOrder);
                if(customerOrder.length >= 5) {
                    frequencyObj['5+']++
                }else{
                    frequencyObj[customerOrder.length]++
                }
            })
        return frequencyObj
    }

    return (
        <div className="row">
        <div className="col-md-12">
            <h2> Order Distribution</h2>
        </div>
            <OrderTable data = {customerFrequency()}/>
            <OrderChart data = {customerFrequency()}/>
        </div>
    )
}

export default OrderContainer