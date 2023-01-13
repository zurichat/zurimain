# ZURIMAIN

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/core`: a [single-spa microfrontend](https://single-spa.js.org/docs/microfrontends-concept) this houses most of zurimain's ui
- `packages/root-config`: a [single-spa rootconfig](https://single-spa.js.org/docs/configuration) this is the zurimain wrapper and is what binds all packages and plugins
- `packages/sidebar`: a react application that houses the sidebar and navigation controls
- `packages/utilities`: a library housing essential helper functions used by all plugins
- `packages/ui`: a stub React component library shared by both `core` application and all plugins
- `packages/eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `packages/tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Getting Started.

Make sure you have nodejs installed by running the following command:

```bash
node -v
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

After installing nodejs install [yarn](https://www.npmjs.com/package/yarn)
if you have it then install the project's dependencies:

```bash
yarn install
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

To remove dist folder

```bash
yarn clean
```

To remove dist folder and all node_modules

```bash
yarn clean-fresh
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

## Contributing

For detailed information on how to go about contributing to this project. Check out the

- [Contribution Guide](docs/CONTRIBUTING.md)
- [Styling Guide](docs/STYLING.md)

**Before send PR or making a merge make sure you code is properly formatted.** You can easily do that by running

```bash
yarn lint # to lint all files # in project directory
yarn lint:js # to lint only js,jsx files # in project directory

yarn prettify # to prettify files # in project directory
```

you can also lint for all files in the repo by running that command in the root folder.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
