import axios from 'axios'

import { SteamGame, SteamRecentlyPlayedGames } from '@/types/rich-presence'

const API_KEY = process.env.STEAM_WEB_API_KEY
const STEAM_ID = process.env.STEAM_ID
const STEAM_CDN_URL = 'https://steamcdn-a.akamaihd.net/steam/apps'
const API_URL =
  'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/'

const getImageUrl = appId => `${STEAM_CDN_URL}/${appId}/library_600x900.jpg`

const getPlaytimeHours = playtime => Math.floor(playtime / 60)

export async function getRecentGames() {
  try {
    const {
      data: { response },
    } = await axios({
      method: 'GET',
      url: API_URL,
      params: {
        key: API_KEY,
        input_json: {
          steamid: STEAM_ID,
          count: 0,
        },
      },
    })

    return {
      type: 'steam',
      verb: 'Recently Played Game',
      games: response.games.map(
        game =>
          ({
            name: game.name,
            image: getImageUrl(game.appid),
            playtime: {
              two_weeks: `${getPlaytimeHours(
                game.playtime_2weeks
              )} hrs last two weeks`,
              forever: `${getPlaytimeHours(
                game.playtime_forever
              )} hrs last two weeks`,
            },
            url: `https://store.steampowered.com/app/${game.appid}`,
          } as SteamGame)
      ),
    } as SteamRecentlyPlayedGames
  } catch (error) {
    return []
  }
}
