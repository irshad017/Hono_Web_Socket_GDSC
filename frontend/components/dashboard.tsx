import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from "chart.js";
import StatsCard from "./StatsCard";
import Sidebar from "./SideBar";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import StackedBarChart from "./StackedBarChart";
import PieChartCard from "./PieChartCard";
import FilledLineChart from "./LineFIlled";
import DoughnutChart from "./Doughnut";
import RadarChart from "./Radar";
import PolarChart from "./PolarChart";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

const Dashboard: React.FC = () => {
    
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-4 sm:p-6 bg-white shadow-md w-full lg:w-10/12">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Dashboard</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                    <StatsCard title="Statistics 1" value="21%" />
                    <StatsCard title="Statistics 2" value="56%" />
                    <StatsCard title="Statistics 3" value="75%" />
                    <StatsCard title="Statistics 4" value="100%" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Sales Statistics</h2>
                        <BarChart title="Product Sales" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Real-time Data Chart</h2>
                        <FilledLineChart title="Product" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Orders</h2>
                        <PieChartCard title="Product Orders" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Product Overview</h2>
                        <RadarChart title="Overview" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Product Orders</h2>
                        <DoughnutChart title="Delivered Orders" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Growth Statistics</h2>
                        <LineChart title="Sales Statistics" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Product Sales</h2>
                        <StackedBarChart title="StackedBar" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Product Sales</h2>
                        <PolarChart title="StackedBar" />
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Dashboard;
