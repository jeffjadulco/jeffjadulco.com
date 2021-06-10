import { PresenceWidget } from './presenceWidget'
import { Letterboxd16, Spotify16, Steam16 } from './icons'

import type {
  LetterboxdRecentMovies,
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
  SteamRecentlyPlayedGames,
} from '@/types/rich-presence'

interface RichPresenceListProps {
  presenceList: Array<
    | SpotifyCurrentTrack
    | SpotifyRecentTracks
    | LetterboxdRecentMovies
    | SteamRecentlyPlayedGames
  >
}

export function RichPresenceList({ presenceList }: RichPresenceListProps) {
  return (
    <section className="">
      <h2 className="mt-32 font-normal text-accent tracking-widestest">
        RICH PRESENCE
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-3 -mx-5 md:grid-cols-2 xl:grid-cols-2">
        {presenceList.map(rp => {
          if (rp.type === 'spotify_current') {
            return (
              <PresenceWidget
                key={rp.type}
                icon={<Spotify16 />}
                verb={rp.verb}
                title={rp.track.title}
                subtitle={rp.track.artists}
                img_url={rp.track.image}
                url={rp.track.url}
              />
            )
          } else if (rp.type === 'spotify_recent') {
            return (
              <PresenceWidget
                key={rp.type}
                icon={<Spotify16 />}
                verb={rp.verb}
                title={rp.tracks[0]?.title}
                subtitle={rp.tracks[0]?.artists}
                img_url={rp.tracks[0]?.image}
                url={rp.tracks[0]?.url}
              />
            )
          } else if (rp.type === 'letterboxd') {
            return (
              <PresenceWidget
                key={rp.type}
                icon={<Letterboxd16 />}
                verb={rp.verb}
                title={`${rp.movies[0]?.title}, ${rp.movies[0]?.year}`}
                subtitle={rp.movies[0]?.rating}
                img_url={rp.movies[0]?.image}
                url={rp.movies[0]?.url}
              />
            )
          } else if (rp.type === 'steam') {
            return (
              <PresenceWidget
                key={rp.type}
                icon={<Steam16 />}
                verb={rp.verb}
                title={rp.games[0]?.name}
                subtitle={rp.games[0]?.playtime.two_weeks}
                img_url={rp.games[0]?.image}
                url={rp.games[0]?.url}
              />
            )
          }
        })}
      </div>
    </section>
  )
}
