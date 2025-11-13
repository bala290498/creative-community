'use client'

import MembershipForm from './MembershipForm'

export default function Membership() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              ⭐ Membership
            </span>
          </div>
          <h2 className="heading-secondary">
            Become a Part of Something Meaningful
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
            Membership is open to individuals who believe in contribution, value exchange, and community-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* What You Get */}
          <div>
            <h3 className="heading-tertiary mb-6">What You Get</h3>
            <ul className="space-y-4">
              {[
                'Access to community platforms',
                'Participation in discussions and decision-making',
                'Invitations to events, sessions, and collaborations',
                'Eligibility for community benefits such as tools, outings, or platform subscriptions',
                'Opportunities to support and engage with in-house and partner projects',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No Fixed Payments */}
          <div className="card bg-white">
            <h3 className="heading-tertiary mb-6">No Fixed Payments</h3>
            <p className="text-lg text-gray-700 mb-4">There are:</p>
            <ul className="space-y-3 mb-6">
              {[
                'No mandatory contribution amounts',
                'No membership fees',
                'No financial expectations',
                'No profit guarantees',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-primary-600">
              Membership rewards come only from your level of involvement.
            </p>
          </div>
        </div>

        {/* Membership Form */}
        <div className="max-w-2xl mx-auto">
          <MembershipForm />
        </div>
      </div>
    </section>
  )
}

