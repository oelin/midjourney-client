# Midjourney Client

A Node.js client for Midjourney/Openjourney on Replicate. Powered by [`node-replicate`](https://npmjs.com/node-replicate).

> Openjourney is an open source Stable Diffusion fine tuned model on Midjourney images, by [PromptHero](https://prompthero.com/). Predictions run on Nvidia A100 GPU hardware.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/elf.png'>


## Installation

```js
npm i midjourney-client
```


## Usage

Just enter your prompt and wait for one or more image URLs to be returned. One image is returned by default.

```js
import midjourney from "midjourney-client"
```

```js
await midjourney("mdjrny-v4 style a painting of a ginger cat.")
```

You can also specify additional parameters as a second argument. A list of supported parameters can be foud [here](https://replicate.com/prompthero/openjourney/api#inputs).

```js
await midjourney('mdjrny-v4 style a painting of a ginger cat.', { width: 1024 })
```


## Examples

> mdjrny-v4 style portrait of female elf, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/elf2.png'>

> mdjrny-v4 style whimsical fantasy elegant rose floral botany maximalism with a wave of flowers garden flowing flowers floating in misty soft pink, aqua, soft apricot, smoke fractal, moody and big scale realistic flowers, octane render, by josephine wall art, isabelle menin, Jean, amy brown.

<img src='https://github.com/oelin/midjourney-client/blob/main/images/flowers.png'>
