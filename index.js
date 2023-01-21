import {fetch, CookieJar} from 'node-fetch-cookies'
import * as constants from './constants.js'


function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
}


export default async function midjourney(prompt, inputs = {}) {

        const sessionCookieJar = new CookieJar()

        // Grab a CSRF token...

        await fetch(sessionCookieJar, `https://replicate.com/${constants.MODEL_NAME}`)

        // Call the model API...

        const uuid = await fetch(sessionCookieJar, `https://replicate.com/api/models/${constants.MODEL_NAME}/versions/${constants.MODEL_VERSION}/predictions`, {
                headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'x-csrftoken': sessionCookieJar.cookies.get('csrftoken'),
                },
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify({
                        inputs: {
                                guidance_scale: '7',
                                width: 512,
                                height: 512,
                                num_inference_steps: 50,
                                num_outputs: 1,
                                seed: null,
                                prompt,
                                ...inputs,
                        },
                }),
        })

        // Wait for the image to be generated...

        const uuid = (await response0.json()).uuid

        for (let timeoutCounter = 0; timeoutCounter < constants.TIMEOUT; timeoutCounter ++) {
                
                let response1 = await fetch(sessionCookieJar, `https://replicate.com/api/models/${constants.MODEL_NAME}/versions/${constants.MODEL_VERSION}/predictions/${uuid}`, {
                        headers: {
                                'accept': '*/*',
                        },
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                        body: null,
                })

                let output = (await response1.json())?.prediction?.output
                if (output.length) { return output }
                
                await sleep(1000)
        }

        return []
}
