import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Blob } from '@/components/atoms'
import SEO from '@/components/seo'
import PostList from '@/components/postList'
import ProjectList from '@/components/projectList'
import Contact from '@/components/contact'
import { RichPresenceList } from '@/components/richPresenceList'
import { getAllFrontMatters } from '@/lib/mdx'
import { getCurrentlyPlaying, getRecentlyPlayed } from '@/lib/spotify'

import type { Frontmatter } from '@/types/frontmatter'
import {
  LetterboxdRecentMovies,
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
} from '@/types/rich-presence'
import { getRecentMovies } from '@/lib/letterboxd'

interface IndexPageProps {
  posts: Frontmatter[]
  spotify?: SpotifyCurrentTrack | SpotifyRecentTracks
  letterboxd?: LetterboxdRecentMovies
}

export default function IndexPage({
  posts,
  spotify,
  letterboxd,
}: IndexPageProps) {
  return (
    <Fragment>
      <SEO />
      <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <h1 className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl text-primary sm:text-left md:text-center lg:text-left">
          Hi, I’m Jeff.
          <br className="mb-6 lg:hidden" /> I’m an experienced game developer
          with deep interest in modern web development.
        </h1>
        <div className="relative">
          <Blob />
          <div className="absolute top-0 flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src="/images/the-avatar.png"
                alt="My avatar"
                width={512}
                height={512}
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <PostList posts={posts} showHeading />
      <ProjectList showHeading />
      <RichPresenceList presenceList={[spotify, letterboxd]} />
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()

  let spotify:
    | SpotifyCurrentTrack
    | SpotifyRecentTracks = await getCurrentlyPlaying()
  if (spotify === null) {
    spotify = await getRecentlyPlayed()
  }

  const letterboxd: LetterboxdRecentMovies = await getRecentMovies()

  return { props: { posts, spotify, letterboxd }, revalidate: 60 * 5 }
}
