import React from "react";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import { useGetCoinHistoryQuery } from "../services/cryptoApi";

const BarChart = () => {
    const { cryptoId } = useParams();
    const coinPrice = [];
    const coinTimeStamp = [];
    const history = useGetCoinHistoryQuery({ cryptoId });
    // console.log(history?.data?.data?.history.length);

    for (let i = 0; i < history?.data?.data?.history?.length; i += 1) {
        coinPrice.push(history?.data?.data?.history[i]?.price)
    }
    for (let i = 0; i < history?.data?.data?.history?.length; i += 1) {

        coinTimeStamp.push(new Date(history?.data?.data?.history[i]?.timestamp).toLocaleDateString())
    }
    console.log(coinPrice);
    var data = {
        series: [{
            name: "STOCK ABC",
            data: coinPrice
        }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },

        title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
        },
        subtitle: {
            text: 'Price Movements',
            align: 'left'
        },
        labels: coinTimeStamp,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    // const data = {
    //     series: [{
    //         name: 'Price in USD',
    //         data: coinPrice,
    //     }],

    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'area'
    //         },
    //         dataLabels: {
    //             label: coinTimeStamp,
    //             enabled: true,
    //         },
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         xaxis: {
    //             type: 'datetime',
    //             categories: [1, 2, 4, 5, 6, 7],
    //         },
    //         tooltip: {
    //             x: {
    //                 format: 'dd/MM/yy HH:mm'
    //             },
    //         },
    //     },
    // }
    return (
        <div>
            <ReactApexChart options={data.chart} series={data.series} type="area" height={350} width={1000} />
        </div>
    );
}

export default BarChart;