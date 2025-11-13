import Link from 'next/link'

export default function Community() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ Community
            </span>
          </div>
          <h2 className="heading-secondary">Our Community</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
            A vibrant, voluntary community where individuals come together to grow, collaborate, and support meaningful projects.
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
                  <span className="text-secondary-600 font-bold text-xl mt-1">✓</span>
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
                  <span className="text-secondary-600 font-bold text-xl mt-1">→</span>
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
              <div className="text-4xl mb-4">🌱</div>
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
              <div className="text-4xl mb-4">💡</div>
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
              <div className="text-4xl mb-4">🤝</div>
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
  )
}

