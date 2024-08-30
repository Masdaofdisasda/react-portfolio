import { MenubarComponent } from './Menu.tsx';
import { Fragment, ReactNode } from 'react';

type LayoutProps = {
  children?: ReactNode;
}

export function Layout( props : LayoutProps ) {
  return (
    <Fragment>
      <MenubarComponent />
      <main className={'.dark'}>
        {props.children}
      </main></Fragment>
  );
}

export default Layout;
