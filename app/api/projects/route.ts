import { NextRequest, NextResponse } from 'next/server'
import { getProjectsByType, getAllCategories } from '@/lib/markdown'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') as 'community-owned' | 'in-house' | 'trusted-partner' | null
    const category = searchParams.get('category') || 'all'

    if (!type) {
      return NextResponse.json(
        { error: 'Type parameter is required' },
        { status: 400 }
      )
    }

    const validTypes = ['community-owned', 'in-house', 'trusted-partner']
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type parameter' },
        { status: 400 }
      )
    }

    let projects = await getProjectsByType(type)

    // Filter by category
    if (category !== 'all') {
      projects = projects.filter((project) => project.category === category)
    }

    return NextResponse.json({ projects, categories: getAllCategories() }, { status: 200 })
  } catch (error) {
    console.error('Error fetching projects:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to fetch projects: ${errorMessage}` },
      { status: 500 }
    )
  }
}

