import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { getEvents } from '/src/scripts/services/events.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'


// Função de click
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    getUserData(userName)
})

// Clique com a tecla Enter
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    console.log(user);
    screen.renderUse(user)

} 





