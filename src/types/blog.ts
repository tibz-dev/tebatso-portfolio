export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string; 
  topic: string;
  readingTime?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
};