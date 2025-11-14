import Link from 'next/link'
import TextType from './TextType'
import Testimonials from './Testimonials'
import { ShuffleHero } from './ui/shuffle-grid'
import { FaqAccordion } from './ui/faq-accordion'
import { Search, Handshake, Sparkles, FileText, Check, ArrowUpRight } from 'lucide-react'
import { WarpBackground } from './ui/warp-background'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import SphereImageGrid, { ImageData } from './ui/sphere-image-grid'
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from './ui/scroll-based-velocity'
import { Timeline } from './Timeline'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="heading-primary text-gray-900 mb-6">
              Creative Community
            </h1>
            <div className="min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center mb-6">
              <TextType
                text={[
                  'Built on Values, Not Ventures',
                  'Built on Purpose, Not Profit'
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                as="span"
                className="inline-block text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800"
                cursorClassName="text-secondary-600"
              />
            </div>
            
            <p className="text-body text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
              Join a values-driven, voluntary community where people collaborate, explore opportunities, and support meaningful projects—without financial obligations or hidden agendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/membership" className="btn-primary">
                Join the Community
              </Link>
              <Link href="/community-owned" className="btn-secondary">
                Explore Projects
              </Link>
            </div>

            <p className="text-sm md:text-base text-gray-600">
              Private. Ethical. Transparent. Open to people who want to make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5. Scroll Based Velocity */}
      <section className="section-padding bg-white overflow-hidden py-0">
        <div className="relative flex w-full flex-col items-center justify-center">
          <ScrollVelocityContainer className="w-full">
            <div className="bg-white py-4 md:py-6 shadow-lg">
              <ScrollVelocityRow baseVelocity={20} direction={1}>
                <span className="text-secondary-600 text-2xl md:text-4xl font-bold tracking-tight inline-flex items-center gap-2">
                  largest community * unlock benefits and other *
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 inline-block" />
                </span>
              </ScrollVelocityRow>
            </div>
            <div className="bg-white py-4 md:py-6 shadow-lg -mt-1">
              <ScrollVelocityRow baseVelocity={20} direction={-1}>
                <span className="text-secondary-600 text-2xl md:text-4xl font-bold tracking-tight inline-flex items-center gap-2">
                  largest community * unlock benefits and other *
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 inline-block" />
                </span>
              </ScrollVelocityRow>
            </div>
          </ScrollVelocityContainer>
        </div>
      </section>

      {/* 2. Community Purpose Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Why This Community Exists</h2>
            <p className="text-body text-gray-700 max-w-3xl mx-auto">
              We bring together individuals who want to grow, collaborate, and contribute to meaningful initiatives. Our purpose is simple: create a safe, transparent environment where people can work on projects they truly believe in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Transparency',
                description: 'We communicate openly and operate with honesty so every member understands how the community works.',
                icon: Search,
              },
              {
                title: 'Ethical Collaboration',
                description: 'Members join and contribute voluntarily—no fees, no forced commitments, no profit-driven motives.',
                icon: Handshake,
              },
              {
                title: 'Meaningful Impact',
                description: 'Projects are chosen because they matter. Members support ideas that solve real problems and uplift communities.',
                icon: Sparkles,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
              <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-secondary-600" />
                    </div>
                  </div>
                <h3 className="heading-tertiary mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2.5. Timeline Section */}
      <section className="section-padding bg-white">
        <Timeline
          data={[
            {
              title: "1",
              content: (
                <div>
                  <h3 className="heading-tertiary mb-3 text-secondary-600">Apply for Membership</h3>
                  <p className="text-gray-700 mb-4">
                    Submit a simple application to join our community. No fees, no hidden commitments—just a genuine interest in collaboration and meaningful work.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Simple Form</h4>
                      <p className="text-sm text-gray-600">Quick and easy application process</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">No Fees</h4>
                      <p className="text-sm text-gray-600">Completely free to join</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Fast Review</h4>
                      <p className="text-sm text-gray-600">Quick approval process</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Transparent</h4>
                      <p className="text-sm text-gray-600">Clear expectations from day one</p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "2",
              content: (
                <div>
                  <h3 className="heading-tertiary mb-3 text-secondary-600">Join Our Community</h3>
                  <p className="text-gray-700 mb-4">
                    Become part of a values-driven network of collaborators who support each other and work together on projects that matter.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Welcome Onboarding</h4>
                      <p className="text-sm text-gray-600">Get introduced to community values</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Member Directory</h4>
                      <p className="text-sm text-gray-600">Connect with like-minded people</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Community Guidelines</h4>
                      <p className="text-sm text-gray-600">Understand our shared principles</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Access Resources</h4>
                      <p className="text-sm text-gray-600">Get access to community tools</p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "3",
              content: (
                <div>
                  <h3 className="heading-tertiary mb-3 text-secondary-600">Explore New Opportunities</h3>
                  <p className="text-gray-700 mb-4">
                    Discover a wide range of projects, initiatives, and collaborations across different categories. Find what resonates with your skills and passions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Project Browser</h4>
                      <p className="text-sm text-gray-600">Browse all available projects</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Category Filters</h4>
                      <p className="text-sm text-gray-600">Find projects by interest</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Skill Matching</h4>
                      <p className="text-sm text-gray-600">Projects aligned with your skills</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Collaboration Tools</h4>
                      <p className="text-sm text-gray-600">Platforms for team coordination</p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "4",
              content: (
                <div>
                  <h3 className="heading-tertiary mb-3 text-secondary-600">Get Benefits</h3>
                  <p className="text-gray-700 mb-4">
                    Unlock access to learning opportunities, hands-on experience, curated tools, recognition for contributions, and a supportive community environment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Learning Resources</h4>
                      <p className="text-sm text-gray-600">Access to educational materials</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Hands-on Experience</h4>
                      <p className="text-sm text-gray-600">Real-world project experience</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Curated Tools</h4>
                      <p className="text-sm text-gray-600">Access to premium platforms</p>
                    </div>
                    <div className="card p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">Recognition</h4>
                      <p className="text-sm text-gray-600">Get credit for your contributions</p>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* 3. Warp Background Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="w-full flex flex-col justify-center text-center md:text-left">
                <h2 className="heading-secondary mb-4">Why Join Our Community?</h2>
                <p className="text-body text-gray-700 mb-6">
                  Experience a community that values your contribution and supports your growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Join a values-driven network of collaborators</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Contribute to meaningful projects without financial pressure</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Build connections with purpose-driven individuals</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Grow your skills through real-world collaboration</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/membership" className="btn-primary">
                    Get Started Today
                  </Link>
                </div>
              </div>

              {/* Right Column - Warp Background */}
              <div className="w-full flex justify-center md:justify-end">
                <WarpBackground 
                  className="border-gray-200 bg-white max-w-lg w-full"
                  gridColor="hsl(214.3 31.8% 91.4%)"
                  perspective={200}
                  beamsPerSide={4}
                  beamSize={4}
                >
                  <Card className="w-full border-0 shadow-none bg-transparent relative z-10">
                    <CardContent className="flex flex-col gap-4 p-8">
                      <CardTitle className="text-3xl font-bold text-gray-900">
                        Join a Community That Matters
                      </CardTitle>
                      <CardDescription className="text-base text-gray-700 leading-relaxed">
                        Your hard work and dedication deserve recognition. We&apos;re thrilled to have you join a community where meaningful contributions are valued. Together, we build projects that make a real difference.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </WarpBackground>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">How the Community Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 'Step 1',
                title: 'Discover Projects',
                description: 'Browse initiatives across community-owned, in-house, and trusted partner categories.',
                icon: Search,
              },
              {
                step: 'Step 2',
                title: 'Apply for Membership',
                description: 'Submit a simple application to join the community and gain access to opportunities.',
                icon: FileText,
              },
              {
                step: 'Step 3',
                title: 'Contribute Voluntarily',
                description: 'Choose the projects you care about and contribute in a way that fits your skills, passions, and availability.',
                icon: Sparkles,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">
                      {item.step}
                    </span>
                    <h3 className="heading-tertiary mb-3 mt-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Network, Learn, Build, Grow Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Network, Learn, Build, Grow.</h2>
            <p className="text-body text-gray-700 max-w-4xl mx-auto">
              Connect with people who share your creative energy. Explore community-led learning across sales (sales: activities involving value exchange), marketing (marketing: promotion and customer engagement), creativity, problem-solving, and more. Join member-driven projects, collaborate openly, and discover meaningful opportunities to grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Community-Owned Members */}
            <div className="card hover:shadow-2xl transition-all duration-300">
              <h3 className="heading-tertiary mb-4">Community-Owned Members</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Access our members-only digital space</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Collaborate with creators, builders, and learners</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Contribute ideas to community-owned projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Join guided learning circles hosted by members</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Attend community events, meetups, and discussions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Receive early access to community-built products</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Enjoy members-only benefits and recognition</span>
                </li>
              </ul>
              <Link href="/membership" className="btn-primary w-full text-center block">
                Begin Your Community Journey
                </Link>
              </div>

            {/* In-House Project Contributors */}
            <div className="card hover:shadow-2xl transition-all duration-300">
              <h3 className="heading-tertiary mb-4">In-House Project Contributors</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Work on real in-house projects led by members</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Gain hands-on experience through co-creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Partner with teams building tools, services, or creative initiatives</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Access focused project groups and collaboration rooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Receive support from experienced contributors</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Get featured for meaningful contributions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Build a trusted reputation within the community</span>
                </li>
              </ul>
              <Link href="/initiatives" className="btn-primary w-full text-center block">
                Start Creating Together
              </Link>
          </div>

            {/* Trusted Partners & Collaborators */}
            <div className="card hover:shadow-2xl transition-all duration-300">
              <h3 className="heading-tertiary mb-4">Trusted Partners & Collaborators</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Get a verified partner profile on our platform</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Collaborate with aligned creators, service providers, and collectives</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Offer value to the community through ethical partnerships</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Participate in co-hosted workshops and knowledge sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Gain visibility through community showcases</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Access curated opportunities to support members</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0 mr-2" />
                  <span className="text-gray-700">Be recognized as a trusted external contributor</span>
                </li>
              </ul>
              <Link href="/partners" className="btn-primary w-full text-center block">
                Partner With Us
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Join the Community? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">What Makes Our Community Different</h2>
              <p className="text-body text-gray-700">
                We are not a business, a startup, or an organization built around profit. We are a voluntary community of people who want to support meaningful work together. Membership is free, participation is optional, and every contribution is appreciated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Opportunities to collaborate with purpose-driven people',
                'Access to community-owned and member-built initiatives',
                'A transparent environment with no hidden expectations',
                'A supportive space where ideas grow naturally',
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Project Categories Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Explore Project Categories</h2>
            <p className="text-body text-gray-700 max-w-3xl mx-auto">
              Our community supports a wide range of initiatives led by members, partners, and collaborative teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Community-Owned Projects',
                description: 'Projects created, owned, and guided by the community.',
                href: '/community-owned',
              },
              {
                title: 'In-House Initiatives',
                description: 'Ideas started by individual members who want to bring their concepts to life.',
                href: '/initiatives',
              },
              {
                title: 'Trusted Partners',
                description: 'Collaborations with organizations that share our mission and values.',
                href: '/partners',
              },
              {
                title: 'Food',
                description: 'Initiatives focused on sustainability, nutrition, and access to healthy food.',
                href: '/community-owned?category=food',
              },
              {
                title: 'Education',
                description: 'Projects empowering learning, skill-building, and knowledge sharing.',
                href: '/initiatives?category=education',
              },
              {
                title: 'Entertainment',
                description: 'Creative initiatives across media, events, and culture.',
                href: '/community-owned?category=entertainment',
              },
              {
                title: 'Business-to-Business (B2B)',
                description: 'Practical solutions that support businesses and entrepreneurs.',
                href: '/initiatives?category=b2b',
              },
              {
                title: 'Clothing',
                description: 'Projects related to ethical fashion, wearable innovation, and community-driven apparel design.',
                href: '/partners?category=clothing',
              },
            ].map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="heading-tertiary mb-3 group-hover:text-secondary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call-to-Action Banner (Mid-Page) */}
      <section className="section-padding bg-gradient-to-br from-secondary-500 to-secondary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-secondary text-white mb-6">
              Ready to Join a Values-Driven Community?
            </h2>
            <p className="text-body text-white/90 mb-8 text-lg">
              Become part of a private, ethical network of collaborators who support meaningful projects without financial obligations.
            </p>
            <Link href="/membership" className="btn-primary bg-white text-secondary-600 hover:bg-gray-100">
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>

      {/* 9. About the Community Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">A Community Built on Shared Values</h2>
            <p className="text-body text-gray-700 mb-8">
              We believe in voluntary contribution, open collaboration, and transparent communication. Our mission is to create a space where people can build projects that matter—together.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Shuffle Grid - Project Showcase */}
      <section className="section-padding bg-gray-50">
        <ShuffleHero />
      </section>

      {/* 10.5. Sphere Image Grid */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Column - Sphere */}
              <div className="w-full flex justify-center md:justify-start overflow-hidden">
                <div className="w-full max-w-full">
                  <SphereImageGrid
                    images={[
                      {
                        id: '1',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Priya&size=200',
                        alt: 'Community Member 1',
                        title: 'Community Member',
                        description: 'Active contributor to sustainable projects'
                      },
                      {
                        id: '2',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Karthik&size=200',
                        alt: 'Community Member 2',
                        title: 'Community Member',
                        description: 'Passionate about ethical collaboration'
                      },
                      {
                        id: '3',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Meera&size=200',
                        alt: 'Community Member 3',
                        title: 'Community Member',
                        description: 'Building meaningful connections'
                      },
                      {
                        id: '4',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Arjun&size=200',
                        alt: 'Community Member 4',
                        title: 'Community Member',
                        description: 'Dedicated to community growth'
                      },
                      {
                        id: '5',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Divya&size=200',
                        alt: 'Community Member 5',
                        title: 'Community Member',
                        description: 'Supporting innovative initiatives'
                      },
                      {
                        id: '6',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Vijay&size=200',
                        alt: 'Community Member 6',
                        title: 'Community Member',
                        description: 'Championing transparency and ethics'
                      },
                      {
                        id: '7',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Kavitha&size=200',
                        alt: 'Community Member 7',
                        title: 'Community Member',
                        description: 'Creating positive impact together'
                      },
                      {
                        id: '8',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Raj&size=200',
                        alt: 'Community Member 8',
                        title: 'Community Member',
                        description: 'Volunteering for meaningful projects'
                      },
                      {
                        id: '9',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Anjali&size=200',
                        alt: 'Community Member 9',
                        title: 'Community Member',
                        description: 'Fostering collaborative spirit'
                      },
                      {
                        id: '10',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Suresh&size=200',
                        alt: 'Community Member 10',
                        title: 'Community Member',
                        description: 'Driving community initiatives forward'
                      },
                      {
                        id: '11',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Ravi&size=200',
                        alt: 'Community Member 11',
                        title: 'Community Member',
                        description: 'Building bridges and connections'
                      },
                      {
                        id: '12',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Deepika&size=200',
                        alt: 'Community Member 12',
                        title: 'Community Member',
                        description: 'Empowering others through collaboration'
                      },
                      {
                        id: '13',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Nithya&size=200',
                        alt: 'Community Member 13',
                        title: 'Community Member',
                        description: 'Inspiring change through action'
                      },
                      {
                        id: '14',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Shruti&size=200',
                        alt: 'Community Member 14',
                        title: 'Community Member',
                        description: 'Connecting people and ideas'
                      },
                      {
                        id: '15',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Ganesh&size=200',
                        alt: 'Community Member 15',
                        title: 'Community Member',
                        description: 'Leading by example'
                      },
                      {
                        id: '16',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Lakshmi&size=200',
                        alt: 'Community Member 16',
                        title: 'Community Member',
                        description: 'Making a difference every day'
                      },
                      {
                        id: '17',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Anand&size=200',
                        alt: 'Community Member 17',
                        title: 'Community Member',
                        description: 'Supporting community growth'
                      },
                      {
                        id: '18',
                        src: 'https://api.dicebear.com/7.x/adventurer/png?seed=Devi&size=200',
                        alt: 'Community Member 18',
                        title: 'Community Member',
                        description: 'Building a better future together'
                      },
                    ]}
                    containerSize={500}
                    sphereRadius={110}
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    dragSensitivity={0.8}
                    baseImageScale={0.16}
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="w-full flex flex-col justify-center text-center md:text-left">
                <h2 className="heading-secondary mb-3">Our Community Members</h2>
                <p className="text-body text-gray-700 mb-3">
                  Explore our vibrant community through an interactive 3D sphere. Drag to rotate and click on any image to learn more.
                </p>
                <p className="text-body text-gray-600">
                  Our community is made up of passionate individuals who are committed to creating positive change through collaboration, innovation, and meaningful contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom flex justify-center">
          <div className="max-w-3xl px-4 sm:px-6 lg:px-8 ml-2 sm:ml-4">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
            </div>
            
            <FaqAccordion
              data={[
                {
                  id: 1,
                  question: 'Do I need to pay anything to join?',
                  answer: 'No. Membership is completely free. We do not charge fees or require financial commitments.',
                },
                {
                  id: 2,
                  question: 'What types of projects can I contribute to?',
                  answer: 'You can participate in community-owned initiatives, member-led in-house projects, or collaborations with trusted partners.',
                },
                {
                  id: 3,
                  question: 'How do I know if this community is right for me?',
                  answer: 'If you value ethical collaboration, transparency, and meaningful work without financial pressure, you\'ll feel at home here.',
                },
              ]}
              timestamp=""
              questionClassName="text-gray-800"
              answerClassName="bg-blue-500 text-white"
            />
          </div>
        </div>
      </section>

      {/* 13. Final Call-to-Action Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">
              Become Part of Something Purposeful
            </h2>
            <p className="text-body text-gray-700 mb-8 text-lg">
              Join a community where your contribution—no matter the size—helps support meaningful ideas and real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary">
                Join Now
              </Link>
              <Link href="/community-owned" className="btn-secondary">
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

