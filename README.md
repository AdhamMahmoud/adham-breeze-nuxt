# Laravel Breeze - Nuxt Edition

This repository is an implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Nuxt](https://nuxt.com/) with [Nuxt UI](https://ui.nuxt.com/). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum) and [nuxt-auth-sanctum](https://nuxt.com/modules/nuxt-auth-sanctum) module, allowing you to quickly begin pairing your beautiful [Nuxt UI](https://ui.nuxt.com/) frontend with a powerful Laravel backend. As a bonus, this project also includes a [nuxt-laravel-echo](https://github.com/manchenkoff/nuxt-laravel-echo) integration to work with Laravel Broadcasting.

## Installation

### Nuxt Breeze

To start working with Nuxt frontend, you need to clone this repository and install dependencies:

```bash
git clone https://github.com/AdhamMahmoud/adham-breeze-nuxt.git
```

For dependencies you should use [pnpm](https://pnpm.io/):

```bash
pnpm install
```

Configure your `.env` file:

```bash
NUXT_PUBLIC_SANCTUM_BASE_URL=http://localhost:8000 # or your Laravel API URL
```

Once configuration is done and you have your Laravel API running, you can start the Nuxt frontend:

```bash
pnpm dev
```

## Development

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more about technologies used in this template.

### Code Style and Linting

Run ESLint to check for issues in the code:

```bash
pnpm lint
```

Or automatically fix issues:

```bash
pnpm lint:fix
```

### Start Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
