
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  youtubeUrl?: string; // Optional because some projects might not have a video
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Greed',
    description: 'Ready for a treasure hunt with a twist? Introducing Greed - a 3D game where your goal is to collect gold and emerge victorious. But beware, the more gold you snatch, the slower you\'ll become! Developed by yours truly and a fellow adventurer, our game earned a prestigious spot in the TU Wien Computer Graphics',
    imageUrl: './images/greed1.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/example',
    githubUrl: 'https://github.com/user/project1',
  },
  {
    id: 2,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    id: 3,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    id: 4,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    id: 5,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    id: 6,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    id: 7,
    title: 'Neckbreak Velocity',
    description: 'In Neckbreak Velocity two players can race to the finish line. The twist? They don\'t control any vehicle, they control regular humans... who run very fast. On the way they have to dodge other runners otherwise they will fall spectacularly The game was crafted using the Unity Engine and supports keyboard & mouse and gamepads. The players can customize and name their characters then',
    imageUrl: './images/neckbreakVelocity1.png',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
];
