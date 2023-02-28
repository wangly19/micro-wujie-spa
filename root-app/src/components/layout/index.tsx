import { Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet } from "umi";
import { SideBar } from './sidebar'
import { css } from '@emotion/css'
import { SideMenu } from './menu'
const Sider = Layout.Sider;
const Content = Layout.Content;

export const RootLayout = () => {
  const [pathname, setPathname] = useState("/welcome");
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsed width={250} theme="light">
        <SideBar/>
      </Sider>
      <Sider theme="light" width={250} >
        <SideMenu/>
      </Sider>
      <Content className={css({
        height: '100vh',
        overflow: 'auto'
      })} >
        <Outlet/>
      </Content>
    </Layout>
  );
};
