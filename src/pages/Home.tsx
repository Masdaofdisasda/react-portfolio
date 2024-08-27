
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import Flex from '../components/Flex.tsx';
import Bananas from '../components/Banana.tsx';


function Home() {
  return (
    <div className="relative w-full h-screen">
      <Bananas />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <h1 className=" text-5xl font-extrabold lg:text-6xl mb-12">
          Welcome
        </h1>
        <Flex justify="center" gap={4}>
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
    </div>
  )
    ;
}

export default Home;
