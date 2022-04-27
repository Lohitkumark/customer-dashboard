import React from "react";

const StatsItem = ({count, text}) =>{

    return(
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-header"><h2>{count}</h2></div>
                <div className="card-body">
                    <div className="card-title"><h4>{text}</h4></div>
                </div>   
            </div>    
        </div>
    )
}

export default StatsItem