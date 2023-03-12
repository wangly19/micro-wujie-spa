
import * as React from 'react';
import { Outlet } from 'umi';
import { ConfigProvider } from 'antd'
import { RootLayout } from '@/components/layout'
import "antd/dist/reset.css";

export default () => {
  return (
    <ConfigProvider>
      1111
    </ConfigProvider>
  );
};