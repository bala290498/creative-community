import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="heading-primary text-gray-900 mb-6">
              A Community Built on{' '}
              <span className="text-secondary-600">Purpose, Not Profit</span>
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
                icon: '🔍',
              },
              {
                title: 'Ethical Collaboration',
                description: 'Members join and contribute voluntarily—no fees, no forced commitments, no profit-driven motives.',
                icon: '🤝',
              },
              {
                title: 'Meaningful Impact',
                description: 'Projects are chosen because they matter. Members support ideas that solve real problems and uplift communities.',
                icon: '💫',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-tertiary mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="section-padding bg-gray-50">
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
                icon: '🔎',
              },
              {
                step: 'Step 2',
                title: 'Apply for Membership',
                description: 'Submit a simple application to join the community and gain access to opportunities.',
                icon: '📝',
              },
              {
                step: 'Step 3',
                title: 'Contribute Voluntarily',
                description: 'Choose the projects you care about and contribute in a way that fits your skills, passions, and availability.',
                icon: '✨',
              },
            ].map((item, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="section-padding bg-white">
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

      {/* 5. Why Join the Community? */}
      <section className="section-padding bg-gray-50">
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
                  <span className="text-secondary-600 font-bold text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Project Categories Overview */}
      <section className="section-padding bg-white">
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

      {/* 7. Call-to-Action Banner (Mid-Page) */}
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

      {/* 8. About the Community Preview */}
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

      {/* 9. Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">What Members Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: 'Joining this community gave me a place to explore projects I genuinely care about. There\'s no pressure—just people who want to build meaningful things together.',
                author: 'Jordan M.',
                role: 'Member',
              },
              {
                quote: 'The transparency and ethical approach here is refreshing. I can contribute when I want, how I want, without any financial strings attached.',
                author: 'Alex K.',
                role: 'Member',
              },
              {
                quote: 'This community helped me connect with like-minded people who share my values. The collaborative spirit is genuine and inspiring.',
                author: 'Sam T.',
                role: 'Member',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card text-center">
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Do I need to pay anything to join?',
                answer: 'No. Membership is completely free. We do not charge fees or require financial commitments.',
              },
              {
                question: 'What types of projects can I contribute to?',
                answer: 'You can participate in community-owned initiatives, member-led in-house projects, or collaborations with trusted partners.',
              },
              {
                question: 'How do I know if this community is right for me?',
                answer: 'If you value ethical collaboration, transparency, and meaningful work without financial pressure, you\'ll feel at home here.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="heading-tertiary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Call-to-Action Section */}
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

