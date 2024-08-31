import Page from '../components/Page.tsx';
import { Input } from '../components/ui/input.tsx';
import { useState } from 'react';
import Flex from '../components/Flex.tsx';
import { Textarea } from '../components/ui/textarea.tsx';
import { Button } from '../components/ui/button.tsx';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';


function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const username = 'david.koeppl75';
  const domain = 'gmail';
  const tld = 'com';

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name && message) {
      const recipientEmail = `${username}@${domain}.${tld}`;
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        'New message from contact form'
      )}&body=${encodeURIComponent(
        `Hi David,\n\n${message}\n\nSincerely,\n${name}\n\n`
      )}`;
    }
  };

  return (
    <Page title={"Contact"}>

      <Flex justify="center">
      <Flex direction="column" className={"lg:w-3/4 xl:w-1/2 mx-8"}>

      <h2
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Get in touch
      </h2>
      <Flex justify={'center'} className={"w-full"}>
        <Flex direction={'column'} className={"w-full"}>
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Textarea placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)}
                    cols={5} />

          <Flex justify={'flex-end'}>

            <Button type="submit" onClick={sendMessage}>
              Send Message
            </Button>
          </Flex>
        </Flex>
      </Flex>


      <h2
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Or follow me
      </h2>

      <Flex justify="center" gap={3}>
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
    </Flex>
      </Flex>
    </Page>
  )
}

export default Contact
