import React from "react";
import {GoogleCharts} from 'google-charts'

const OrderChart = ({data})=>{
    
    GoogleCharts.load(drawChart);
    
    const chartData = [ 
        ['No of orders', 'customers count']
    ]
    console.log('data',chartData);
        
        for(const key in data){
            chartData.push([key, data[key]])
        }

    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable(chartData)

        const options = {
        title: 'Order Distribution'
        };

        const chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
    return(
        <div className="col-md-6">
            <div id="piechart" style={{width: '450px', height: '350px'}}></div>
        </div>
    )
}

export default OrderChart