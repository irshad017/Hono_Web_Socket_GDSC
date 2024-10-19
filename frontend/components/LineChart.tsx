import React from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
    title: string;
}

const LineChart: React.FC<LineChartProps> = ({ title }) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
        {
            label: 'Growth',
            data: [23,83,19,78,4,100],
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
