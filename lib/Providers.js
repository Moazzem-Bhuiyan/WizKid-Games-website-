'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

export default function Providers({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
