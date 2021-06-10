import axios from 'axios'
import querystring from 'querystring'

import {
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
  SpotifyTrack,
} from '@/types/rich-presence'

const API_URL = 'https://api.spotify.com/v1'
const TOKEN_URL = 'https://accounts.spotify.com/api/token'

const client_id = process.env.SPOTIFY_API_CLIENT_ID
const secret_id = process.env.SPOTIFY_API_CLIENT_SECRET
const auth_code = process.env.SPOTIFY_API_AUTH_CODE
const refresh_token = process.env.SPOTIFY_API_REFRESH_TOKEN

async function spotifyApi(path) {
  try {
    const { access_token } = await getAccessToken()
    const { data } = await axios({
      method: 'GET',
      url: `${API_URL}${path}`,
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    })
    return { data }
  } catch (error) {
    return { error }
  }
}

export async function getRefreshToken() {
  const auth_b64 = Buffer.from(`${client_id}:${secret_id}`).toString('base64')
  try {
    let { data } = await axios({
      method: 'POST',
      url: TOKEN_URL,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: `Basic ${auth_b64}`,
      },
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: auth_code,
        redirect_uri: 'https://jeffjadulco.com/spotify',
      }),
    })

    return data
  } catch (err) {
    console.error(err)
  }
}

export async function getAccessToken() {
  const auth_b64 = Buffer.from(`${client_id}:${secret_id}`).toString('base64')
  try {
    let { data } = await axios({
      method: 'POST',
      url: TOKEN_URL,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: `Basic ${auth_b64}`,
      },
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    })

    return data
  } catch (err) {
    console.error(err)
  }
}

export async function getCurrentlyPlaying() {
  const { data, error } = await spotifyApi('/me/player/currently-playing')
  if (error || !data.item) return null

  return {
    type: 'spotify_current',
    verb: 'Now Playing',
    isPlaying: data.is_playing,
    track: {
      url: data.item.external_urls.spotify,
      title: data.item.name,
      artists: data.item.artists.map(artist => artist.name).join(', '),
      album: data.item.album.name,
      image: data.item.album.images[0].url,
    },
  } as SpotifyCurrentTrack
}

export async function getRecentlyPlayed() {
  const { data, error } = await spotifyApi('/me/player/recently-played')
  if (error || !data.items) return null

  return {
    type: 'spotify_recent',
    verb: 'Recently Played',
    tracks: data.items.map(({ track }) => ({
      url: track.external_urls.spotify,
      title: track.name,
      artists: track.artists.map(artist => artist.name).join(', '),
      album: track.album.name,
      image: track.album.images[0].url,
    })),
  } as SpotifyRecentTracks
}

export async function getTopTracks() {
  const { data, error } = await spotifyApi('/me/top/tracks')
  return { data, error }
}
