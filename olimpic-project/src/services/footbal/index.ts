import Axios from "../base";

export default {
    getAllPlayersFromATeam: (teamId: number, season: number): Promise<any> => {
        return Axios.get(`/players?team=${teamId}&season=${season}`)
    },
    getPlayerInfo: (playerId: number, season: number): Promise<any> => {
        return Axios.get(`/players?id=${playerId}&season=${season}`)
    }
}