'use client';

import { Button } from 'antd';
import { Edit } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

import UTextEditor from '../../../../components/Form/UTextEditor';
import UInput from '../../../../components/Form/UInput';
import UsegetBlog from '../../../../Hooks/useGetBlog';

export default function UploadBlogForm() {
  const { blog, loading: blogLoading } = UsegetBlog();

  const [updating, setUpdating] = useState(false);

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const singleBlog = blog?.data?.data?.[0];

  // ✅ Set default values when API data arrives
  useEffect(() => {
    if (singleBlog) {
      reset({
        title: singleBlog.title || '',
        description: singleBlog.description || '',
      });
    }
  }, [singleBlog, reset]);

  const onSubmit = async (data) => {
    try {
      setUpdating(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/devblog/${singleBlog?._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || 'Blog update failed');
        return;
      }

      toast.success('Blog updated successfully');
    } catch (error) {
      console.error('Error during blog update:', error);
      toast.error('Something went wrong!');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg mb-1 font-bold">Title</h1>

        {/* Title */}
        <UInput type="text" name="title" placeholder="Enter title" required disabled={updating} />
        <h1 className="text-lg mb-1 font-bold">Description</h1>
        {/* Description */}
        <UTextEditor name="description" placeholder="Enter blog content here..." />

        {/* Submit */}
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="w-full rounded-xl !bg-black"
          icon={<Edit size={18} />}
          loading={updating || blogLoading}
        >
          {updating ? 'Updating...' : 'Save Changes'}
        </Button>
      </form>
    </FormProvider>
  );
}
