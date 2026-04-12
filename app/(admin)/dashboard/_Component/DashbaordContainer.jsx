'use client';

import { useState } from 'react';
import { Mail, BookOpen } from 'lucide-react';
import BlogTab from './BlogTab';
import UploadBlogModal from './UploadBlogModal';
import MailListTab from './MailListTab';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('maillist');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground mt-[100px]">
      {/* HEADER */}
      <header className="border-b bg-card/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage mailing list & blog content smoothly</p>
        </div>
      </header>

      {/* TABS */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 border-b mb-8">
          <TabButton
            active={activeTab === 'maillist'}
            onClick={() => setActiveTab('maillist')}
            icon={<Mail size={18} />}
            label="Mailing List"
          />

          <TabButton
            active={activeTab === 'blogs'}
            onClick={() => setActiveTab('blogs')}
            icon={<BookOpen size={18} />}
            label="Blog Posts"
          />
        </div>

        {/* CONTENT */}
        {activeTab === 'maillist' && <MailListTab />}
        {activeTab === 'blogs' && <BlogTab setUploadModalOpen={setUploadModalOpen} />}
      </main>

      {/* MODAL */}
      <UploadBlogModal open={uploadModalOpen} setOpen={setUploadModalOpen} />
    </div>
  );
};

export default DashboardTabs;

/* ---------- Tab Button ---------- */
const TabButton = ({ active, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 border-b-2 transition-all duration-300
        ${
          active
            ? 'border-primary text-primary'
            : 'border-transparent text-muted-foreground hover:text-foreground'
        }`}
    >
      {icon}
      {label}
    </button>
  );
};
