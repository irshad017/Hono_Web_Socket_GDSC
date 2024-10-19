import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from "chart.js";
import StatsCard from "./StatsCard";
import Sidebar from "./SideBar";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import StackedBarChart from "./StackedBarChart";
import PieChartCard from "./PieChartCard";
import FilledLineChart from "./LineFIlled";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

const Dashboard: React.FC = () => {
    
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-6 bg-white shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <StatsCard title="Statistics 1" value="21%" />
                    <StatsCard title="Statistics 2" value="56%" />
                    <StatsCard title="Statistics 3" value="75%" />
                    <StatsCard title="Statistics 4" value="100%" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Real-time Data Chart</h2>
                        <FilledLineChart title="LIne" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Sales Statistics</h2>
                        <BarChart title="Bar" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Customer Demographics</h2>
                        <PieChartCard title="PIe"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Growth Statistics</h2>
                        <LineChart title="Line" />
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Product Sales</h2>
                        <StackedBarChart title="StackedBar" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
