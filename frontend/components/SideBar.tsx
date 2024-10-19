// components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-blue-600 text-white w-64 p-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <nav className="mt-6">
            <ul>
            <li className="mt-4"><a href="#" className="text-lg">Analysis</a></li>
            <li className="mt-4"><a href="#" className="text-lg">Data</a></li>
            <li className="mt-4"><a href="#" className="text-lg">Top View</a></li>
            <li className="mt-4"><a href="#" className="text-lg">Performance</a></li>
            <li className="mt-4"><a href="#" className="text-lg">Users</a></li>
            </ul>
        </nav>
        </aside>
    );
};

export default Sidebar;
