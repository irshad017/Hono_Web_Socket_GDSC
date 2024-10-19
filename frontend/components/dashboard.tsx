import React, { useEffect, useState } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import socket from "@/utils/socket";
import { Line } from "react-chartjs-2";

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
        </div>
    );
};

export default Dashboard;
