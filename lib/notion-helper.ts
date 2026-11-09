import type { PageObjectResponse } from '@notionhq/client'

type PropertyValue = PageObjectResponse['properties'][string]
type TitlePropertyValue = Extract<PropertyValue, { type: 'title' }>
type RichTextPropertyValue = Extract<PropertyValue, { type: 'rich_text' }>
type URLPropertyValue = Extract<PropertyValue, { type: 'url' }>
type SelectPropertyValue = Extract<PropertyValue, { type: 'select' }>
type MultiSelectPropertyValue = Extract<PropertyValue, { type: 'multi_select' }>
type FilesPropertyValue = Extract<PropertyValue, { type: 'files' }>

export const asTitle = (propertyValue: PropertyValue) =>
  propertyValue as TitlePropertyValue

export const asRichText = (propertyValue: PropertyValue) =>
  propertyValue as RichTextPropertyValue

export const asUrl = (propertyValue: PropertyValue) =>
  propertyValue as URLPropertyValue

export const asSelect = (propertyValue: PropertyValue) =>
  propertyValue as SelectPropertyValue

export const asMultiSelect = (propertyValue: PropertyValue) =>
  propertyValue as MultiSelectPropertyValue

export const asFiles = (propertyValue: PropertyValue) =>
  propertyValue as FilesPropertyValue
