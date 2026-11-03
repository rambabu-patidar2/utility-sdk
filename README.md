# @rambabu-patidar2/utility-sdk

Shared utility functions, published to the GitHub npm registry (GitHub Packages).

## Available functions

- `slugify(input: string): string` - `"Héllo, World!"` -> `"hello-world"`
- `chunk<T>(items: readonly T[], size: number): T[][]` - splits an array into groups of `size`

## Develop

```bash
npm install
npm run build      # compiles src/ to dist/
npm test           # vitest, tests live in test/
npm run lint
```

## Publish

Publishing runs in [.github/workflows/publish.yml](.github/workflows/publish.yml) when a version tag is pushed. The tag must match `package.json` `version`:

```bash
# bump "version" in package.json first, then:
git tag v0.1.0
git push origin v0.1.0
```

The workflow authenticates with the built-in `GITHUB_TOKEN` (`packages: write`), so no extra secret is needed.

## Consume from another service

1. Add the scope mapping to the consumer's `.npmrc` (see `weasly-service/.npmrc`):

   ```ini
   @rambabu-patidar2:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   ```

2. Export a token with the `read:packages` scope (a classic PAT, or a fine-grained token with Packages read access):

   ```powershell
   $env:NODE_AUTH_TOKEN = '<your-token>'
   ```

3. Install and import:

   ```bash
   npm install @rambabu-patidar2/utility-sdk
   ```

   ```ts
   import { slugify, chunk } from '@rambabu-patidar2/utility-sdk';
   ```

GitHub Packages requires authentication even to install public packages, so CI in consumer repos needs `NODE_AUTH_TOKEN` available too.
