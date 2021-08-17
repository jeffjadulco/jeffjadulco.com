import axios from 'axios'

import { SteamGame, SteamRecentlyPlayedGames } from '@/types/rich-presence'

const API_KEY = process.env.STEAM_WEB_API_KEY
const STEAM_ID = process.env.STEAM_ID
const IGNORED_GAMES = process.env.STEAM_IGNORE_GAMES
  ? process.env.STEAM_IGNORE_GAMES.split(',')
  : []
const STEAM_CDN_URL = 'https://steamcdn-a.akamaihd.net/steam/apps'
const API_URL =
  'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/'

const getImageUrl = appId => `${STEAM_CDN_URL}/${appId}/library_600x900.jpg`

const getPlaytimeHours = playtime => (playtime / 60).toFixed(1)

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
      games: response.games
        .filter(game => game.name && game.appid)
        .filter(game => !IGNORED_GAMES.includes(game.appid.toString()))
        .map(
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
