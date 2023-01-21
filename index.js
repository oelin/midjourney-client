import {fetch, CookieJar} from 'node-fetch-cookies'
import * as constants from './constants.js'


function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function midjourney(prompt, inputs={}) {


        const cookieJar = new CookieJar()


        // Grab a CSRF token...

        await fetch(cookieJar, `https://replicate.com/${constants.MODEL_NAME}`)


        // Call the model API...

        const response = await fetch(cookieJar, `https://replicate.com/api/models/${constants.MODEL_NAME}/versions/${constants.MODEL_VERSION}/predictions`, {

                headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'x-csrftoken': cookieJar.cookies.get('csrftoken'),
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

        const uuid = (await response.json()).uuid


        for (let _ = 0; _ < constants.TIMEOUT; _ ++) {
                let response1 = await fetch(cookieJar, `https://replicate.com/api/models/${constants.MODEL_NAME}/versions/${constants.MODEL_VERSION}/predictions/${uuid}`, {
                        headers: {
                                'accept': '*/*',
                        },
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                        body: null,
                })

                let json = await response1.json()
                let output = json?.prediction?.output

                if (output && output.length) {
                        return output
                }

                await sleep(1000)
        }


        return []
}
