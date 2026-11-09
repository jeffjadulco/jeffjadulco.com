export interface RichPresence {
  type: string
  verb:
    | 'Recently Played Game'
    | 'Recently Watched'
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
