import type {
  LetterboxdRecentMovies,
  SteamRecentlyPlayedGames,
} from '../types/rich-presence'
import { Letterboxd16, Steam16 } from './icons'
import { PresenceWidget } from './presenceWidget'

interface RichPresenceListProps {
  presenceList: Array<
    | LetterboxdRecentMovies
    | SteamRecentlyPlayedGames
    | undefined
    | null
  >
  showHeading?: boolean
}

export function RichPresenceList({
  presenceList,
  showHeading,
}: RichPresenceListProps) {
  return (
    <section>
      {showHeading && (
        <h2 className="mt-32 text-accent tracking-[.2em]">RECENTS</h2>
      )}
      <div className="grid grid-cols-1 gap-4 mt-3 -mx-1 md:-mx-5 md:grid-cols-2 xl:grid-cols-2">
        {presenceList.map(rp => {
          if (rp?.type === 'letterboxd') {
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
          } else if (rp?.type === 'steam') {
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
