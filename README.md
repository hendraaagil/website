# hendraaagil.dev

[![Open Graph Image](src/app/opengraph-image.png)](https://hendraaagil.dev)

## Stack

- [Next.js 14 (App router)](https://nextjs.org/) - Full-stack React framework for the web.
- [Velite](https://velite.js.org/) - Tool for building type-safe data layer, turns Markdown / MDX, YAML, JSON, or other files into app's data layer with Zod schema.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS.

## Local development setup

Node.js `>=22.x` is required and setup with [pnpm](https://pnpm.io/) is recommended.

```sh
# duplicate & fill environment file
cp .env.sample .env.local

# install dependencies
pnpm i

# serve with hot reload at http://localhost:3000
pnpm dev

# build for production
pnpm build

# serve for production
pnpm start
```

## License

This source code is under the [GPL-3.0 License](LICENSE).
