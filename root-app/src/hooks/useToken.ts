import * as React from 'react';
import { theme } from 'antd'

export const useToken = () => {
  const { token } = theme.useToken()
  return token
}