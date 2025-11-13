export default function InHouseInitiatives() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ In-House Initiatives
            </span>
          </div>
          <h2 className="heading-secondary">Member-Driven Projects</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
            We support in-house projects such as products, services, tools, or creative initiatives started by individual members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Project Characteristics */}
          <div className="card">
            <h3 className="heading-tertiary mb-4">These projects are:</h3>
            <ul className="space-y-3">
              {[
                'Privately owned by their respective founders',
                'Not owned or operated by the community itself',
                'Optional for members to support',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Member Benefits */}
          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <h3 className="heading-tertiary mb-4">Member Benefits</h3>
            <p className="text-gray-700 mb-4">
              Members who choose to engage in these projects may get:
            </p>
            <ul className="space-y-3">
              {[
                'Early access',
                'Special privileges',
                'Exclusive discounts',
                'Priority selection',
                'Recognition for their contribution',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">🎁</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Participation is always <span className="font-semibold text-primary-600">voluntary</span> and based on personal interest — not mandatory or financial in nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

