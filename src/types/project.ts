export type Project = {
  id: string
  title: string
  description: string
  link: string
  type: 'Open Source' | 'Game'
  year: string
  tags?: string[]
  thumbnail?: string
}
