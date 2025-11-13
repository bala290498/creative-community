export default function TrustedPartners() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ Trusted Partners
            </span>
          </div>
          <h2 className="heading-secondary">Collaborations Beyond Our Community</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
            We carefully select external creators, entrepreneurs, service providers, and businesses who align with our community values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Benefits */}
          <div>
            <h3 className="heading-tertiary mb-6">Trusted Partner Benefits for Members:</h3>
            <ul className="space-y-4">
              {[
                'Preferred discounts',
                'Members-only offers',
                'Early-bird deals',
                'Exclusive partner access',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-secondary-600 font-bold text-xl mt-1">✨</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 italic">
              These benefits are indirect and non-financial, provided voluntarily by partners as goodwill.
            </p>
          </div>

          {/* What It Means */}
          <div className="card bg-gradient-to-br from-secondary-50 to-white">
            <h3 className="heading-tertiary mb-6">What Trusted Partnership Means</h3>
            <ul className="space-y-4">
              {[
                'Transparent collaboration',
                'Zero financial liability to members',
                'Safe, curated, value-based opportunities',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-secondary-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

