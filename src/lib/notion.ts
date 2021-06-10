import { Client } from '@notionhq/client'
import type { NotionDoingNow } from '@/types/rich-presence'

const notion = new Client({ auth: process.env.NOTION_KEY })
const database_id = process.env.NOTION_NOW_DB_ID

export async function getDoingNow() {
  try {
    const { results } = await notion.databases.query({
      database_id,
      filter: {
        property: 'Tags',
        select: {
          equals: 'Doing',
        },
      },
    })
    return {
      type: 'notion',
      verb: 'Now',
      entries: results.map(result => ({
        // @ts-ignore 😅
        title: result.properties.Name.title[0].plain_text,
        id: result.id,
      })),
    } as NotionDoingNow
  } catch (error) {
    return undefined
  }
}
