---
layout: page
title: Slots
permalink: /usage-web-components/slots/
nav_order: 22
parent: Usage
---

#### Slots

[Slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) are part of the
native web-component.
Because Lego builds native web-components, you can use the standard _slots_ as documented.

Example:

__index.html__
```html
<user-profile>
  <span>This user is in Paris</span>
<user-profile>
```

__bricks/user-profile.html__
```html
<template>
  <h1>User profile</h1>
  <p>important information: <slot></slot></p>
</template>
```

Will write `…<p>important information: <span>This user is in Paris</span></p>`

[See more advanced examples](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots).


### Reactive CSS `<style>`

CSS is much more fun when it's scoped.
Here it come with the web-components.

Here again, no trick, just the full power of web-components and scoping styles.
Well, you should know that the css is reactive too! 😲

Writing CSS is as easy as

```html
<template>
  <h1>Bonjour!</h1>
</template>

<script>
  export default class extends _ {
    init() {
      this.state = { fontScale: 1 }
    }
  }
</script>

<style>
  :host {
    font-size: ${state.fontScale}rem;
  }
  h1 {
    padding: 1rem;
    text-align: center;
  }
</style>
```

#### Host

[`:host` is a native selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:host())
for web-components.
It allows to select the current component itself.

#### Variables

You can use variables in your CSS just like in your templates.

Example:
```html
<template>
  <h1>Bonjour<h1>
</template>
<script>
  export default class extends _ {
    init() {
      this.state = { color: '#357' }
    }
  }
</script>
<style>
  h1 {
    color: ${ state.color };
  }
</style>
```

will apply the `#357` color onto `h1`.


## `<script>` tag

The script tag is has a special behavior.
You will create a class extending the component, that's how you build your
full component with advanced script.

To do so extend the `_`, that's a naming convention:

```js
export default class extends _ {
  …
}
```
