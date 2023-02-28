import * as React from "react";
import { Outlet } from "umi";
import { ConfigProvider, theme } from "antd";
import { RootLayout } from "@/components/layout";
import "antd/dist/reset.css";

console.log(theme, 'GlobalToken')

export default () => {
  return (
    <ConfigProvider theme={{
      components: {
        Menu: {
          colorActiveBarBorderSize: 0,
        }
      },
      token: {
        
      }
    }}>
      <RootLayout />
    </ConfigProvider>
  );
};
