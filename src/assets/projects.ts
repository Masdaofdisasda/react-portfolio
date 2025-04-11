export const projectModules = import.meta.glob('../content/projects/*.md', {
  eager: true,
}) as Record<
  string,
  {
    attributes: {
      id: number;
      title: string;
      description?: string;
      imageUrls?: string[];
      youtubeUrl?: string;
      githubUrl?: string;
      slug?: string;
    };
    markdown: string;
  }
>;

export const projects = Object.entries(projectModules).map(([filePath, mod]) => {
  const slug = filePath
    .split('/')
    .pop()
    ?.replace('.md', '') ?? ''

  return {
    ...mod.attributes,
    markdown: mod.markdown,
    slug,
  }
})
