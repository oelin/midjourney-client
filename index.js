import {fetch, CookieJar} from 'node-fetch-cookies'
import * as constants from './constants.js'


function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
}


export default async function midjourney(prompt, inputs = {}) {

        const sessionCookieJar = new CookieJar()

        // Grab a CSRF token...

        await fetch(sessionCookieJar, constants.COOKIE_FETCH_URL)

        // Call the model API...

        const response1 = await fetch(sessionCookieJar, constants.PREDICTIONS_URL, {
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

        const uuid = (await response1.json()).uuid

        for (let timeoutCounter = 0; timeoutCounter < constants.TIMEOUT; timeoutCounter ++) {
                
                let response2 = await fetch(sessionCookieJar, `${constants.PREDICTIONS_URL}/${uuid}`, {
                        headers: {
                                'accept': '*/*',
                        },
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                        body: null,
                })

                let output = (await response2.json())?.prediction?.output
                if (output && output.length) { return output }
                
                await sleep(1000)
        }

        return []
}
