import React, { FC } from 'react';
import { IRouteComponentProps } from 'umi'

const Layout: FC<IRouteComponentProps> = (props) => {
  return (
    <div>
      <header>头部</header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
