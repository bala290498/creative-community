import Link from 'next/link'
import TextType from './TextType'
import Testimonials from './Testimonials'
import { ShuffleHero } from './ui/shuffle-grid'
import { FaqAccordion } from './ui/faq-accordion'
import { Search, Handshake, Sparkles, FileText, Check } from 'lucide-react'
import { WarpBackground } from './ui/warp-background'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="heading-primary text-gray-900 mb-6 min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center">
              <TextType
                text={[
                  'A Community Built on Purpose, Not Profit',
                  'A Community Built on Values, Not Ventures',
                  'A Community Built on Purpose, Not Profit'
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                as="span"
                className="inline-block"
                cursorClassName="text-secondary-600"
              />
            </h1>
            
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

      {/* 2. Community Purpose Section */}
      <section className="section-padding bg-white">
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

      {/* 3. Warp Background Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Why Join Our Community?</h2>
            <p className="text-body text-gray-700 max-w-3xl mx-auto">
              Experience a community that values your contribution and supports your growth.
            </p>
          </div>
          
          <div className="flex justify-center">
            <WarpBackground 
              className="border-gray-200 bg-white max-w-2xl w-full"
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
                  <div className="mt-4">
                    <Link href="/membership" className="btn-primary">
                      Get Started Today
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </WarpBackground>
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

      {/* 5. Featured Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Featured Community Projects</h2>
            <p className="text-body text-gray-700 max-w-3xl mx-auto">
              Explore a selection of ongoing projects that showcase the community&apos;s creativity, purpose, and collaborative spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {[
              {
                title: 'Sustainable Urban Food Initiative',
                description: 'A community-led project exploring new ways to grow and distribute fresh food in urban areas.',
                badge: 'Community-Owned',
                href: '/community-owned',
              },
              {
                title: 'EdTech Learning Platform',
                description: 'An innovative online learning platform designed to make quality education accessible to everyone.',
                badge: 'In-House',
                href: '/initiatives',
              },
              {
                title: 'Eco Fashion Brand',
                description: 'A sustainable fashion brand creating stylish, eco-friendly clothing for the conscious consumer.',
                badge: 'Trusted Partner',
                href: '/partners',
              },
            ].map((project, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary-100 text-secondary-700">
                    {project.badge}
                  </span>
                </div>
                <h3 className="heading-tertiary mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link href={project.href} className="text-secondary-600 hover:text-secondary-700 font-medium">
                  View Project →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/community" className="btn-secondary">
              View All Projects
            </Link>
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

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
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
              answerClassName="bg-secondary-500 text-white"
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

