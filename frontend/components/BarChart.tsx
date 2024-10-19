// components/BarChart.tsx
import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    title: string;
}

const BarChart: React.FC<BarChartProps> = ({ title }) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
        {
            label: 'Sales',
            data: [12, 19, 3, 5, 2],
            backgroundColor: ['#4f46e5', '#f97316', '#10b981', '#facc15', '#ec4899'],
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4">
            <Bar data={data} />
        </div>
        </div>
    );
};

export default BarChart;
