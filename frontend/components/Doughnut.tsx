// components/DoughnutChart.tsx
import React from 'react';
import { Chart, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the components
Chart.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    title: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title }) => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 150, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title, // Use the title prop here
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-4">
                <Doughnut data={data} />
            </div>
        </div>
    );
};

export default DoughnutChart;
