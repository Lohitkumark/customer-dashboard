import React, {useState} from "react";
import Search from './search'
import CustomersTable from './customerTable'
import uniqueCustomers from "./uniqueCustomers";
import orderTotal from "./orderTotal";

const CustomersContainer = ({customers}) =>{
    const [term, setTerm] = useState('')
    const onlyUniqueCustomers = uniqueCustomers(customers)

    const showDetails = (customer)=>{
        const customerOrders = customers.filter(c => c.Phone === customer.Phone)
        const customersOrderTotal = orderTotal(customerOrders)
        
        return (
            alert(`
            Name - ${customer.Name}
            customers order - ${customerOrders.length}
            Order Total - ${customersOrderTotal}
            `)
            )
        }
           
    const handleChange =(e) =>{
        const term = e.target.value
            setTerm(term)
    }

    const filterUniqueCustomer =() =>{
        const result = onlyUniqueCustomers.filter((c)=>{
            return (c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term))
        })
        return result
    }
    
    return(
        <div>
        <div className="row mt-4">
        <div className="col-md-8">
            <h2>Listing Customers - {onlyUniqueCustomers.length}</h2>
            </div>
            <div className="col-md-4">
            <Search term = {term} handleChange = {handleChange}/>
            </div>
        </div>
        <div className="row">
            <CustomersTable customers = {filterUniqueCustomer()} showDetails = {showDetails}/>
            </div>
        </div>
    )
}

export default CustomersContainer