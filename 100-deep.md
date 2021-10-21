---
layout: page
title: Getting deep
permalink: /advanced-webcomponents/
nav_order: 100
---


### Native web-components

Because Lego is actual native web-components, all its native possibilities (like [slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots)),
[:host](https://developer.mozilla.org/en-US/docs/Web/CSS/:host)
and whatever exists or will exist are on board.


### Browser compatibility

Lego is based on native _customElements_.
[Support for customElement is spreading](https://caniuse.com/#feat=custom-elementsv1) and
shall increase in time.

When building a web-app you may have control of the browsers.
If you're building a more general website you may need to increase the overall browser
compatibility and install the [custom-element polyfill](https://github.com/webcomponents/custom-elements).


### Dependencies

It is still fully compatible with native _custom elements_. No magic behind the scene,
no complexity, just a couple of useful methods to write native web-components easier.

Using a compiled component has no dependency, nothing extra injected in the browser.
Compiling depends on [jsdom](https://www.npmjs.com/package/jsdom).

<div style="margin: 2rem auto; height: 2rem; text-align: center;">
  <a href="https://github.com/polight/lego">
    <img alt="Github logo" src="http://vectorlogofree.com/wp-content/uploads/2014/04/25657-github-sign-icon-vector-icon-vector-eps.png">
  </a>
</div>
