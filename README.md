# Midjourney Client

A minimal client for Midjourney's hosted inference API on Replicate. This package allows you to easily access Midjourney/Openjourney from NodeJS.

> Openjourney is an open source Stable Diffusion fine tuned model on Midjourney images, by [PromptHero](https://prompthero.com/). Predictions run on Nvidia A100 GPU hardware.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/elf.png'>


## Installation

```js
npm i midjourney-client
```


## API

The API is super simple; just enter your prompt and `await` for one or more image URLs. One image is returned by default.

```js
await midjourney('a painting of a ginger cat.')
```

Pass in additional parameters as a second argument.

```js
await midjourney('a painting of a ginger cat.', { width: 1024 })
```

A complete list of supported parameters can be found [here](https://replicate.com/prompthero/openjourney/api#inputs).


## Examples

> portrait of female elf, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/elf2.png'>

> whimsical fantasy elegant rose floral botany maximalism with a wave of flowers garden flowing flowers floating in misty soft pink, aqua, soft apricot, smoke fractal, moody and big scale realistic flowers, octane render, by josephine wall art, isabelle menin, Jean, amy brown.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/flowers.png'>


## Future

- Improve API interfaces (i.e. return richer objects than just arrays of URLs).
- Merge/become part of Replicated/ReplicateJS. 
