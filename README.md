# [jeffjadulco.com](https://jeffjadulco.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Twitter Follow](https://img.shields.io/twitter/follow/jeffjadulco?style=social)

My personal website running on [Next.js](https://nextjs.org/)

## Built using

- [Next.js + Typescript](https://nextjs.org/)
- [MDX using `mdx-bundler`](https://github.com/kentcdodds/mdx-bundler/)
- [Tailwind CSS](https://tailwindcss.com/)

## Development

```bash
git clone https://github.com/jeffjadulco/jeffjadulco.com.git
cd jeffjadulco.com
npm install
npm run dev
```

## Configuration

- MDX - located in `content/blog`
- Analytics - I'm using [GoatCounter](https://www.goatcounter.com/). If you want to remove or replace it, remove/replace the `goat-counter` script in`_document.tsx` and `useAnalytics`.

## Old version

I initially made this website using Gatsby, here's the tagged version for the last commit before migrating to Next.js: [v1.3](https://github.com/jeffjadulco/jeffjadulco.com/tree/v1.3)

## License

This project is open source and available under the [MIT License](LICENSE)
