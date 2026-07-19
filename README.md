# jbradley.dev

My personal blog — a static site built with [Astro](https://astro.build), written in markdown,
and hosted on [Cloudflare](https://pages.cloudflare.com/). Every push to `main` automatically
rebuilds and deploys the site.

## Writing a post

Scaffold a new post:

```sh
npm run new-post -- "My Post Title"
```

This creates `src/content/blog/my-post-title.md` with the frontmatter pre-filled. Fill in the
`description`, write the post body in markdown below the frontmatter, and you're done.

Frontmatter fields:

| Field         | Required | Notes                                    |
| ------------- | -------- | ---------------------------------------- |
| `title`       | yes      | Post title                               |
| `description` | yes      | Short summary, used for SEO/social cards |
| `pubDate`     | yes      | Publish date (`YYYY-MM-DD`)              |
| `updatedDate` | no       | Shows a "last updated" note              |
| `heroImage`   | no       | Path to an image in `src/assets/`        |

Code blocks are syntax-highlighted automatically (Shiki, GitHub light/dark themes). The site
follows the reader's system light/dark preference.

## Previewing locally

```sh
npm install     # first time only
npm run dev     # http://localhost:4321
```

## Publishing

```sh
git add -A
git commit -m "Add post: my post title"
git push
```

Cloudflare picks up the push and deploys automatically (build command `npm run build`, output
directory `dist`).

## Project layout

- `src/content/blog/` — blog posts (markdown)
- `src/pages/` — site pages (home, about, blog index)
- `src/components/`, `src/layouts/` — shared UI
- `src/styles/global.css` — site styles, light/dark theme variables
- `src/consts.ts` — site title and description
- `scripts/new-post.mjs` — post scaffolding script

## Copyright

© John Bradley. All rights reserved.
The bundled Atkinson Hyperlegible font is separately licensed under the
[SIL Open Font License](src/assets/fonts/OFL.txt).
