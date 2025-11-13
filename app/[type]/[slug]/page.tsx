import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/markdown'
import ProjectDetail from '@/components/ProjectDetail'

interface PageProps {
  params: Promise<{
    type: string
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  try {
    const { type, slug } = await params
    const validTypes = ['community-owned', 'in-house', 'trusted-partner']
    
    if (!validTypes.includes(type)) {
      notFound()
    }

    const project = await getProjectBySlug(
      type as 'community-owned' | 'in-house' | 'trusted-partner',
      slug
    )

    if (!project) {
      notFound()
    }

    return <ProjectDetail project={project} />
  } catch (error) {
    console.error('Error loading project page:', error)
    notFound()
  }
}

