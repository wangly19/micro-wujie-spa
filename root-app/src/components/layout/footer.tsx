import { Button, Space, Tooltip } from "antd";
import {
  DisconnectOutlined,
  BugOutlined,
  CodeOutlined,
  EllipsisOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <Space direction="vertical" size={0} >
      <Tooltip placement="right" title="当前您正所处在微前端页面" >
        <Button size="large" type="link" icon={<DisconnectOutlined />} ></Button>
      </Tooltip>
      <Button size="large" type="text" icon={<GithubOutlined />}></Button>
      <Button size="large" type="text" icon={<BugOutlined />}></Button>
      <Button size="large" type="text" icon={<CodeOutlined />}></Button>
      <Button size="large" type="text" icon={<EllipsisOutlined />}></Button>
    </Space>
  );
};
