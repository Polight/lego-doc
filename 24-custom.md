---
layout: page
title: Custom directive
permalink: /usage-web-components/custom-directive/
nav_order: 4
parent: Usage
---

#### `:` Custom Directive

A custom directive will interpret in JS whatever you pass as value.

```html
<template>
  <a :href="this.getUrl('144')">Visit Profile</a>
</template>
<script>
  export default class extends _ {
    getUrl(id) { return `/user/${id}` }
  }
</script>
```

outputs

```
<a href="/user/144">Visit Profile</a>
```

[Boolean attributes](https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes)

Example: `<input type=checkbox :checked="state.agreed" :required="state.mustAgree">`.
With the following state: `this.state = { agreed: false, mustAgree: true }` would render
`<input type=checkbox required="required">`.

#### `@` Directive for binding Events

```html
<template>
  <button @click="sayHi" name="the button">click</button>

<script>
  export default class extends _ {
    sayHi(event) {
      alert(`${event.target.getAttribute('name')} says hi! 👋🏼`)
    }
  }
</script>
```

#### Reactive Properties

The `state` is where the reactiveness takes place.

declare a `state` object in the `init()` function with default values:

```js
init() {
  this.state = {
    user: { firstname: 'John', lastname: 'Doe' },
    status: "Happy 😄"
  }
}
```

Displaying a _state_ value is as simple as writing `${state.theValue}` in your HTML.

When you need your component to react, call the `this.render()` method
with your updated state:

```
itemSelected(event) {
  this.render({ selected: "apple", isAdmin: true })
}
```

This will refresh your component where needed.

When `state` is just mutated, the `changed(changedProps)` is called.
This `changed()` method is called before (re-)rendering.
