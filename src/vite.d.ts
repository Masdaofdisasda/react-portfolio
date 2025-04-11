declare module '*.md' {
  const attributes: Record<string, unknown>;

  const markdown: string;

  export { attributes, markdown };
}