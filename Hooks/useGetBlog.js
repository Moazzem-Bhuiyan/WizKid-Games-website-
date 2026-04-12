'use client';

import { useEffect, useState } from 'react';

const UsegetBlog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/devblog`,
          {
            // cache: 'force-cache',
            next: { revalidate: 5 },
          }
        );
        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  return { blog, loading, error };
};

export default UsegetBlog;
