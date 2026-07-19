#!/usr/bin/env node
// Scaffold a new blog post: npm run new-post -- "My Post Title"
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
	console.error('Usage: npm run new-post -- "My Post Title"');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-+|-+$/g, '');

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src', 'content', 'blog');
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
	console.error(`A post already exists at ${file}`);
	process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
description: ''
pubDate: ${today}
---

`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, frontmatter);
console.log(`Created ${file}`);
