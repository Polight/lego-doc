---
layout: page
title: Build Native Web-Components
label: Getting Started
permalink: /getting-started/
nav_order: 10
---

Lego requires [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) and [node](https://nodejs.org/).

Lego compiles HTML (_/bricks_) to JS files (_/dist_).

You will need these 2 folders.
Create them with `mkdir bricks dist`.

> Any HTML you write from the next chapters should sit in the _bricks_ folder.

## Quick start

### Installation

If you don't have a _package.json_ file yet, initialize first with `npm init` (or `yarn init`).

Install the compiler with `npm i @polight/lego` (or `yarn add @polight/lego`).

We will end with the following file tree:

```
index.html
|- bricks/
  |- hello-world.html  → The HTML you typed
```


### Hello World

Create a file called __bricks/hello-world.html__:

```html
<template>
  <p>Hello ${state.name}</p>
</template>

<script>
  export default class extends Lego {
    init() { this.state = { name: "World!" } }
  }
</script>
```

<<<<<<< HEAD
Compile with `npx lego` (or `yarn lego`)

And use the output file in an __index.html__ file in your root folder.
=======
Compile with `npx @polight/lego`

And use you component in your __index.html__:
>>>>>>> 23751da9fbd0b2cfe6b38eaa4a3852ebdc25d01c

```html
<script src="./dist/index.js" type="module"></script>
<hello-world></hello-world>
```

<<<<<<< HEAD
Now serve this with a local web server (ie: `python3 -m http.server`) and display your index.html (ie: http://localhost:8000).


## Let's get a step back

What did just happen?

Here's what you just did with this simple code:

1. you created a native HTML element called `hello-world` by creating _bricks/hello-world.html_
2. you made it react with a `name` state property
3. you imported all components from `./dist/index.js` (well, only 1 for now)
4. you used the HTML element `<hello-world></hello-world>`

No magic 🪄 here, just a couple of [default configuration that you can override](/configuring-components/).
=======
Run a local web server, eg: `npx sirv-cli` and open http://localhost:5000.

You website is ready to be published on any _static_ host, even Github Pages.
>>>>>>> 23751da9fbd0b2cfe6b38eaa4a3852ebdc25d01c
