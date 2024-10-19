// components/StatsCard.tsx
import React from 'react';

interface StatsCardProps {
    title: string;
    value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-4 text-3xl font-bold">{value}</p>
        </div>
    );
};

export default StatsCard;
