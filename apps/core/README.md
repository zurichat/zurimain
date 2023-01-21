# ZURIMAIN CORE

This is the core application of this project which contains the root frontend app.

If you're here for the first time and wish to contribute, please read the general [README](https://github.com/zurichat/zurimain/blob/main/README.md) before continuing.

## Introduction

to do...

## Contribution

The `core` app depends on the `ui` package which contains reusable components, as well as the `utilities` package which houses utitity resources such as functions and data. Please browse these packages before inventing new components or utilities.

Pages are structured in the `/src/pages` directory in a one-page-one-directory fashion, which means each page (external or protected) is a folder that contains all the needed components and style files, if any (using mantine's `createStyles` API) needed to render the page.

If some components or utility functions are only needed in a page and not elsewhere, please create them in the page directory (for easy access and organisation).

### Adding new pages

Adding a new page is simple

- Go to `/src/pages` and create a directory for the page. Please use a reasonable directory name such as the URL endpoint of the page, e.g., `www.zuri.chat/about` would have the directory name in-code as `/src/pages/about`.

- Each page directory can have sub-page directories according to the [nested] URL pattern of the page, e.g., `www.zuri.chat/about/teams` would have the a page directory like `/src/pages/about/team`

- after creating the page directory and an `index.tsx` file while contains the default export of the page, go to `src/router/routes.tsx` to add your page route to the Router.

```TypeScript

export function getExternalRoutes(): RouteObject[] {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/help", element: <HelpPage /> },
    // add new external routes here
  ];
}
```

> Each of these routes have already-made layouts, so feel free to ask if you're not sure where your new page belongs.

- So, that's pretty much all you have to do. How the page looks is up to you. But remember to follow the design and implementation guidelines as in the general [README](https://github.com/zurichat/zurimain/blob/main/README.md) before continuing.
