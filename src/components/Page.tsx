import { useLocation } from 'react-router-dom';
import Flex from './Flex.tsx';
import { ReactNode, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';

type LayoutProps = {
  title: string;
  children?: ReactNode;
};

function Page(props: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Flex direction={'column'} className="xl:w-3/4 pb-24 mt-20" gap={4}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-4">
        {props.title}
      </h1>
      {props.children}
      <Flex className={"scroll-m-20 pt-4  border-t"} justify="center" gap={3}>
        <a
          href="https://www.linkedin.com/in/david-köppl-5762a3231/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBGQ%2F5rgqTLmyD7mSg5hW%2Bg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-slate-800 hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/Masdaofdisasda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
        </a>
        <a
          href="https://www.instagram.com/dkppl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6 text-slate-800 hover:text-pink-600" />
        </a>
        <a
          href="https://open.spotify.com/artist/3PLuaCTHQf9NDJP4E5bfrh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="w-6 h-6 text-slate-800 hover:text-green-500" />
        </a>
      </Flex>
    </Flex>
  );
}

export default Page;
