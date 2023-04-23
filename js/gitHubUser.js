export class gitHubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint) //promessa, vai atrá atrás da URL e depois converte os dados para JSon
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }))
    }
}