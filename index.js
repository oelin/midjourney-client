import replicate from 'node-replicate'

const model = 'prompthero/openjourney:9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb'

export default async (prompt, parameters) => 
	await replicate.run(model, { prompt, ...parameters })
