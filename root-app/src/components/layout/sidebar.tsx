import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PlusOutlined,
  CalendarOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Button, Input, Tree, Space, Typography } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { Menu, MenuProps } from "antd";
import { useToken } from "@/hooks/useToken";
import { UserProfile } from "./user";
import { css } from "@emotion/css";
import { Footer } from "./footer";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];
export const SideBar: React.FC = () => {
  const token = useToken();

  return (
    <div
      className={css({
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        height: "100%",
        paddingInline: token.paddingXS,
        paddingBlock: token.paddingSM,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: token.paddingXL,
      })}
    >
      <UserProfile />
      <div
        className={css({
          flex: 1,
        })}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
      <Footer />
    </div>
  );
};
