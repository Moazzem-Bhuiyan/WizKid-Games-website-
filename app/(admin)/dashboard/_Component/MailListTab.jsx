'use client';

import { useEffect, useState } from 'react';
import { Download, Mail } from 'lucide-react';
import SkeletonForTable from '../../../../components/skeleton/skeleton';

const MailListTab = () => {
  const [emails, setEmails] = useState([]);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const fetchMailList = async (currentPage = 1) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/mail-list?page=${currentPage}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      const result = await res.json();

      if (result?.success) {
        setEmails(
          result.data.data.map((item) => ({
            id: item._id,
            email: item.email,
            subscribedAt: new Date(item.createdAt).toLocaleDateString(),
          }))
        );
        setMeta(result.data.meta);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMailList(page);
  }, [page]);

  const handleDownloadCSV = () => {
    if (!emails.length) return;

    // CSV headers
    const headers = ['Email', 'Subscribed At'];

    // CSV rows
    const rows = emails.map((item) => [item.email, item.subscribedAt]);

    // Combine
    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

    // Create file
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mail-list.csv');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Email Subscribers</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Total: {meta?.total || 0}</span>

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={handleDownloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
          >
            <Download size={16} />
            Download CSV
          </button>
        </div>
      </div>

      {/* LIST */}
      {loading ? (
        <p className="text-muted-foreground">
          <SkeletonForTable />
        </p>
      ) : emails.length === 0 ? (
        <EmptyState icon={<Mail />} text="No subscribers yet" />
      ) : (
        <div className="grid gap-3">
          {emails.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 rounded-xl border bg-card hover:shadow-md transition"
            >
              <div>
                <p className="font-medium">{item.email}</p>
                <p className="text-sm text-muted-foreground">{item.subscribedAt}</p>
              </div>

              <span className="text-xs bg-muted px-3 py-1 rounded-full">subscriber</span>
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        <div className="px-4 py-2 bg-muted rounded-lg text-sm">
          {page} / {meta?.totalPage || 1}
        </div>

        <button
          disabled={page === meta?.totalPage}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MailListTab;

/* ---------- Empty ---------- */
const EmptyState = ({ icon, text }) => (
  <div className="text-center py-16 border rounded-xl bg-card">
    <div className="mx-auto mb-2 text-muted-foreground">{icon}</div>
    <p className="text-muted-foreground">{text}</p>
  </div>
);
