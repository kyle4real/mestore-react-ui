import React, { Fragment, useContext, useEffect, useRef } from "react";

import classes from "./ChartContainer.module.scss";

import { Chart, registerables } from "chart.js";
import UiContext from "../../../../store/ui-context";
Chart.register(...registerables);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Sales",
            // backgroundColor: "rgba(51, 200, 99, .1)",
            // fill: true,
            borderColor: "#33c863",
            data: [0, 10, 5, 2, 20, 30, 45],
            tension: 0.2,
        },
        {
            label: "Profit",
            // backgroundColor: "rgba(242, 153, 74, .1)",
            // fill: true,
            borderColor: "#f2994a",
            data: [0, 2, 3, 1, 14, 23, 30],
            tension: 0.2,
        },
    ],
};

const ChartContainer = () => {
    const uiCtx = useContext(UiContext);
    const chartRef = useRef();
    useEffect(() => {
        const canvasId = document.getElementById("myCanvas");
        chartRef.current = new Chart(canvasId, {
            type: "line",
            data,
            options: {
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false,
                    axis: "x",
                },
                plugins: {
                    tooltip: {
                        enabled: true,
                    },
                    legend: false,
                },
                scales: {
                    y: {
                        display: false,
                    },
                    x: {
                        grid: {
                            drawBorder: false,
                            borderDash: [6],
                            color: uiCtx.theme === "light" ? "#dddfe5" : "#26323f",
                            border: false,
                        },
                        ticks: {
                            color: uiCtx.theme === "light" ? "#929292" : "#fff",
                            font: {
                                family: "'Mulish', sans-serif",
                                size: "16px",
                            },
                        },
                    },
                },
            },
        });

        return () => chartRef.current.destroy();
    }, [uiCtx.theme]);

    const addHandler = () => {
        const chart = chartRef.current;
        chart.data.datasets[0].data.push(Math.round(Math.random() * 100));
        chart.update();
    };

    return (
        <Fragment>
            <canvas id="myCanvas"></canvas>
        </Fragment>
    );
};

export default ChartContainer;
