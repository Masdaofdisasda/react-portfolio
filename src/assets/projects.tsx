
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
    title: 'Project 1',
    description: 'Description of project 1...',
    imageUrl: '/path/to/image1.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/example',
    githubUrl: 'https://github.com/user/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2...',
    imageUrl: '/path/to/image2.jpg',
    youtubeUrl: '',
    githubUrl: 'https://github.com/user/project2',
  },
  // Add more projects as needed
];
