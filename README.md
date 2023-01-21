# Midjourney Client

A minimal client for the hosted inference API at [https://replicate.com/prompthero/openjourney](https://replicate.com/prompthero/openjourney).

<img src='./images/elf.png' width=50%>
<img src='./images/elf2.png' width=50%>


> Openjourney is an open source Stable Diffusion fine tuned model on Midjourney images, by [PromptHero](https://prompthero.com/). Predictions run on Nvidia A100 GPU hardware.



## Installation

```js
npm i midjourney-client
```


## API

The API is super simple; just pass in your prompt and wait for the API to return the generated image URL.

```js
> const midjourney = require('midjourney-client')
```

```js
> const image = await midjourney('a painting of a ginger cat.')
```


