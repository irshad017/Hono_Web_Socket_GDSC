// components/StackedBarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface StackedBarChartProps {
    title: string;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ title }) => {
    const data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
        {
            label: 'Product A',
            data: [65, 59, 80, 81],
            backgroundColor: '#4f46e5',
        },
        {
            label: 'Product B',
            data: [28, 48, 40, 19],
            backgroundColor: '#f97316',
        },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4">
            <Bar data={data} options={{ scales: { x: { stacked: true }, y: { stacked: true } } }} />
        </div>
        </div>
    );
};

export default StackedBarChart;
