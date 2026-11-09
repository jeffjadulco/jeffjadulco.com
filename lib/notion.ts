import { Client, isFullPage } from '@notionhq/client'
import type { Project } from '../types/project'
import * as helper from './notion-helper'

const notion = new Client({ auth: process.env.NOTION_KEY })
const dbid_projects = process.env.NOTION_PROJECTS_DB_ID || ''
const dataSourceIds = new Map<string, Promise<string>>()

function getDataSourceId(databaseId: string) {
  let dataSourceId = dataSourceIds.get(databaseId)

  if (!dataSourceId) {
    dataSourceId = notion.databases
      .retrieve({ database_id: databaseId })
      .then(database =>
        'data_sources' in database && database.data_sources[0]
          ? database.data_sources[0].id
          : databaseId
      )
      .catch(() => databaseId)
    dataSourceIds.set(databaseId, dataSourceId)
  }

  return dataSourceId
}

export async function getProjects() {
  try {
    const { results } = await notion.dataSources.query({
      data_source_id: await getDataSourceId(dbid_projects),
      sorts: [
        {
          property: 'Type',
          direction: 'descending',
        },
        {
          property: 'Year',
          direction: 'descending',
        },
      ],
    })
    return results.filter(isFullPage).map(
      result =>
        ({
          id: result.id,
          title:
            helper.asTitle(result.properties.Title).title[0]?.plain_text || '',
          description: helper.asRichText(result.properties.Description)
            .rich_text[0]?.plain_text || '',
          link: helper.asUrl(result.properties.Link).url,
          type: helper.asSelect(result.properties.Type).select?.name,
          year:
            helper.asRichText(result.properties.Year).rich_text[0]
              ?.plain_text || '',
          tags: helper
            .asMultiSelect(result.properties.Tags)
            .multi_select.map(tag => tag.name),
        } as Project)
    )
  } catch (error) {
    console.error(error)
    return undefined
  }
}
