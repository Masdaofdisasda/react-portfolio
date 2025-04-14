export interface Project {
  slug: string;
  title: string;
  markdown: string;
  imageUrls?: string[];
  youtubeUrl?: string;
  githubUrl?: string;
  deploymentUrl?: string;
}
