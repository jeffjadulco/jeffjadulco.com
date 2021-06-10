export interface RichPresence {
  type: string
  verb: 'Now Playing' | 'Recently Played' | 'Recently Watched' | 'Now'
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
