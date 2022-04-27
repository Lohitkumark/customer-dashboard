import React from "react";

const Search = ({term, handleChange}) =>{
    return(
        <div>
            <input type = 'text' className="form-control" placeholder = 'search' value = {term} onChange = {handleChange}/>
        </div>
    )
}

export default Search