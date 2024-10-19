// components/PieChartCard.tsx
import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


// Register the necessary components
Chart.register(ArcElement, Tooltip, Legend);

const PieChartCard: React.FC<{ title: string }> = ({ title }) => {
    
    const data = {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [
        {
            data: [20, 50, 100],
            backgroundColor: ['#4f46e5', '#f97316', '#10b981'],
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
