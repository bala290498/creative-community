import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse request body with better error handling
    let formData
    try {
      formData = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }
    
    // Validate required fields
    if (!formData || typeof formData !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      )
    }

    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you can integrate with Vercel Forms, email service, or database
    // For Vercel Forms, you would use their API endpoint
    // Example: await fetch('https://api.vercel.com/v1/forms', { ... })
    
    // For now, we'll just log and return success
    // In production, you should:
    // 1. Store in database
    // 2. Send email notification
    // 3. Integrate with Vercel Forms API
    
    console.log('Membership application received:', {
      name: formData.name,
      email: formData.email,
      interests: formData.interests || 'Not provided',
      contribution: formData.contribution || 'Not provided',
      message: formData.message || 'Not provided',
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Your membership application has been submitted successfully!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing membership form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to process your application: ${errorMessage}` },
      { status: 500 }
    )
  }
}

