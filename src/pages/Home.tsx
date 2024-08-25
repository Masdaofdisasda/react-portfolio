
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import Page from '../components/Page';
import Flex from '../components/Flex.tsx';
import Scene from '../components/Scene.tsx';


function Home() {
  return (
    <Page title="Welcome">
      <div className="relative w-full h-screen">
        <Scene />
        <Flex justify="center" gap={3} className={"absolute top-0"}>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-slate-800 hover:text-blue-700" />
          </a>
          <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-slate-800 hover:text-pink-600" />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="w-6 h-6 text-slate-800 hover:text-green-500" />
          </a>
        </Flex>
      </div>
    </Page>
  )
    ;
}

export default Home;
