import { NextRequest, NextResponse } from 'next/server'
import { getProjectBySlug } from '@/lib/markdown'

export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string; slug: string } }
) {
  try {
    const validTypes = ['community-owned', 'in-house', 'trusted-partner']
    
    if (!validTypes.includes(params.type)) {
      return NextResponse.json(
        { error: 'Invalid project type' },
        { status: 400 }
      )
    }

    const project = getProjectBySlug(
      params.type as 'community-owned' | 'in-house' | 'trusted-partner',
      params.slug
    )

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ project }, { status: 200 })
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}

