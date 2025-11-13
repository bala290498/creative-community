import Link from 'next/link'
import { Sprout, Lightbulb, Handshake, Check, ArrowRight } from 'lucide-react'
import { AvatarCircles } from '@/components/ui/avatar-circles'

// Indian young, positive, smiling avatars from Unsplash
// Using specific photos that feature Indian people
const avatarUrls = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1580489944761-15a19d654d0b?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&auto=format",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces&auto=format",
]

export default function Community() {
  return (
    <>
      {/* Hero Section with Avatar Circles */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-6">
              <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
                Community
              </span>
            </div>
            
            <h1 className="heading-primary text-gray-900 mb-6">
              Join Our Growing Community
            </h1>
            
            <p className="text-body text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
              A vibrant, voluntary community where individuals come together to grow, collaborate, and support meaningful projects.
            </p>

            {/* Avatar Circles */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Join <span className="text-secondary-600 font-semibold">99+</span> active members building meaningful projects together
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary">
                Join the Community
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Our Community</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Discover what makes our community special and how you can get involved.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Community Values */}
          <div>
            <h3 className="heading-tertiary mb-6">Community Values</h3>
            <ul className="space-y-4">
              {[
                'Voluntary participation - no obligations',
                'Transparent and ethical practices',
                'Mutual support and collaboration',
                'Respect for all members',
                'Focus on meaningful impact',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Get Involved */}
          <div className="card bg-gradient-to-br from-secondary-50 to-white">
            <h3 className="heading-tertiary mb-6">How to Get Involved</h3>
            <ul className="space-y-4">
              {[
                'Join as a member - apply through our membership page',
                'Contribute to community-owned projects',
                'Start your own in-house initiative',
                'Partner with us as a trusted partner',
                'Participate in community discussions',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Community Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/community-owned" className="group">
            <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-secondary-600" />
                </div>
              </div>
              <h3 className="heading-tertiary mb-4 group-hover:text-secondary-600 transition-colors">
                Community-Owned
              </h3>
              <p className="text-gray-600">
                Projects owned and operated by the community, where every member has a voice.
              </p>
            </div>
          </Link>

          <Link href="/initiatives" className="group">
            <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-secondary-600" />
                </div>
              </div>
              <h3 className="heading-tertiary mb-4 group-hover:text-secondary-600 transition-colors">
                In-House Initiatives
              </h3>
              <p className="text-gray-600">
                Member-driven projects started by individual community members.
              </p>
            </div>
          </Link>

          <Link href="/partners" className="group">
            <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-secondary-600" />
                </div>
              </div>
              <h3 className="heading-tertiary mb-4 group-hover:text-secondary-600 transition-colors">
                Trusted Partners
              </h3>
              <p className="text-gray-600">
                External businesses and organizations we collaborate with.
              </p>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 max-w-2xl">
            <h3 className="heading-tertiary mb-4">Ready to Join?</h3>
            <p className="text-body text-gray-700 mb-6">
              Become part of our community and start collaborating on meaningful projects today.
            </p>
            <Link href="/membership" className="btn-primary">
              Apply for Membership
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

