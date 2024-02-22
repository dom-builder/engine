# Engine 

## Introduction

*Dom Builder* is an open-source project designed for processing JSON files and creating dynamic pages. This project leverages the power of NextJS and React to offer a seamless development experience for building interactive and dynamic web applications.

### Disclaimer

We are testing this package yet, and we are not using in production, but you can check in: 

https://engine-two.vercel.app

## Installation

```bash
yarn add @dom-builder/engine
```

## Usage

```tsx
import { PageBuilder } from '@dom-builder/builder';

export function DynamicPage() {
    return (
        <PageBuilder builderSchema={schema} page={slug} />
    );
}
```

You can also check the `apps/example` folder.


# Schema

The page and components schema is very simple and recursive. You can check the Contract on `packages/builder/src/lib/types.ts`, and the demo example on `apps/example/src/utils/base_schema.json`.