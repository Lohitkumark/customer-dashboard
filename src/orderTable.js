import React from "react";

const OrderTable = ({data}) =>{
    console.log(Object.keys(data));

    return (
        <div className="col-md-6">                   
            <table className="table">
                <thead>
                    <tr>
                        <td><b>No Of Orders</b></td>
                        <td><b> Customers count </b></td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((ele,i)=>{
                        return (
                            <tr key = {i}>
                                <td>{ele}</td>
                                <td>{data[ele]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
       </div>
    )
}

export default OrderTable