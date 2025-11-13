import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentsDirectory = path.join(process.cwd(), 'contents')

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown)
  return result.toString()
}

export interface Project {
  slug: string
  title: string
  category: 'food' | 'education' | 'entertainment' | 'b2b' | 'clothing'
  type: 'community-owned' | 'in-house' | 'trusted-partner'
  bannerImage?: string
  description: string
  content: string
  date: string
  author?: string
  tags?: string[]
  profile?: {
    whoAreWe?: string
    problem?: string
    solution?: string
    marketSize?: string
    howItWorks?: string
    scientificRatingSystem?: string
    competitionAnalysis?: string
    whatMakesUsDifferent?: string
    businessModel?: string
    team?: string
    scientificAdvisors?: string
    traction?: string
  }
  updates?: Array<{
    date: string
    title: string
    content: string
  }>
}

export async function getProjectsByType(type: Project['type']): Promise<Project[]> {
  try {
    const fullPath = path.join(contentsDirectory, type)
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory does not exist: ${fullPath}`)
      return []
    }

    const fileNames = fs.readdirSync(fullPath)
    const projects = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.md'))
        .map(async (fileName) => {
          try {
            const filePath = path.join(contentsDirectory, type, fileName)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const { data, content } = matter(fileContents)
            const htmlContent = await markdownToHtml(content)

            return {
              slug: fileName.replace(/\.md$/, ''),
              title: data?.title || '',
              category: (data?.category && ['food', 'education', 'entertainment', 'b2b', 'clothing'].includes(data.category)) 
                ? data.category 
                : 'food',
              type: type,
              bannerImage: data?.bannerImage || '',
              description: data?.description || '',
              content: htmlContent,
              date: data?.date || new Date().toISOString(),
              author: data?.author || '',
              tags: Array.isArray(data?.tags) ? data.tags : [],
              profile: data?.profile && typeof data.profile === 'object' ? data.profile : {},
              updates: Array.isArray(data?.updates) ? data.updates : [],
            } as Project
          } catch (error) {
            console.error(`Error reading file ${fileName}:`, error)
            return null
          }
        })
    )

    const validProjects = projects.filter((project): project is Project => project !== null)

    return validProjects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error(`Error getting projects for type ${type}:`, error)
    return []
  }
}

export async function getProjectBySlug(type: Project['type'], slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(contentsDirectory, type, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`File does not exist: ${fullPath}`)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const htmlContent = await markdownToHtml(content)

    return {
      slug,
      title: data?.title || '',
      category: (data?.category && ['food', 'education', 'entertainment', 'b2b', 'clothing'].includes(data.category)) 
        ? data.category 
        : 'food',
      type: type,
      bannerImage: data?.bannerImage || '',
      description: data?.description || '',
      content: htmlContent,
      date: data?.date || new Date().toISOString(),
      author: data?.author || '',
      tags: Array.isArray(data?.tags) ? data.tags : [],
      profile: data?.profile && typeof data.profile === 'object' ? data.profile : {},
      updates: Array.isArray(data?.updates) ? data.updates : [],
    } as Project
  } catch (error) {
    console.error(`Error reading project ${slug} of type ${type}:`, error)
    return null
  }
}

export function getAllCategories(): string[] {
  return ['all', 'food', 'education', 'entertainment', 'b2b', 'clothing']
}

