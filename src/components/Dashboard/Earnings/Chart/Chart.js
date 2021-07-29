import React, { Fragment, useEffect, useRef } from "react";

import classes from "./Chart.module.scss";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Sales",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};

const ChartContainer = () => {
    const chartRef = useRef();
    useEffect(() => {
        const canvasId = document.getElementById("myCanvas");
        chartRef.current = new Chart(canvasId, {
            type: "line",
            data,
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: false,
                },
            },
        });

        return () => chartRef.current.destroy();
    }, []);

    const addHandler = () => {
        const chart = chartRef.current;
        chart.data.datasets[0].data.push(Math.round(Math.random() * 100));
        chart.update();
    };

    return (
        <Fragment>
            <canvas id="myCanvas"></canvas>
            <button onClick={addHandler}>add</button>
        </Fragment>
    );
};

export default ChartContainer;
