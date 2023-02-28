import { ProCard } from '@ant-design/pro-components';

export const Main = () => {
  return (
    <ProCard split="vertical">
      <ProCard size='small' colSpan="250px">
        左侧内容
      </ProCard>
      <ProCard title="左右分栏子卡片带标题" headerBordered>
        <div style={{ height: 360 }}>右侧内容</div>
      </ProCard>
    </ProCard>
  );
};