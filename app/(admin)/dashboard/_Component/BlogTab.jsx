'use client';

import SkeletonForTable from '../../../../components/skeleton/skeleton';
import UsegetBlog from '../../../../Hooks/useGetBlog';
import { BookOpen, Plus, Edit } from 'lucide-react';

const BlogTab = ({ setUploadModalOpen }) => {
  const { blog, loading } = UsegetBlog();
  const data = blog?.data?.data || [];
  const singleBlog = data?.[0];

  if (loading)
    return (
      <p className="text-muted-foreground">
        <SkeletonForTable />
      </p>
    );

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Blog Posts</h2>

        {data.length === 0 && (
          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
          >
            <Plus size={18} />
            New Post
          </button>
        )}
      </div>

      {/* CONTENT */}
      {data.length === 0 ? (
        <EmptyBlog />
      ) : (
        <div className="p-5 border rounded-xl bg-card hover:shadow-md transition">
          <h3 className="text-xl font-bold">{singleBlog?.title}</h3>

          <button
            onClick={() => setUploadModalOpen(true)}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg"
          >
            <Edit size={18} />
            Edit Post
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogTab;

const EmptyBlog = () => (
  <div className="text-center py-16 border rounded-xl bg-card">
    <BookOpen className="mx-auto mb-2 text-muted-foreground" />
    <p className="text-muted-foreground">No blog posts yet</p>
  </div>
);
