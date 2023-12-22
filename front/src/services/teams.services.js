const API_URL = 'https://picture-flow-back-production.up.railway.app/api/teams'

export async function getTeams () {
    const data = await fetch(API_URL)
    const teams = await data.json()

    return teams
}