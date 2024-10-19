// import React, { useEffect, useState } from "react";
// import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend , ArcElement} from "chart.js";
// import socket from "@/utils/socket";
// import { Line, Pie } from "react-chartjs-2";
// import StatsCard from "./StatsCard";
// import Sidebar from "./SideBar";
// import BarChart from "./BarChart";
// import PieChartCard from "./PieChartCard";
// import LineChart from "./LineChart";
// import StackedBarChart from "./StackedBarChart";

// Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

// const Dashboard: React.FC = () => {
//     const [data, setData] = useState<number[]>([]);
//     const [PIEdata, setPIEData] = useState<number[]>([]);
//     const [times, setTimes] = useState<string[]>([]);

//     // LIVE RANDOM NUMBER COMING FROM BACKEND WEB-SOCKET
//     useEffect(() => {
//         const handleMessage = (event: MessageEvent) => {
//             const message = JSON.parse(event.data);
//             setData((prevData) => [...prevData, message.value].slice(-50)); // Keep only the last 10 values
//             setPIEData((prevData) => [...prevData, message.value].slice(-5)); // Keep only the last 10 values
//             setTimes((prevTimes) => [...prevTimes, message.time].slice(-50)); // Keep only the last 10 timestamps
//         };

//         socket.addEventListener('message', handleMessage);

//         // Cleanup the socket connection
//         return () => {
//             socket.removeEventListener('message', handleMessage);
//         };
//     }, []);

//     // const chartData = {
//     //     labels: times,
//     //     datasets: [
//     //         {
//     //             label: "Real-time Random Numbers",
//     //             data: data,
//     //             fill: true,
//     //             borderColor: "rgba(255,99,132,1)",
//     //             backgroundColor: "rgba(255,99,132,0.4)",
//     //             tension: 0.1,
//     //         },
//     //     ],
//     // };

//     const chartData = {
//         labels: times,
//         datasets: [
//             {
//                 label: "Real-time Random Numbers",
//                 data: data,
//                 fill: true,
//                 borderColor: "rgba(255, 99, 132, 1)",
//                 backgroundColor: (context) => {
//                     const { chart } = context.chart;
//                     const { ctx } = chart;
//                     const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust height based on your canvas
//                     gradient.addColorStop(0, "rgba(255, 99, 132, 0.4)"); // Top color
//                     gradient.addColorStop(1, "rgba(255, 99, 132, 0.1)"); // Bottom color
//                     return gradient;
//                 },
//                 tension: 0.4, // Adjust tension for smoothness
//                 pointRadius: 5, // Size of points
//                 pointBackgroundColor: "rgba(255, 255, 255, 1)", // White background for points
//                 pointBorderColor: "rgba(255, 99, 132, 1)", // Border color for points
//                 pointBorderWidth: 2, // Border width for points
//                 borderWidth: 3, // Width of the line
//                 hoverBackgroundColor: "rgba(255, 99, 132, 0.6)", // Color on hover
//                 hoverBorderWidth: 3, // Width on hover
//             },
//         ],
//     };
    
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false, // Maintain aspect ratio for responsiveness
//         plugins: {
//             tooltip: {
//                 enabled: true,
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 titleColor: 'rgba(255, 99, 132, 1)',
//                 bodyColor: 'rgba(0, 0, 0, 1)',
//                 borderColor: 'rgba(255, 99, 132, 0.8)',
//                 borderWidth: 1,
//                 borderRadius: 10,
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false, // Hide grid lines on the x-axis
//                 },
//                 ticks: {
//                     color: 'rgba(0, 0, 0, 0.7)', // X-axis label color
//                 },
//             },
//             y: {
//                 grid: {
//                     color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines
//                 },
//                 ticks: {
//                     color: 'rgba(0, 0, 0, 0.7)', // Y-axis label color
//                 },
//             },
//         },
//     };    

//     // PieChart
//     const PieData = {
//         labels: ['Product A', 'Product B', 'Product C', 'D', "E"],
//         datasets: [
//         {
//             data: PIEdata,
//             backgroundColor: ['#4f46e5', '#f97316', '#10b981', 'red', 'gray'],
//         },
//         ],
//     };

//     return (
//         <div className="min-h-screen flex bg-gray-50">
//             <Sidebar />
//             <main className="flex-1 p-6 bg-white shadow-md">
//                 <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     <StatsCard title="Statistics 1" value="21%" />
//                     <StatsCard title="Statistics 2" value="56%" />
//                     <StatsCard title="Statistics 3" value="75%" />
//                     <StatsCard title="Statistics 4" value="100%" />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h2 className="text-lg font-semibold mb-2">Sales Statistics</h2>
//                         <BarChart title="Bar" />
//                     </div>
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h2 className="text-lg font-semibold mb-2">Real-time Data Chart</h2>
//                         {/* <Line data={chartData} options={{ responsive: true }} /> */}
//                         <Line data={chartData} options={options} />
//                     </div>
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h2 className="text-lg font-semibold mb-2">Customer Demographics</h2>
//                         {/* <PieChartCard title="Pie" /> */}
//                         <div className="bg-white rounded-lg shadow-md p-6">
//                         <h3 className="text-xl font-semibold">Pie</h3>
//                         <div className="mt-4">
//                             <Pie data={PieData} />
//                         </div>
//         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h2 className="text-lg font-semibold mb-2">Growth Statistics</h2>
//                         <LineChart title="Line" />
//                     </div>
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h2 className="text-lg font-semibold mb-2">Product Sales</h2>
//                         <StackedBarChart title="StackedBar" />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Dashboard;

