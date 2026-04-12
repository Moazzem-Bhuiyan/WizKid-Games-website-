import { Modal } from 'antd';
import UploadBlogForm from './UploadBlogForm';

export default function UploadBlogModal({ open, setOpen }) {
  return (
    <div className="flex items-center justify-center !z-100">
      <Modal open={open} onCancel={() => setOpen(false)} footer={null} width={4000} centered>
        <h2 className="text-2xl text-center font-bold mb-4">Upload New Blog</h2>
        <UploadBlogForm />
      </Modal>
    </div>
  );
}
