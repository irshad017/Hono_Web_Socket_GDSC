import React, { useEffect, useState } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import socket from '@/utils/socket';


Chart.register(ArcElement, Tooltip, Legend);

const PieChartCard: React.FC<{ title: string }> = ({ title }) => {
    const [PIEData, setPIEData] = useState<number[]>([])
    // const [PIETimes, setPIETimes] = useState<string[]>([])
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            // ("BAR: ", message)
            if(message.chart === 'chart3'){
                setPIEData((prevData) => [...prevData, message.value].slice(-5)); 
                // setPIETimes((prevTimes) => [...prevTimes, message.time].slice(-8));
            }
            // else{
            //     // ("Not FOr Pie Chart")
            // }
        };

        socket.addEventListener('message', handleMessage);
        return () => {
            socket.removeEventListener('message', handleMessage);
        };
    }, []);
    const data = {
        labels: ['Product A', 'B', 'C', 'D', 'E'],
        datasets: [
        {
            data: PIEData,
            backgroundColor: ['red',"yellow",'#4f46e5', '#f97316', '#10b981'],
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-4">
                <Pie data={data} />
            </div>
        </div>
    );
};

export default PieChartCard;
