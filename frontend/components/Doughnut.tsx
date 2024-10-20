import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import socket from '@/utils/socket';

Chart.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    title: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title }) => {
    const [OrderData, setOrderData] = useState<number[]>([])
    useEffect(()=>{
        const fecthIt = (item: MessageEvent)=>{
            const response = JSON.parse(item.data)
            if(response.chart === 'chart4'){
                setOrderData((e)=> [...e, response.value].slice(-5))
            }
        }
        socket.addEventListener('message', fecthIt)
        return ()=> {
            socket.removeEventListener('message', fecthIt)
        }
    },[])
    const data = {
        labels: ['Shoes', 'T-Shirts', 'Jeans', 'Hoodie', 'Jacket'],
        datasets: [
            {
                label: 'My First Dataset',
                data: OrderData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',   
                    'rgba(54, 162, 235, 0.4)',  
                    'rgba(255, 206, 86, 0.4)',   
                    'rgba(75, 192, 192, 0.4)',  
                    'rgba(153, 102, 255, 0.4)',  
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.8)',   
                    'rgba(54, 162, 235, 0.8)',  
                    'rgba(255, 206, 86, 0.8)',   
                    'rgba(75, 192, 192, 0.8)',   
                    'rgba(153, 102, 255, 0.8)', 
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-4 min-h-[300px] h-full">
                <Doughnut data={data} />
            </div>
        </div>
    );
};

export default DoughnutChart;
