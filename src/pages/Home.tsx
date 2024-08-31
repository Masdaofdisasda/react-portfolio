
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import Flex from '../components/Flex.tsx';
import FloatingModels from '../components/FloatingModels.tsx';
import { isChrome } from 'react-device-detect';


function Home() {

  const invertedTransparencyStyle= isChrome
    ? 'relative text-5xl font-extrabold lg:text-6xl mb-12 mix-blend-difference invert'
        : 'text-5xl font-extrabold lg:text-6xl mb-12 mix-blend-difference invert backdrop-blur-sm backdrop-opacity-0';
  return (
    <div className="relative w-full h-screen">
      <FloatingModels />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
        <h1 className={invertedTransparencyStyle}>
          Welcome
        </h1>
      <Flex justify="center" gap={4}>
        <a href="https://www.linkedin.com/in/david-köppl-5762a3231/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBGQ%2F5rgqTLmyD7mSg5hW%2Bg%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 text-slate-800 hover:text-blue-700" />
        </a>
        <a href="https://github.com/Masdaofdisasda" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
          </a>
          <a href="https://www.instagram.com/dkppl/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-slate-800 hover:text-pink-600" />
          </a>
          <a href="https://open.spotify.com/artist/3PLuaCTHQf9NDJP4E5bfrh" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="w-6 h-6 text-slate-800 hover:text-green-500" />
          </a>
        </Flex>
      </div>
    </div>
  )
    ;
}

export default Home;
