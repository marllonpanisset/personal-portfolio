export type BlogPost = {
  slug: string;

  title: string;

  excerpt: string;

  date: string;

  category: string;

  tags: string[];

  readingTime?: string;

  content: string;
};
