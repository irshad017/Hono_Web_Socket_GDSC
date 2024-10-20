// RadarChart.js
import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import socket from '@/utils/socket';

ChartJS.register(...registerables);

interface RadarChartProps {
    title: string;
}

const PolarChart = ({ title }: RadarChartProps) => {
    const [data1, setData1] = useState<number[]>([])
    const [data2, setData2] = useState<number[]>([])
    const [data3, setData3] = useState<number[]>([])
    const [data4, setData4] = useState<number[]>([])
    useEffect(() => {
        const fetchData = (event: MessageEvent) => {
            const response = JSON.parse(event.data);
            if(response.chart === 'chart1'){
                setData1((e)=> [...e,response.value].slice(-5))
            }else if(response.chart === 'chart2'){
                setData2((e)=> [...e,response.value].slice(-5))
                
            }else if(response.chart === 'chart3'){
                setData3((e)=> [...e,response.value].slice(-5))
                
            }else if(response.chart === 'chart4'){
                setData4((e)=> [...e,response.value].slice(-5))
            }
        };
        socket.addEventListener('message', fetchData);
        return () => {
            socket.removeEventListener('message', fetchData);
        };
    }, []);
    const data = {
        labels: ['Shoes', 'T-Shirts', 'Jeans', 'Hoodie', 'Jacket'],
        datasets: [
            {
                label: 'Shoes',
                data: data1,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'T-Shirts',
                data: data2,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Jeans',
                data: data3,
                backgroundColor: 'rgba(255, 206, 86, 0.7)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
            {
                label: 'Hoodie',
                data: data4,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Jackets',
                data: data4,
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: true,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title} </h3>
        <div className="mt-4 min-h-[300px] h-full">
            <PolarArea data={data} options={options} />
        </div>
        </div>
    );
};

export default PolarChart;
