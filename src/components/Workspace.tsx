import React, { useState } from 'react';
import { Users, Video, Share2 } from 'lucide-react';

export default function Workspace() {
  const [activeUsers] = useState([
    { id: 1, name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 2, name: 'Michael Park', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    { id: 3, name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
  ]);

  return (
    <div className="h-full flex flex-col">
      <header className="px-6 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Virtual Design Studio</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Video className="w-4 h-4 mr-2" />
              Join Call
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-sm h-full border border-slate-200 overflow-hidden">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="text-center">
              <p className="text-slate-600 mb-4">Your 3D workspace will appear here</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Initialize Workspace
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-6 py-4 bg-white border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-slate-600" />
            <span className="text-sm text-slate-600">Active Users:</span>
            <div className="flex -space-x-2">
              {activeUsers.map((user) => (
                <img
                  key={user.id}
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  title={user.name}
                />
              ))}
            </div>
          </div>
          <div className="text-sm text-slate-500">
            Workspace ID: WS-2024-03-19
          </div>
        </div>
      </footer>
    </div>
  );
}