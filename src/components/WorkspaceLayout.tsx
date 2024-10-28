import React from 'react';
import { Users, Video, MessageSquare, Share2, Settings } from 'lucide-react';
import Workspace from './Workspace';
import Sidebar from './Sidebar';

export default function WorkspaceLayout() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Workspace />
      </main>
    </div>
  );
}