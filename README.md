# @urbit/foundation-design-system
A system of design variables, Markdoc and React components intended for Urbit Foundation projects.

## Usage

We build all our sites with [Next.js](https://nextjs.org) and [Tailwind](https://tailwindcss.com) and this package is designed for those scenarios. Please be advised you will need a Next.js installation to make use of these components.

```bash
npm i @urbit/foundation-design-system
```

Ensure all peer dependencies are present as well:

```bash
npm i @tailwindcss/aspect-ratio tailwindcss-theme-swapper autoprefixer postcss prismjs tailwindcss next
```

### Tailwind config and other CSS styles

Our design variables are available by using the Tailwind config in your own installation as a preset, ensuring you style our components as well in the `content` section:

```js
presets: [require("@urbit/foundation-design-system/tailwind")],
content: [
  "./node_modules/@urbit/foundation-design-system/**/*.js",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
```

Likewise you can find our CSS styles by importing them at the top of your site build (i.e. `_app.js`):

```js
import "@urbit/foundation-design-system/styles/globals.css";
import "@urbit/foundation-design-system/styles/markdown.css";
import "@urbit/foundation-design-system/styles/prism.css";
```

### Markdown parser, renderer, and components

We use [Markdoc](https://markdoc.io) to allow for embedding dynamic React components inside Markdown files. For a sample of our components and how to use them in your own Markdown, see [here](MARKDOWN.md).

Our Markdown parser is a custom patched installation of Markdoc for additional features (basic footnote support, superscript, next/link injection, inline HTML injection).

Import the component:

```js
import Markdown from '@urbit/foundation-design-system'; 
```

Then, on the server-side parse your content by passing it an object in the following shape:

```js
{ post: { content: "## A markdown document"}}
```

If you've extracted the `content` directly with `gray-matter` reconstruct the object:

```js
const markdown = JSON.stringify(Markdown.parse({ post: { content } }));
```

Otherwise this works fine if you're just using `getPostBySlug` a la urbit.org:

```js
const markdown = JSON.stringify(Markdown.parse(post));
```

And on front-end pass it to the renderer:

```jsx
<div className="markdown">
    <Markdown.render content={JSON.parse(markdown)} />
</div>
```

*Why are we doing JSON stringification and parsing?* you ask. The wind answers, and you feel the breeze on the back of your neck.
