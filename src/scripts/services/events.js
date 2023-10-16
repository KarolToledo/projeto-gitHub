import { urlPrincipal, repositoriesQuantity } from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${urlPrincipal}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
    
}

export { getEvents }