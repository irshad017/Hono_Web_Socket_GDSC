import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import socket from '@/utils/socket';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    title: string;
}

const BarChart: React.FC<BarChartProps> = ({ title }) => {
    const [BARData, setBARData] = useState<number[]>([])
    // const [BARTimes, setBARTimes] = useState<string[]>([])
    // console.log("sles", BARData)
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            // console.log("BAR: ", message)
            if(message.chart === 'chart2'){
                setBARData((prevData) => [...prevData, message.value].slice(-5)); 
                // setBARTimes((prevTimes) => [...prevTimes, message.time].slice(-5));
            }
            // else{
            //     // console.log("Data is not of Chart2")
            // }
        };

        socket.addEventListener('message', handleMessage);
        return () => {
            socket.removeEventListener('message', handleMessage);
        };
    }, []);
    const data = {
        labels: ['Shoes', 'T-Shirts', 'Jeans', 'Hoodie', 'Jacket'],
        datasets: [
        {
            label: 'Sales',
            data: BARData,
            backgroundColor: ['#4f46e5', '#f97316', '#10b981', '#facc15', '#ec4899'],
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4 min-h-[300px] h-full">
            <Bar data={data} />
        </div>
        </div>
    );
};

export default BarChart;
