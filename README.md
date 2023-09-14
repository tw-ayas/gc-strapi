
GraphCommerce is a framework for building headless ecommerce storefronts in
React and Next.js. It provides a best-in-class example, including components and
utilities, to deliver a high-performance, high-quality ecommerce Progressive Web
App (PWA).

This repo has changes included to integrate Strapi as the headless CMS instead of Hygraph. Strapi can be self-hosted for free and offers a GraphQl Api as well.

---

# Getting started with GraphCommerce

### Requirements

- Install and use node 16/18: `nvm install 16` or `nvm use 16`
- Install yarn: `corepack enable`

## Step 1: Create a GraphCommerce app

```bash
git clone https://github.com/tw-ayas/gc-strapi.git
# Clone repository
```

## Step 2: Configure API keys

Additional Strapi endpoint and Strapi Authentication need to be configued in the graphcommerce.config.js file

## Step 3: Start the app

```bash
yarn
# Install the dependencies
```

```bash
yarn codegen
# Converts all .graphql files to typescript files
```

```bash
yarn dev
# Run the app
```

---

🎉 Explore your GraphCommerce app running at http://localhost:3000

(Explore the GraphQL Playground running at http://localhost:3000/api/graphql)

> No success? Consult the
> Refer to official GraphCommerce troubleshoot guide
> [troubleshooting guide](https://github.com/graphcommerce-org/graphcommerce/blob/canary/framework/troubleshooting.md)

