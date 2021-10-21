---
layout: page
title: Usage
permalink: /usage-web-components/
nav_order: 20
toc: true
has_children: true
---

1. TOC
{:toc}

## Usage of Lego web-components

A web-component can optionally have 3 parts: some HTML in a `<template>` tag, some JavaScript
in a `<script>` tag and some CSS in a `<style>` tag.

You can make a web-component for muliple reasons.

If you just want to re-use a piece of HTML, the `<template>`
tag is all you need.

If you want to polish it's look  💅, `<style>` is your friend.
Bonus: it's fully scoped with no leaking out of context.

When some user interaction or reactiveness is demanded, `<script>`
is going to be the guy.

### `<template>` tag

An HTML content is written within a `<template>` tag.
It's just basic HTML augmented with a little of superpowers 🦸.

Let's call these superpowers "directives".

You may easily detect them as they are prefixed with `:` or `@`.

Only 4 directives to know:

- `:if` to display a tag based on a condition
- `:for` to repeat a tag
- `:` to evaluate a string
- `@` to bind an event

> Note that `:if` and `:for` attributes, when used in the same tag should be used
> with an order in mind: `<a :if="user" :for="user in state.users">` won't work,
> but `<a :if="state.users.length" :for="user in state.users">` will first evaluate if the `users` array has items,
> or `<a :for="user in users" :if="user">` will check that each individual user has a value.
>
> `<a :if="state.isAdmin" :for="user in state.users">` won't loop at all if `isAdmin` is false.

#### `:if` Directive

Conditionally display a tag and its descendants.

Example: `<p :if="state.count < 5">Less than 5</p>` will be displayed if the condition is met.

#### `:for` Directive

Repeat a tag based on a property.

The syntax is as follow: `:for="item in state.items"`.
The _item_ value will be available trough `${item}` within the loop.

If you need an incremental index `i`, use `:for="item, i in state.items"`.

Example: `<li :for="attendee in state.attendees">${attendee}</li>` with a state as
`this.state = { attendees: ['John', 'Mary'] }` will display `<li>John</li><li>Mary</li>`

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


#### Component Attributes

Attributes declared on the components will be all be accessible through the `state`.
If the property is initialized in the `this.state`, the attribute will be reactive:

```html
<x-user status="thinking 🤔"><x-user>
```

`status` will therefore be reactive and the _thinking 🤔_ attribute value will overwrite the _Happy 😄_ default status.

⚠️ A property that is not declared in the `state` won't be reactive.

These properties can be accessed through `this.getAttribute()` from within the component.
After all, these components are just native! 🏡


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
