import { Spin } from 'antd';
import * as React from 'react';
import ReactMicroFramework from "wujie-react";

export default function MicroContainer() {
  return (
    <ReactMicroFramework
      width="100%"
      height="100%"
      name="umi"
      url="https://umijs.org/"
      sync={true}
      fiber
    />
  );
}
