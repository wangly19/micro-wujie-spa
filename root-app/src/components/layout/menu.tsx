import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PlusOutlined,
  CalendarOutlined,
  LinkOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import { Button, Input, Tree, Space, Typography, Tag, Divider, Alert } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { Menu, MenuProps } from "antd";
import { useToken } from "@/hooks/useToken";
import { css } from "@emotion/css";

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
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];
export const SideMenu: React.FC = () => {
  const token = useToken();

  return (
    <div
      className={css({
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        height: "100%",
        paddingInline: token.paddingXS,
      })}
    >
      <div
        className={css({
          paddingInline: token.paddingXS,
          paddingTop: token.paddingSM,
          fontSize: token.fontSizeHeading5,
          fontWeight: "bold",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        })}
      >
        API接口
        <Button type="text" size="small" icon={<ShrinkOutlined />} />
      </div>
      <Divider
        style={{
          marginBlock: token.marginSM
        }}
      />
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};
