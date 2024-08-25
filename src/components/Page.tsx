import Flex from './Flex.tsx';
import { ReactNode } from 'react';

type LayoutProps = {
  title: string;
  children?: ReactNode;
}

function Page(props: LayoutProps) {
  return (
    <Flex direction={'column'} style={{ maxWidth: "75%" }} gap={4}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {props.title}
      </h1>
      {props.children}
    </Flex>
  );
}

export default Page;
