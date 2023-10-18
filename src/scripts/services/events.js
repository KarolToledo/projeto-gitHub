import { urlPrincipal, Quantity } from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${urlPrincipal}/${userName}/events?per_page=${Quantity}`)
    return await response.json()
    
}

export { getEvents }