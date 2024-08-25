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


      <h2
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Get in touch
      </h2>
      <Flex justify={'center'}>
        <Flex direction={'column'}>
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
    </Page>
  )
}

export default Contact
