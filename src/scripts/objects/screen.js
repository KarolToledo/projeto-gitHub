const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUse(user) {
        this.userProfile.innerHTML = `<div class="info"> 
                        <img src="${user.avatarUrl}" alt="Foto do
                         perfil  usuário"/>
                        <div class="data">
                            <h1>${user.name ?? '😥Não possui nome cadastrado'}</h1>
                            <P>Bio: ${user.bio ?? '😥Não possui bio cadastrada'}</P>
                            <p>Login: ${user.userName ?? '😥Não possui login'}</p>
                            <div class="seguidores">
                                <P>Following: 👁️ ${user.seguindo}</P>  
                                <P>Followers: 💖 ${user.seguidores}</P>  
                            </div>
                        </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo =>
            repositoriesItens += `
            <li>
                <div class="repositories data"> 
                    <a href="${repo.html_url}" target="_blank">${repo.name}
                    <ul class="repo-dados">
                        <li>📋${repo.forks}</li>
                        <li>⭐${repo.stargazers_count
                        }</li>
                        <li>👀${repo.watchers}</li>
                        <li>🤖${repo.language}</li>
                    </ul>
                    </a>  
                </div>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`


        }

        let eventItens = ""
        user.events.forEach(event => {
            if (event.type === "PushEvent") {
                eventItens += ` <li>
                                <p> <strong>${event.repo?.name}</strong> - ${event.payload?.commits[0].message}</p>
                            </li>`
            } else if (event.type === "CreateEvent") {
                eventItens += ` <li>
                                    <p><strong>${event.repo.name}</strong> - ${event.payload.ref_type}</p>
                                </li>`
            } else if (event.type != "PushEvent" && event.type != "CreateEvent") {
                eventItens +=
                    `<h4>Usuário não possui repositórios dos tipos <strong>'PushEvent'</strong> ou <strong>'createEvent'</strong>.</h4>`
            }
        })

        if (user.events && user.events.length > 0) {
            this.userProfile.innerHTML += `
            <div class="events"> 
                <h2>Eventos</h2>
                <ul>${eventItens}</ul>
            </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    },

    renderEmpty() {
        this.userProfile.innerHTML = `<h3>Preencha o campo com o nome de usuário do GitHub</h3>`
    }
}

export { screen }