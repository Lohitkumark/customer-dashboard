import React from "react";

const CustomersTable = ({customers, showDetails}) =>{

    return (
        <div className="table-responsive-xxl">
            <table className="table table-hover table-responsive-md overflow-auto" >
                <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Phone</b></td>
                        <td><b>Show</b></td>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer)=>{
                        return(
                            <tr key={customer.Phone}>
                                <td>{customer.Name}</td>
                                <td>{customer.Phone}</td>
                                <td><button onClick = {() =>showDetails(customer)} className="btn btn-primary">show</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersTable