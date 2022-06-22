import React from 'react'
import ReactApexChart from 'react-apexcharts';
const ChartBar = ({ data }) => {
    const { total, totalMarkets, totalMarketCap } = data;

    const state = {
        series: [total, totalMarkets, totalMarketCap / 100000000],
        options: {
            stroke: {
                curve: 'smooth',
            },
            chart: {
                width: 270,
                type: 'pie',
            },
            labels: ['Total', 'Total Markets', 'Total Market Cap'],
            responsive: [{
                breakpoint: 380,
                options: {
                    chart: {
                        width: 130
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width={500} />
        </div>
    );

}


export default ChartBar;