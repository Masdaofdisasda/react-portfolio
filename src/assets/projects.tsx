import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: ReactNode;
  imageUrl?: string[]
  youtubeUrl?: string;
  githubUrl?: string;
}

const P: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children, ...props }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
};

const H2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
      {children}
    </h2>
  );
};

const UL: React.FC<React.HTMLProps<HTMLUListElement>> = ({ children, ...props }) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Greed',
    description: <div>
      <P>
        Greed is a dynamic and visually immersive 3D game that I developed using C++ and OpenGL, leveraging advanced
        graphics techniques to deliver a compelling and challenging experience. In Greed, players must collect as much
        gold as possible while racing to the top of a perilous level, all the while evading the rising lava that
        threatens to engulf them. However, there's a catch—the more gold you collect, the slower you become, adding a
        strategic element to the gameplay.
      </P>

      <P>
        This project was a culmination of my passion for both game development and computer graphics, and it was
        recognized with the prestigious TUWIN Computer Graphics Hall of Fame first place award.
      </P>

      <H2>
        Key Features:
      </H2>

      <UL>
        <li>Advanced OpenGL 4.6 Techniques: Utilized AZDO (Approaching Zero Driver Overhead) features for optimal
          rendering performance.
        </li>
        <li>Bindless Textures: Implemented to reduce draw call overhead and improve rendering efficiency.</li>
        <li>PCF Shadow Maps: Employed Percentage-Closer Filtering (PCF) for smooth and realistic shadow edges.</li>
        <li>HDR Rendering: High Dynamic Range rendering enhances visual fidelity, providing a more vibrant and realistic
          lighting experience.
        </li>
        <li>Screen Space Ambient Occlusion (SSAO): Added depth to the visuals by simulating the subtle shadows that
          occur in crevices and corners.
        </li>
        <li>Tone Mapping and Color Grading: Applied to ensure consistent and visually appealing color across various
          lighting conditions.
        </li>
        <li>Particle Simulation and Volumetric Lights: Enhanced the atmosphere with dynamic particles and realistic
          light scattering.
        </li>
        <li>KTX Textures: Used KTX format for efficient texture storage and loading, supporting high-quality visuals.
        </li>
        <li>Frustum Culling: Optimized performance by rendering only the visible portions of the scene.</li>
      </UL>

      <P>
        The game level was intricately modeled using Maya3D, ensuring a detailed and engaging environment for players.
        Greed not only showcases my technical skills in modern graphics programming but also my ability to integrate
        complex systems into a cohesive and exciting gameplay experience.
      </P>
    </div>,
    imageUrl: ['/images/greed1.jpg', '/images/greed2.jpg', '/images/greed3.jpg'],
    youtubeUrl: 'https://www.youtube.com/embed/l_ucd9Kc4S4?si=O2QKUmwCvj-NEuSx',
    githubUrl: 'https://github.com/Masdaofdisasda/cgue22-greed',
  },
  {
    id: 2,
    title: 'Neckbreak Velocity',
    description: <div>
      <P>Neck Break Velocity is an adrenaline-pumping, two-player
        split-screen racing game developed using C# and Unity.
        In this high-speed challenge, players race from one end of the track to the other, navigating through a chaotic
        environment filled with wandering NPCs that must be avoided at all costs. Colliding with these NPCs triggers a
        dramatic "ragdoll" effect, sending your character flying and adding an unpredictable twist to the gameplay.</P>

      <P>Designed for both keyboard and gamepad inputs, Neck Break Velocity offers intuitive controls and a highly
        responsive gaming experience. Players can also customize their characters, adding a personal touch to the
        intense competition.</P>

      <H2>
        Key Features:</H2>

      <UL>

        <li>Two-Player Split-Screen: Enjoy fast-paced, head-to-head racing action with a friend on the same screen.</li>
        <li>Dynamic Ragdoll Physics: Collide with obstacles and watch as your character is flung around the screen,
          creating chaotic and hilarious moments.
        </li>
        <li>Unity's High-Definition Rendering Pipeline (HDRP): Leveraged HDRP to deliver stunning visuals, with detailed
          environments and smooth lighting effects.
        </li>
        <li>Custom Character Customization: Personalize your racer to stand out on the track.</li>
        <li>Keyboard and Gamepad Support: Play with your preferred input method, whether it's a keyboard or a gamepad.
        </li>
        <li>Original Soundtrack: Enjoy a self-composed soundtrack that perfectly complements the fast-paced and
          energetic nature of the game.
        </li>
      </UL>


      <P>Neck Break Velocity not only demonstrates my proficiency in C# and Unity but also showcases my ability to
        create engaging and visually appealing gameplay experiences. The game combines humor, chaos, and competition,
        making it a unique addition to my portfolio.</P>
    </div>,
    imageUrl: ['/images/neckbreakVelocity1.png', '/images/neckbreakVelocity2.png'],
  },
  {
    id: 3,
    title: 'ADAM Light Optimization',
    description: <div>
      <P>Adam Light Optimization is an advanced project developed as part of my Bachelor's degree, built on top of a PhD
        research project focused on differentiable rendering. This project tackles the complex challenge of light optimization within 3D models, enabling precise control over lighting conditions in a scene by leveraging state-of-the-art optimization techniques.</P>

      <P>At its core, Adam Light Optimization is designed to solve inverse rendering problems—where the goal is to determine the optimal lighting configuration needed to achieve desired illumination in specific areas of a 3D model. Users can select regions within the 3D environment that require specific lighting conditions, and the system automatically computes the optimal placement and intensity of lights to achieve the desired effect.</P>

      <P>Key to the project's success is its ability to integrate seamlessly with various optimization algorithms, such as Adam, to ensure that the light placement process is both efficient and accurate. The system intelligently adds new lights into the scene, optimizing their positions and parameters to meet the scene's lighting requirements while avoiding common pitfalls like over-illumination or suboptimal light distribution.</P>

      <H2>
      Key Features:</H2>

      <UL>
        <li>Differentiable Rendering Integration: Built on a differentiable renderer, the project solves complex inverse
          rendering problems related to lighting.
        </li>
        <li>Advanced Light Optimization: Automatically optimizes light placement and intensity in 3D scenes to achieve
          precise illumination targets.
        </li>
        <li>Flexible Optimization Algorithms: Supports various optimization algorithms, including Adam, to ensure robust
          and efficient light optimization.
        </li>
        <li>User-Controlled Lighting: Allows users to specify target areas within the 3D model that require specific
          lighting, making the tool versatile for various applications.
        </li>

      </UL>

      <P>Adam Light Optimization represents a significant step forward in the field of computer graphics and rendering,
        showcasing my ability to work on cutting-edge technologies and contribute to advanced research in optimization
        techniques. This project not only demonstrates technical expertise in 3D rendering and optimization but also
        highlights my ability to innovate on top of existing research to solve real-world problems.</P>
    </div>,
    imageUrl: ['../images/quake1.png', '../images/quake2.png', '../images/quake3.png'],
  },
  {
    id: 4,
    title: 'Fashion App "ECOuture"',
    description: <div>
      <P>Ecouture is a concept for a fashion-forward, eco-friendly mobile app designed to promote sustainable living within the fashion industry. Developed as a collaborative project during a semester-long course, this app concept was created by a team of four, with a focus on addressing the environmental impact of fashion.</P>

      <P>The goal of Ecouture is to empower users to make more sustainable fashion choices by sharing clothes, discovering where to buy eco-friendly garments, and learning more about sustainable fashion practices. The app's design emphasizes ease of use and aesthetic appeal, aligning with the needs of environmentally conscious consumers.</P>

      <H2>
        Key Contributions:
      </H2>

      <UL>
        <li>Concept Development and Pitching: I pitched the original concept for Ecouture, focusing on the intersection of fashion and sustainability.</li>
          <li>Screen Design in Figma: Designed multiple app screens in Figma, ensuring a seamless and visually appealing user experience that aligns with the app's eco-friendly ethos.</li>
            <li>Advertisement and Promotion: Contributed to the creation of an advertisement for the app using After Effects, with an original soundtrack produced in Ableton, showcasing the app's features and mission.</li>
            <li>Team Collaboration: Worked closely with three other team members to develop and refine the app concept, ensuring that it met our project's goals and deadlines.</li>

      </UL>

      <P>Ecouture is more than just a concept—it's a vision for how technology can be harnessed to promote sustainable fashion choices. This project showcases my skills in UX/UI design, team collaboration, and my ability to contribute creatively to a project from concept to final presentation.</P>
    </div>,
    imageUrl: ['../images/ecouture1.jpg','../images/ecouture2.png','../images/ecouture3.png','../images/ecouture4.png'],
    youtubeUrl: 'https://youtu.be/d4uZRdqVliY',
  },
  {
    id: 5,
    title: 'Mail Server',
    description: <div>
      <P>
      As part of a university group project, I collaborated with two other team members to develop a fully functional mail client and server using Java and Gradle. This project was executed in two distinct phases, each focusing on different aspects of email system functionality, from basic message handling to secure communication and domain management.
      </P>
      <P>
      Phase 1: Core Email System Implementation In the initial phase, we developed the core components of the email system, which included:
    </P>

      <UL>
        <li>Message Transfer Protocol (MTP): Implemented a custom protocol to handle the sending and receiving of emails between clients and servers.</li>
        <li>Message Access Protocol (MAP): Developed protocols for accessing and retrieving emails from the server, ensuring efficient communication between the client and server.</li>
        <li>Multi-Threaded Servers: Created multi-threaded transfer, mailbox, and monitoring servers to handle multiple client requests simultaneously, providing a scalable and responsive system.</li>
      </UL>


      <P>Phase 2: Enhancing Functionality and Security Building on the foundational work from the first phase, we introduced several advanced features:
      </P>
      <UL>
        <li>Domain Lookup Servers: Integrated domain lookup functionality to route emails between different domains, enhancing the system's versatility and real-world applicability.</li>
        <li>Secure Transfer Protocols: Added encryption to ensure secure email transmission, protecting user data from potential interception or unauthorized access.</li>
      <li>Message Integrity Checkers: Implemented mechanisms to verify the integrity of messages, ensuring that emails are not tampered with during transit.</li>
  <li>Command Line Interface (CLI): Developed a user-friendly CLI to interact with the email system, allowing users to send, receive, and manage their emails directly from the command line.</li>

      </UL>
      <P>This project not only deepened my understanding of network protocols and multi-threaded programming but also demonstrated the importance of security and data integrity in communication systems. The successful completion of this project reflects my ability to work effectively in a team, solve complex problems, and deliver a robust and secure software solution.</P>
    </div>,
    imageUrl: ['../images/mailServer1.png','../images/mailServer2.png'],
    githubUrl: 'https://github.com/Masdaofdisasda/dslab-assignment-2',
  },
  {
    id: 6,
    title: 'Movie Podcast',
    description: <div>
      <P>Behind the Plot Horror is a short podcast series that I co-hosted with two friends, where we dove into the world of bad horror movies, dissecting their plots, characters, and overall absurdity. This project was not only a fun exploration of the horror genre but also an opportunity for me to hone my skills in audio production and creative content creation.</P>

      <P>Each episode of Behind the Plot Horror featured in-depth discussions on various horror films, focusing on what made them both hilariously bad and oddly entertaining. We aimed to engage listeners with our lighthearted and humorous take on these films, making even the worst movies a joy to revisit.</P>

      <H2>
        Key Contributions:
      </H2>

      <UL>
        <li>Intro and Outro Tunes: Composed and produced unique intro and outro tunes for the podcast, setting the tone for each episode and giving the show a distinctive audio identity.</li>
        <li>Fake Advertisements: Created humorous, fake advertisements that were interspersed throughout the episodes, adding an extra layer of entertainment and showcasing my creativity in audio production.</li>
      <li>Audio Mixing and Production: Took charge of the entire audio mixing process, using Ableton to ensure that each episode had high-quality sound, with balanced levels and clear dialogue.</li>
  <li>Content Creation and Hosting: Actively participated in the discussions, bringing insightful and often comedic perspectives to the analysis of the films, and helped in structuring the episodes for an engaging listener experience.</li>
      </UL>

      <P>Behind the Plot Horror was more than just a podcast; it was an exercise in creative storytelling, audio engineering, and collaborative content creation. This project highlights my ability to blend technical skills with creative passion, resulting in a polished and entertaining final product.</P>
    </div>,
    imageUrl: ['../images/behindThePlot1.png'],
  },
  {
    id: 7,
    title: 'Payment App "Pay2Peer"',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: ['../images/paypalClone1.png','../images/paypalClone2.png','../images/paypalClone3.png'],
  },
  {
    id: 8,
    title: 'Portfolio Project',
    description: <div>
      <P>This Personal Portfolio Website is a meticulously crafted platform designed to showcase my projects, skills, and experience as a software engineer. Built with modern web technologies, the site is a reflection of my technical proficiency and design sensibilities.</P>

      <H2>
        Key Technologies and Features:
      </H2>

      <UL>
        <li>React and TypeScript: The website is built using React, a powerful JavaScript library for building user interfaces, and TypeScript, which adds type safety and scalability to the codebase.</li>
        <li>Vite: Utilized Vite as the build tool for its fast development environment and optimized production builds.</li>
      <li>ShadCN UI Library: Enhanced the website's user interface with ShadCN, built on top of Radix and Tailwind CSS, for a consistent and customizable design system.</li>
  <li>3D Elements with Three.js Fiber: Integrated 3D elements on the homepage using Three.js Fiber, adding a dynamic and interactive experience for visitors.</li>
<li>ESLint and Prettier: Implemented ESLint and Prettier for code formatting and maintaining a clean, consistent codebase.</li>
<li>Static Website Hosting: The site is hosted as a static website, ensuring fast load times and reliability. There’s no backend, keeping the architecture simple and focused on content delivery.</li>

      </UL>

      <P>This portfolio website not only serves as a display of my work but also as a testament to my ability to build and deploy modern web applications. It’s a clean, responsive, and efficient site that highlights both my technical and creative skills.</P>
    </div>,
    imageUrl: ['/images/portfolio.png'],
    githubUrl: 'https://github.com/Masdaofdisasda/react-portfolio',
  },
  {
    id: 9,
    title: 'Online Shop "Ticketline"',
    description: <div>
      <P>TicketLine is an online platform designed for purchasing and reserving concert tickets, developed as part of a university project. Built using Angular for the frontend and Spring Boot for the backend, this application offers a comprehensive and user-friendly solution for both concertgoers and event organizers. The project was managed using Git, with screen designs crafted in Figma to ensure a cohesive and intuitive user experience.</P>

      <H2>
        Key Features:
      </H2>

      <UL>
        <li>Concert Ticket Search and Purchase: Users can search for upcoming concerts, view event details, and purchase tickets directly through the platform. </li>
        <li>Seat Selection and Reservation: Allows users to select their preferred seats and reserve tickets if they wish to purchase them later, offering flexibility in the ticket-buying process.</li>
        <li>Admin Capabilities: Admins have extensive control over the platform, including the ability to: </li>
        <UL>
          <li>Create and manage venues with detailed seating plans.</li>
          <li>Edit events, set ticket prices, and oversee ticket sales.</li>
          <li>Publish news related to events and manage user accounts.</li>
        </UL>
      </UL>
<H2>
  My Role: Usability Engineer and Frontend Lead
</H2>
      <P>As part of a six-developer team, I served as the Usability Engineer and Frontend Lead, responsible for ensuring that the user experience was smooth, intuitive, and aligned with the project’s goals. My contributions included:</P>

      <UL>

        <li>User Experience Design: Worked closely with the team to deliver a user-friendly interface, ensuring that users could easily navigate the platform and complete their tasks efficiently.</li>
        <li>Frontend Development: Led the frontend development efforts, implementing the user interface using Angular, and ensuring it met both functional requirements and usability standards.</li>
        <li>Collaboration and Leadership: Coordinated with other team members to integrate the frontend with the backend, facilitated communication, and ensured timely delivery of project milestones.</li>

      </UL>
      <P>TicketLine showcases my ability to design and implement user-centric web applications, as well as my leadership skills in guiding a team to deliver a successful and fully functional product. This project not only demonstrates my technical abilities but also highlights my focus on creating positive user experiences.</P>
    </div>,
    imageUrl: ['../images/ticketline1.png','../images/ticketline2.png','../images/ticketline3.png','../images/ticketline4.png'],
    githubUrl: 'https://github.com/Masdaofdisasda/ticketline',
  },
  {
    id: 10,
    title: 'Direct Volume Rendering',
    description: <div>
      <P>As part of a university visualization course, I developed a Direct Volume Rendering tool using Three.js and WebGL, aimed at enabling real-time 3D texture visualization directly in the browser. This project allows users to switch between two advanced rendering techniques—First-Hit Compositing and Maximum Intensity Projection—providing an interactive and educational experience for exploring volumetric data.</P>

      <H2>
        Key Features:
      </H2>

      <UL>
        <li>First-Hit Compositing: Implements a rendering technique that calculates the first intersection of the view ray with a high-density value in the volume, incorporating adjustable ISO values and physically-based lighting to enhance the realism of the rendered image.</li>
        <li>Maximum Intensity Projection (MIP): Offers an alternative rendering mode where the highest density value along the view ray is visualized, creating a clear and distinct representation of the most intense structures within the volume.</li>
        <li>Interactive Visualization: Users can easily switch between the two rendering techniques, allowing them to explore and compare different visualizations of the same data.</li>
        <li>3D Texture Rendering: Capable of rendering complex 3D textures directly in the browser, providing a smooth and responsive user experience.</li>
      </UL>

      <H2>
        Collaboration and Tool Integration:
      </H2>

      <UL>
        <li>Charts with D3.js: A friend collaborated on the project by integrating D3.js to add charts, providing additional data visualization features that complement the volume rendering.</li>
        <li>WebGL and Three.js: Leveraged WebGL for low-level graphics rendering and Three.js for higher-level abstractions, ensuring efficient and optimized rendering in the browser.</li>
      </UL>

      <P>This project demonstrates my ability to implement complex graphics techniques in a web environment, combining advanced rendering algorithms with user-friendly interactivity. It also showcases my collaboration skills, working alongside others to integrate additional features that enhance the overall functionality and utility of the tool.</P>
    </div>,
    imageUrl: ['../images/raycast1.png','../images/raycast2.png','../images/raycast3.png'],
    githubUrl: 'https://github.com/Masdaofdisasda/Vis1_Direct_Volume_Rendering_2022W',
  },
  {
    id: 11,
    title: 'Wolum Music',
    description: <div>

      <P>Wolum is my personal music project and artist persona, through which I explore and produce various genres of music, with a strong focus on American electronic dance music, trap, bass house, and hip-hop. Under the Wolum name, I have produced and released original tracks, and occasionally DJ, sharing my passion for high-energy beats and rhythmic intensity with audiences.</P>

      <H2>
        Music Production:
      </H2>

      <UL>

        <li>Ableton Live: I primarily use Ableton Live for music production, leveraging its powerful tools and flexibility to create complex, layered tracks that reflect my personal style and influences.</li>
        <li>Genre Focus: My music production spans several genres, including electronic dance music (EDM), trap, bass house, and hip-hop, with each track designed to evoke energy and movement, perfect for both listening and live performances.</li>

      </UL>
      <H2>
        DJing:
</H2>
      <UL>

      </UL>
      <li>Rekordbox: For DJing, I use Rekordbox, a leading platform for live mixing and performance. This allows me to bring my tracks to life in a live setting, blending my original productions with other tracks to create unique, immersive experiences.</li>
        <li>Live Performance: Though I currently DJ less frequently, I still enjoy the art of live mixing, where I can connect with audiences and share my love for dynamic and impactful music.</li>

      <P>Wolum represents my creative outlet beyond software engineering, where I channel my technical skills into the art of music production and live performance. This project not only showcases my ability to create and manipulate sound but also reflects my deep passion for music and my commitment to continuously evolving as an artist.</P>
    </div>,
    imageUrl: ['../images/headphones.jpg'],
  },
];
