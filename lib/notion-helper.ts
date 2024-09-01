import {PageObjectResponse} from '@notionhq/client/build/src/api-endpoints'

// Boo. https://github.com/makenotion/notion-sdk-js/issues/219

type PageProperties = PageObjectResponse['properties']
type PagePropertyValue = PageProperties[string]

export type PropertyValueTitle = Extract<PagePropertyValue, {type: 'title'}>
export type PropertyValueRichText = Extract<PagePropertyValue, {type: 'rich_text'}>
export type PropertyValueUrl = Extract<PagePropertyValue, {type: 'url'}>
export type PropertyValueSelect = Extract<PagePropertyValue, {type: 'select'}>
export type PropertyValueMultiSelect = Extract<PagePropertyValue, {type: 'multi_select'}>