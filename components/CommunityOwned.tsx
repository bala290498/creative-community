import ProjectsList from './ProjectsList'
import { Check, ArrowRight } from 'lucide-react'

export default function CommunityOwned() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
                Community-Owned
              </span>
            </div>
            <h2 className="heading-secondary">
              Shared Vision. Shared Effort. Shared Growth.
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Our community runs on collective involvement. Every idea, initiative, or project is shaped by the members who participate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* How It Works */}
            <div>
              <h3 className="heading-tertiary mb-6">How Community-Owned Works</h3>
              <ul className="space-y-4">
                {[
                  'No fixed contribution requirements',
                  'No financial commitments',
                  'No guaranteed returns',
                  'Contributions (skills, time, resources, or funds) are voluntary',
                  'Rewards are based solely on involvement and contribution',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why It Works */}
            <div className="card bg-gradient-to-br from-secondary-50 to-white">
              <h3 className="heading-tertiary mb-6">Why This Model Works</h3>
              <ul className="space-y-4">
                {[
                  'Transparent and flexible',
                  'Gives everyone a voice',
                  'Reduces pressure or obligations',
                  'Encourages long-term, genuine participation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ProjectsList type="community-owned" title="Community-Owned Projects" />
    </>
  )
}

