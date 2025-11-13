import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ Welcome
            </span>
          </div>
          
          <h1 className="heading-primary text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-primary-600">Creative-Community</span>
          </h1>
          
          <p className="text-body text-gray-700 mb-8 max-w-3xl mx-auto">
            A private, voluntary community created to bring together individuals who want to grow, collaborate, explore opportunities, and support meaningful projects — all without strict commitments or financial expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/membership" className="btn-primary">
              Join the Community
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="heading-secondary text-center mb-12">Our Purpose</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Join a thriving network',
                icon: '🌐',
              },
              {
                title: 'Contribute voluntarily to projects you believe in',
                icon: '💡',
              },
              {
                title: 'Receive recognition, access, and community-driven benefits',
                icon: '🎁',
              },
              {
                title: 'Collaborate with in-house creators and trusted partner businesses',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-lg font-medium text-gray-800">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 max-w-2xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                This community is <span className="font-semibold text-gray-900">not a company</span>, not an investment scheme, and not profit-based.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                It's a shared space for <span className="font-semibold text-primary-600">learning, contribution, impact, and growth</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

