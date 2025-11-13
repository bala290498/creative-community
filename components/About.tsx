import Link from 'next/link'

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ About
            </span>
          </div>
          <h2 className="heading-secondary">Who We Are</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
            Creative-Community is a private, voluntary group built on the foundations of collaboration, ethics, transparency, and mutual support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* What We Believe */}
          <div>
            <h3 className="heading-tertiary mb-6">What We Believe</h3>
            <ul className="space-y-4">
              {[
                'Good communities create good opportunities',
                'Contribution matters more than currency',
                'Growth should be shared, not owned',
                'Independence and transparency come first',
                'Every member deserves respect and recognition',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-secondary-600 font-bold text-xl mt-1">💫</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Promise */}
          <div className="card bg-gradient-to-br from-secondary-50 to-white">
            <h3 className="heading-tertiary mb-6">Our Promise</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  We do not operate as a company
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  We do not conduct investments or profit-sharing
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  We do not guarantee financial returns
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  We provide a safe and supportive community space
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  We follow strict ethical and community-focused values
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl shadow-xl p-8 md:p-12 text-white max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Us?
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Become part of a community that values contribution, collaboration, and growth.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

