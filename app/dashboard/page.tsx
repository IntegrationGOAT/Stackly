'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-800">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              {sidebarOpen && (
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stackly
                </span>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {sidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <NavItem icon="📊" label="Dashboard" active sidebarOpen={sidebarOpen} />
            <NavItem icon="📁" label="Projects" sidebarOpen={sidebarOpen} />
            <NavItem icon="👥" label="Team" sidebarOpen={sidebarOpen} />
            <NavItem icon="📈" label="Analytics" sidebarOpen={sidebarOpen} />
            <NavItem icon="⚙️" label="Settings" sidebarOpen={sidebarOpen} />
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">john@example.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Bar */}
        <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Welcome back, John!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Users"
              value="12,543"
              change="+12.5%"
              positive
              icon="👥"
            />
            <StatCard
              title="Revenue"
              value="$43,590"
              change="+8.2%"
              positive
              icon="💰"
            />
            <StatCard
              title="Projects"
              value="156"
              change="+23.1%"
              positive
              icon="📁"
            />
            <StatCard
              title="Conversion"
              value="3.24%"
              change="-2.4%"
              positive={false}
              icon="📈"
            />
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem
                  title="New user registered"
                  time="2 minutes ago"
                  icon="👤"
                />
                <ActivityItem
                  title="Payment received"
                  time="1 hour ago"
                  icon="💳"
                />
                <ActivityItem
                  title="Project completed"
                  time="3 hours ago"
                  icon="✅"
                />
                <ActivityItem
                  title="New message"
                  time="5 hours ago"
                  icon="💬"
                />
              </div>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-zinc-800">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Project</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Team</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <ProjectRow
                    name="Website Redesign"
                    status="In Progress"
                    team="Design Team"
                    progress={75}
                  />
                  <ProjectRow
                    name="Mobile App"
                    status="In Progress"
                    team="Dev Team"
                    progress={45}
                  />
                  <ProjectRow
                    name="Marketing Campaign"
                    status="Completed"
                    team="Marketing"
                    progress={100}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, sidebarOpen }: { icon: string; label: string; active?: boolean; sidebarOpen: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
      }`}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && <span className="font-medium">{label}</span>}
    </a>
  );
}

function StatCard({ title, value, change, positive, icon }: { title: string; value: string; change: string; positive: boolean; icon: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
      <div className={`text-sm font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {change} from last month
      </div>
    </div>
  );
}

function ActivityItem({ title, time, icon }: { title: string; time: string; icon: string }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
}

function ProjectRow({ name, status, team, progress }: { name: string; status: string; team: string; progress: number }) {
  return (
    <tr className="border-b border-gray-200 dark:border-zinc-800 last:border-0">
      <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">{name}</td>
      <td className="py-4 px-4">
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            status === 'Completed'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          }`}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">{team}</td>
      <td className="py-4 px-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{progress}%</span>
        </div>
      </td>
    </tr>
  );
}
