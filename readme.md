# Animated gradient

## Install

[npm][]:

```sh
npm install --save-dev anim-gradient
```

[yarn][]:

```sh
yarn add anim-gradient --dev
```

[pnpm][]:

```sh
pnpm add -D anim-gradient
```

## How to use

- set this on your `index.html` file
```html
<canvas id="canvas" width="800" height="600"></canvas>
```

- set this on your `main.css` file
```css
#canvas {
    --gradient-color-1: #6ec3f4;
    --gradient-color-2: #3a3aff;
    --gradient-color-3: #ff61ab;
    --gradient-color-4: #E63946;
}
```

- import Gradient class, create new instance and call `initGradient` function
```js
import { Gradient } from 'anim-gradient';

const gradient = new Gradient()
gradient.initGradient('#canvas');
```

### Solidjs setup

### Svelte setup

### Astro setup

### Vue setup

### React setup

### Next.js setup

### Nuxt 2/3 setup

- set this on `nuxt.config.js`
```js
  build: {
    transpile: ['anim-gradient']
  }
```

## Inspiration

Based on the tilted gradient effect on Stripe's website. Functionality found in [`Kevin Hufnagl`][kevin's-web] website.

## Related

*   [`Kevin Hufnagl`][kevin's-web]
    — Learn how to create the tilted gradient effect on Stripe's new website.
*   [`Stripe`][stripe]
    — Stripe's website

## License

[MIT][license] © [Federico Biondi][author]

<!-- Definitions -->

[kevin's-web]: https://kevinhufnagl.com/how-to-stripe-website-gradient-effect

[stripe]: https://stripe.com

[npm]: https://docs.npmjs.com/cli/install

[yarn]: https://yarnpkg.com/cli/install

[license]: license

[author]: https://github.com/fdbiondi
