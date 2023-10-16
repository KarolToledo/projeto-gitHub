import { urlPrincipal } from '/src/scripts/variables.js'

async function getUser(userName) {
    const response = await fetch(`${urlPrincipal}/${userName}`)
    return await response.json()
}

export { getUser }