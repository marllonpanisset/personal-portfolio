import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import type { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

function parsePostFile(filename: string): BlogPost {
  const slug = filename.replace(".mdx", "");

  const filePath = path.join(postsDirectory, filename);

  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  return {
    slug,

    title: data.title ?? "Sem título",

    excerpt: data.excerpt ?? "",

    date: data.date ?? new Date().toISOString(),

    category: data.category ?? "Tecnologia",

    tags: Array.isArray(data.tags) ? data.tags : [],

    readingTime: readingTime(content).text,

    content,
  };
}

export function getPosts(): BlogPost[] {
  return getPostFiles()
    .map(parsePostFile)

    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.mdx`;

  const filePath = path.join(postsDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parsePostFile(filename);
}
