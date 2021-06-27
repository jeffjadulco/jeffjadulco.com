import {
  FilesPropertyValue,
  MultiSelectPropertyValue,
  PropertyValue,
  RichTextPropertyValue,
  SelectPropertyValue,
  TitlePropertyValue,
  URLPropertyValue,
} from '@notionhq/client/build/src/api-types'

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
