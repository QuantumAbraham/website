import type { CollectionEntry } from 'astro:content';

export function withBase(path: string) {
  if (!path || path === '/') {
    return import.meta.env.BASE_URL;
  }

  if (/^(https?:|mailto:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\//, '')}`;
}

export function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function estimateReadingTime(content: string) {
  const cleaned = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/[#>*_~-]/g, ' ');
  const words = cleaned.trim().split(/\s+/).filter(Boolean).length;

  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort(
    (left, right) => right.data.publishDate.getTime() - left.data.publishDate.getTime()
  );
}
