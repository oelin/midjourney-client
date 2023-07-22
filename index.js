import replicate from 'node-replicate'

const model = 'stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4'

export default async (prompt, parameters) => 
	await replicate.run(model, { prompt, ...parameters })
