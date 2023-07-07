export interface RichPresence {
  type: string
  verb:
    | 'Now Playing'
    | 'Recently Played'
    | 'Recently Played Game'
    | 'Recently Watched'
    | 'Now'
}

export type SpotifyTrack = {
  url: string
  title: string
  artists: string
  album: string
  image: string
}

export interface SpotifyCurrentTrack extends RichPresence {
  type: 'spotify_current'
  verb: 'Now Playing'
  isPlaying: boolean
  track: SpotifyTrack
}

export interface SpotifyRecentTracks extends RichPresence {
  type: 'spotify_recent'
  verb: 'Recently Played'
  tracks: SpotifyTrack[]
}

export type LetterboxdItem = {
  title: string
  year: number
  rating: string
  url: string
  image: string
}

export interface LetterboxdRecentMovies extends RichPresence {
  type: 'letterboxd'
  verb: 'Recently Watched'
  movies: LetterboxdItem[]
}

export type SteamGame = {
  name: string
  playtime: {
    two_weeks: string
    forever: string
  }
  image: string
  url: string
}

export interface SteamRecentlyPlayedGames extends RichPresence {
  type: 'steam'
  verb: 'Recently Played Game'
  games: SteamGame[]
}

export type NotionNowEntry = {
  id: string
  title: string
}

export interface NotionDoingNow extends RichPresence {
  type: 'notion'
  verb: 'Now'
  entries: NotionNowEntry[]
}
