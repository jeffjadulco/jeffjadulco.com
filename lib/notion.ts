import { Client, isFullPage } from '@notionhq/client'
import type { Project } from '../types/project'
import type { NotionDoingNow } from '../types/rich-presence'
import {
  PropertyValueMultiSelect,
  PropertyValueRichText,
  PropertyValueSelect,
  PropertyValueTitle,
  PropertyValueUrl,
} from './notion-helper'

const notion = new Client({ auth: process.env.NOTION_KEY })
const dbid_now = process.env.NOTION_NOW_DB_ID || ''
const dbid_projects = process.env.NOTION_PROJECTS_DB_ID || ''

export async function getDoingNow() {
  try {
    const { results } = await notion.databases.query({
      database_id: dbid_now,
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
      entries: results.map(doc => {
        if (!isFullPage(doc)) {
          return null
        }
        return {
          id: doc.id,
          title: (doc.properties['Name'] as PropertyValueTitle).title[0]
            .plain_text,
        }
      }),
    } as NotionDoingNow
  } catch (error) {
    return undefined
  }
}

export async function getProjects() {
  try {
    const { results } = await notion.databases.query({
      database_id: dbid_projects,
      sorts: [
        {
          property: 'Type',
          timestamp: 'last_edited_time',
          direction: 'descending',
        },
        {
          property: 'Year',
          timestamp: 'last_edited_time',
          direction: 'descending',
        },
      ],
    })
    return results.map(doc => {
      if (!isFullPage(doc)) {
        return
      }
      return {
        id: doc.id,
        title: (doc.properties['Title'] as PropertyValueTitle).title[0]
          .plain_text,
        description: (doc.properties['Description'] as PropertyValueRichText)
          .rich_text[0].plain_text,
        link: (doc.properties['Link'] as PropertyValueUrl).url,
        type: (doc.properties['Type'] as PropertyValueSelect).select?.name,
        year: (doc.properties['Year'] as PropertyValueRichText).rich_text[0]
          .plain_text,
        tags: (
          doc.properties['Tags'] as PropertyValueMultiSelect
        ).multi_select.map(tag => tag.name),
      } as Project
    })
  } catch (error) {
    console.error(error)
    return undefined
  }
}
