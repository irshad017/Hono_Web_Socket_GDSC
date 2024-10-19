import React, { useEffect, useState } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import socket from "@/utils/socket";
import { Line } from "react-chartjs-2";
import StatsCard from "./StatsCard";
import Sidebar from "./SideBar";
import BarChart from "./BarChart";
import PieChartCard from "./PieChartCard";
import LineChart from "./LineChart";
import StackedBarChart from "./StackedBarChart";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
    const [data, setData] = useState<number[]>([]);
    const [times, setTimes] = useState<string[]>([]);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            setData((prevData) => [...prevData, message.value].slice(-10)); // Keep only the last 10 values
            setTimes((prevTimes) => [...prevTimes, message.time].slice(-10)); // Keep only the last 10 timestamps
        };

        socket.addEventListener('message', handleMessage);

        // Cleanup the socket connection
        return () => {
            socket.removeEventListener('message', handleMessage);
        };
    }, []);

    const chartData = {
        labels: times,
        datasets: [
            {
                label: "Real-time Random Numbers",
                data: data,
                fill: true,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>Real-time Data Chart</h2>
            <Line data={chartData} options={{ responsive: true }} />
            <div className="min-h-screen flex">
            
            <Sidebar />

            
            <main className="flex-1 p-6 bg-gray-100">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Statistics 1" value="21%" />
                <StatsCard title="Statistics 2" value="56%" />
                <StatsCard title="Statistics 3" value="75%" />
                <StatsCard title="Statistics 4" value="100%" />
                </div>

                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <BarChart title="Sales Statistics" />
                <PieChartCard title="Customer Demographics" />
                </div>

                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <LineChart title="Growth Statistics" />
                <StackedBarChart title="Product Sales" />
                </div>
            </main>
</div> 
        </div>
    );
};

export default Dashboard;
