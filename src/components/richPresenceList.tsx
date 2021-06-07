import {
  SpotifyCurrentlyPlaying,
  SpotifyRecentlyPlayed,
} from '@/types/rich-presence'
import { Spotify16 } from './icons'
import { PresenceWidget } from './presenceWidget'

interface RichPresenceListProps {
  presenceList: Array<SpotifyCurrentlyPlaying | SpotifyRecentlyPlayed>
}

export function RichPresenceList({ presenceList }: RichPresenceListProps) {
  return (
    <section className="">
      <h2 className="mt-32 font-normal text-accent tracking-widestest">
        RICH PRESENCE
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-3 -mx-5 md:grid-cols-2 xl:grid-cols-3">
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
          }
        })}
      </div>
    </section>
  )
}
