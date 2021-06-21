import { Fragment, useMemo } from 'react'
import { GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { Heading } from '@/components/atoms'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'
import { components } from '@/components/mdxComponents'
import { RichPresenceList } from '@/components/richPresenceList'

import { getMdxByPath } from '@/lib/mdx'
import { getCurrentlyPlaying, getRecentlyPlayed } from '@/lib/spotify'
import { getRecentMovies } from '@/lib/letterboxd'
import { getRecentGames } from '@/lib/steam'
import { getDoingNow } from '@/lib/notion'

import {
  LetterboxdRecentMovies,
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
  SteamRecentlyPlayedGames,
} from '@/types/rich-presence'

interface AboutPageProps {
  code: any
  spotify?: SpotifyCurrentTrack | SpotifyRecentTracks
  letterboxd?: LetterboxdRecentMovies
  steam: SteamRecentlyPlayedGames
  notion: any
}

export default function About({
  code,
  notion,
  spotify,
  letterboxd,
  steam,
}: AboutPageProps) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Fragment>
      <SEO title="About" />
      <div className="container">
        <Heading>About Me</Heading>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <Component components={components} />
        </article>
        <h3 className="mb-4 text-2xl font-bold leading-tight mt-14 text-accent">
          Recents
        </h3>
        <RichPresenceList presenceList={[notion, spotify, letterboxd, steam]} />
      </div>
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { code } = await getMdxByPath('/content/about.mdx')

  let spotify:
    | SpotifyCurrentTrack
    | SpotifyRecentTracks = await getCurrentlyPlaying()
  if (spotify === null) {
    spotify = await getRecentlyPlayed()
  }

  const letterboxd = await getRecentMovies()
  const steam = await getRecentGames()
  const notion = await getDoingNow()
  return {
    props: {
      code,
      spotify,
      letterboxd,
      steam,
      notion,
    },
    revalidate: 60,
  }
}
