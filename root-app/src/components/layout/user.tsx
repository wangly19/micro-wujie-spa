import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

export const UserProfile = () => {
  return (
    <div>
      <Badge color="blue" dot>
        <Avatar
          shape="square"
          size="large"
          src="https://avatars.githubusercontent.com/u/45115006?s=40&v=4"
        />
      </Badge>
    </div>
  );
};
