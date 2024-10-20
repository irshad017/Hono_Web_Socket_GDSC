import React from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
    title: string;
}

const LineChart: React.FC<LineChartProps> = ({ title }) => {
    const data = {
        labels: ['Week-1', 'Week-2', 'Week-3', 'Week-4', 'Week-5','Week-6', 'Week-7', 'Week-8', 'Week-9', 'Week-10','Week-11', 'Week-12', 'Week-13', 'Week-14', 'Week-15','Week-16'],
        datasets: [
        {
            label: 'Growth',
            data: [23,30,27,38,40,44,41,35,60,78,60,83,65,88,85,99],
            fill: false,
            borderColor: '#4f46e5',
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4 min-h-[300px] h-full">
            <Line data={data} />
        </div>
        </div>
    );
};

export default LineChart;
