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

export interface SpotifyCurrentlyPlaying extends RichPresence {
  type: 'spotify_current'
  verb: 'Now Playing'
  isPlaying: boolean
  track: SpotifyTrack
}

export interface SpotifyRecentlyPlayed extends RichPresence {
  type: 'spotify_recent'
  verb: 'Recently Played'
  tracks: SpotifyTrack[]
}
