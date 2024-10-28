import React from 'react';
import { Users, Video, MessageSquare, Share2, Settings, Layout } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Layout, label: 'Dashboard' },
    { icon: Users, label: 'Team' },
    { icon: Video, label: 'Meetings' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Share2, label: 'Share' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Layout className="w-6 h-6 text-white" />
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors group">
                <item.icon className="w-6 h-6 text-slate-600 group-hover:text-indigo-600" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
          alt="User avatar"
          className="w-10 h-10 rounded-full border-2 border-slate-200"
        />
      </div>
    </div>
  );
}