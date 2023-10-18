import { urlPrincipal, Quantity} from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${urlPrincipal}/${userName}/repos?per_page=${Quantity}`)
    return await response.json();
}

export { getRepositories }