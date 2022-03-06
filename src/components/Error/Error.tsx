import React from "react";

import { Result } from "antd";

export type ErrorProps = {
  title: string;
  subTitle: string;
};

const Error: React.FC<ErrorProps> = ({ title, subTitle }) => {
  return <Result status="error" title={title} subTitle={subTitle}></Result>;
};

export default React.memo(Error);
