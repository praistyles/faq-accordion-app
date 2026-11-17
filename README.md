# FAQ Accordion

A responsive FAQ accordion built with React and Vite.

[View the live site](https://praistyles.github.io/faq-accordion-app/)

## Features

- Expand and collapse answers with a click or keyboard.
- Keep one answer open at a time.
- Adapt the layout for mobile and desktop screens.

## How I built it

1. Set up the project with React and Vite.
2. Added the four FAQ questions and answers to the FAQ component.
3. Used React state to open one answer at a time, with the first answer open by default.
4. Used buttons and ARIA attributes so the questions can be used with a keyboard and assistive technology.
5. Styled the card, typography, colors, and background patterns to match the challenge design on desktop and mobile.
6. Ran the linter and production build to check the app.
7. Added a GitHub Actions workflow to build the app and publish it with GitHub Pages.

## Run locally

Install the dependencies and start the development server from this folder:

```sh
npm install
npm run dev
```

To check the code and create a production build:

```sh
npm run lint
npm run build
```

## Live site

[View the FAQ Accordion](https://praistyles.github.io/faq-accordion-app/)
