// components/LineChart.tsx
import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// Register the components
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
    title: string;
}

const LineChart: React.FC<LineChartProps> = ({ title }) => {
    const [LineChartData, setLineData] = useState<number[]>([])
    useEffect(()=>{
        const FetchData = async ()=> {
            const response = await axios.get(`https://data.gdscnsut.com/`)
            console.log("GDSC: ",response.data)
            setLineData(response.data)
        }
        FetchData()
    },[])
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
        {
            label: 'Growth',
            data: LineChartData,
            fill: false,
            borderColor: '#4f46e5',
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4">
            <Line data={data} />
        </div>
        </div>
    );
};

export default LineChart;
