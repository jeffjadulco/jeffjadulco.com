import axios from 'axios'
import rssparser from 'rss-parser'
import { parse } from 'node-html-parser'

import type { LetterboxdRecentMovies } from '@/types/rich-presence'

const letterboxd_username = process.env.LETTERBOXD_USERNAME

const rating_star = new Map([
  ['-1.0', 'None'],
  ['0.5', '½'],
  ['1.0', '★'],
  ['1.5', '★½'],
  ['2.0', '★★'],
  ['2.5', '★★½'],
  ['3.0', '★★★'],
  ['3.5', '★★★½'],
  ['4.0', '★★★★'],
  ['4.5', '★★★★½'],
  ['5.0', '★★★★★'],
])

function getImage(document) {
  const root = parse(document)
  const img = root.querySelector('p img').getAttribute('src')
  return img
}

function getRating(rating) {
  return rating_star.get(rating)
}

export async function getRecentMovies() {
  const { data } = await axios.get(
    `https://letterboxd.com/${letterboxd_username}/rss/`
  )

  const parser = new rssparser({
    customFields: {
      item: [
        'letterboxd:watchedDate',
        'letterboxd:rewatch',
        'letterboxd:filmTitle',
        'letterboxd:filmYear',
        'letterboxd:memberRating',
        'description',
      ],
    },
  })
  const { items } = await parser.parseString(data)

  return {
    type: 'letterboxd',
    verb: 'Recently Watched',
    movies: items.map(item => ({
      title: item['letterboxd:filmTitle'],
      url: item.link,
      rating: getRating(item['letterboxd:memberRating']),
      year: item['letterboxd:filmYear'],
      image: getImage(item.description),
    })),
  } as LetterboxdRecentMovies
}
