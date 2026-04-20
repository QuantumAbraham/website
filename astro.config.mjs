import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY;
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? repository?.split('/')[0];
const repositoryName = repository?.split('/')[1];
const isUserSite = repositoryName?.endsWith('.github.io');
const derivedSite =
  repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io${isUserSite ? '' : `/${repositoryName}`}`
    : undefined;

const site = process.env.SITE_URL ?? derivedSite ?? 'https://example.com';
const base = process.env.BASE_PATH ?? (repositoryName && !isUserSite ? `/${repositoryName}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
