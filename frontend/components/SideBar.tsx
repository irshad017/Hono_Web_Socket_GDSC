import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-blue-600 text-white w-full lg:w-2/12 p-4 h-auto lg:h-screen lg:sticky top-0 hidden lg:block">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <nav className="mt-6">
                <ul>
                    <li className="mt-4">
                        <a href="#" className="text-lg hover:text-blue-300 transition">Analysis</a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-lg hover:text-blue-300 transition">Data</a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-lg hover:text-blue-300 transition">Top View</a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-lg hover:text-blue-300 transition">Performance</a>
                    </li>
                    <li className="mt-4">
                        <a href="#" className="text-lg hover:text-blue-300 transition">Users</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
