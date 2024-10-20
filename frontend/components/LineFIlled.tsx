import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ScriptableContext } from 'chart.js';
import { Line } from 'react-chartjs-2';
import socket from '@/utils/socket';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
    title: string;
}

const FilledLineChart: React.FC<LineChartProps> = ({ title }) => {
    const [data1, setData1] = useState<number[]>([]);
    const [times, setTimes] = useState<string[]>([]);
    const [date, setDate] = useState<string>("");
    
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            if (message.chart === 'chart1') {
                setData1((prevData) => [...prevData, message.value].slice(-35)); // For Chart 1
                const now =new Date()
                const DaTe = now.toLocaleDateString();
                setDate(DaTe)
                const time = now.toLocaleTimeString();
                setTimes((e)=> [...e, time].slice(-35))
            } 
        };
        socket.addEventListener('message', handleMessage);
        return () => {
            socket.removeEventListener('message', handleMessage);
        };
    }, []);

    const chartData = {
        labels: times,
        datasets: [
            {
                label: "Real-time Random Numbers",
                data: data1,
                fill: true,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    if (!context.chart) return "rgba(255, 99, 132, 0.4)"; // Fallback color
                    const { chart } = context;
                    const { ctx } = chart;

                    if (!ctx) return "rgba(255, 99, 132, 0.4)"; // Fallback color

                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "rgba(255, 99, 132, 0.4)"); // Top color
                    gradient.addColorStop(1, "rgba(255, 99, 132, 0.1)"); // Bottom color
                    return gradient;
                },
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: "rgba(255, 255, 255, 1)",
                pointBorderColor: "rgba(255, 99, 132, 1)",
                pointBorderWidth: 2,
                borderWidth: 3,
                hoverBackgroundColor: "rgba(255, 99, 132, 0.6)",
                hoverBorderWidth: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: 'rgba(255, 99, 132, 1)',
                bodyColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(255, 99, 132, 0.8)',
                borderWidth: 1,
                borderRadius: 10,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                },
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    color: 'rgba(0, 0, 0, 0.7)',
                    stepSize: 10
                },
                min: 0,
                max: 100,
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title} <span className='text-sm text-gray-600'>Date: {date} </span></h3>
        <div className="mt-4 min-h-[300px] h-full">
            <Line data={chartData} options={options} />
        </div>
        </div>
    );
};

export default FilledLineChart;
