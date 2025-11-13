'use client'

import MembershipForm from './MembershipForm'
import { BookOpen, Wrench, Settings, Trophy, Palette, PartyPopper, Shield, Check, X } from 'lucide-react'

export default function Membership() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              Membership
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
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
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
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-secondary-600">
              Membership rewards come only from your level of involvement.
            </p>
          </div>
        </div>

        {/* Member Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="heading-secondary mb-4">Member Benefits</h3>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              As a member of our community, you&apos;ll have access to a wide range of benefits designed to support your growth, learning, and meaningful contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Opportunities for continuous learning',
                icon: BookOpen,
              },
              {
                title: 'Hands-on experience through real projects',
                icon: Wrench,
              },
              {
                title: 'Access to curated tools and platforms',
                icon: Settings,
              },
              {
                title: 'Recognition for meaningful contributions',
                icon: Trophy,
              },
              {
                title: 'Creative challenges and community activities',
                icon: Palette,
              },
              {
                title: 'Outings, gatherings, and bonding events',
                icon: PartyPopper,
              },
              {
                title: 'A safe, respectful, and inclusive environment',
                icon: Shield,
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="card bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-secondary-600" />
                    </div>
                    <p className="text-lg font-medium text-gray-800">
                      {benefit.title}
                    </p>
                  </div>
                </div>
              )
            })}
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

