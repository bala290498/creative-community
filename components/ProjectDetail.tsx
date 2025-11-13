'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/lib/markdown'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'updates'>('overview')

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      food: 'bg-orange-100 text-orange-800',
      education: 'bg-blue-100 text-blue-800',
      entertainment: 'bg-purple-100 text-purple-800',
      b2b: 'bg-indigo-100 text-indigo-800',
      clothing: 'bg-pink-100 text-pink-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const getTagColor = (tag: string) => {
    const tagLower = tag.toLowerCase()
    const colors: Record<string, string> = {
      // Entertainment tags
      entertainment: 'bg-purple-100 text-purple-700',
      streaming: 'bg-purple-100 text-purple-700',
      media: 'bg-purple-100 text-purple-700',
      // Community tags
      community: 'bg-green-100 text-green-700',
      sustainability: 'bg-green-100 text-green-700',
      local: 'bg-green-100 text-green-700',
      // Education tags
      education: 'bg-blue-100 text-blue-700',
      technology: 'bg-blue-100 text-blue-700',
      learning: 'bg-blue-100 text-blue-700',
      // Fashion tags
      fashion: 'bg-pink-100 text-pink-700',
      'eco-friendly': 'bg-emerald-100 text-emerald-700',
      // Business tags
      b2b: 'bg-indigo-100 text-indigo-700',
      saas: 'bg-indigo-100 text-indigo-700',
      collaboration: 'bg-indigo-100 text-indigo-700',
      productivity: 'bg-indigo-100 text-indigo-700',
      // Food tags
      food: 'bg-orange-100 text-orange-700',
      agriculture: 'bg-orange-100 text-orange-700',
      // General tags
      innovation: 'bg-cyan-100 text-cyan-700',
      startup: 'bg-amber-100 text-amber-700',
    }
    return colors[tagLower] || 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image */}
      {project.bannerImage ? (
        <div className="relative w-full h-64 md:h-96 bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.bannerImage}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      ) : (
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
          <span className="text-secondary-600 text-6xl font-bold">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Unified Banner Card */}
      <div className="w-full bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Item 1: Connection */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-5 flex items-center justify-center flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs mx-auto">
                  Kickstarter connects creators with backers to fund projects.
                </p>
              </div>

              {/* Item 2: Updates */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-5 flex items-center justify-center flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs mx-auto">
                  Rewards aren&apos;t guaranteed, but creators must regularly update backers.
                </p>
              </div>

              {/* Item 3: Funding */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-5 flex items-center justify-center flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs mx-auto">
                  You&apos;re only charged if the project meets its funding goal by the campaign deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          {/* Back Button */}
          <Link
            href={`/${project.type}`}
            className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to {project.type === 'community-owned' ? 'Community-Owned' : project.type === 'in-house' ? 'In-House Initiatives' : 'Trusted Partners'}
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(
                  project.category
                )}`}
              >
                {project.category}
              </span>
            </div>
            <h1 className="heading-primary mb-4">{project.title}</h1>
            <p className="text-body text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {project.date && (
                <span>
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              )}
              {project.author && <span>By {project.author}</span>}
            </div>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm font-medium px-3 py-1 rounded-full ${getTagColor(tag)}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['overview', 'profile', 'updates'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-secondary-600 text-secondary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="prose prose-lg max-w-none">
            {activeTab === 'overview' && (
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:font-extrabold prose-h1:mb-6 prose-h1:mt-0 prose-h1:text-gray-900 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-900 prose-h2:font-semibold
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-gray-800
                  prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-base
                  prose-ul:text-gray-700 prose-ul:mb-4 prose-ul:pl-6
                  prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
                  prose-strong:text-gray-900 prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            )}

            {activeTab === 'profile' && project.profile && (
              <div className="space-y-8">
                {project.profile.whoAreWe && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Who Are We?</h2>
                    <p className="text-body text-gray-700">{project.profile.whoAreWe}</p>
                  </div>
                )}
                {project.profile.problem && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Problem</h2>
                    <p className="text-body text-gray-700">{project.profile.problem}</p>
                  </div>
                )}
                {project.profile.solution && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Solution</h2>
                    <p className="text-body text-gray-700">{project.profile.solution}</p>
                  </div>
                )}
                {project.profile.marketSize && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Market Size</h2>
                    <p className="text-body text-gray-700">{project.profile.marketSize}</p>
                  </div>
                )}
                {project.profile.howItWorks && (
                  <div>
                    <h2 className="heading-tertiary mb-4">How It Works</h2>
                    <p className="text-body text-gray-700">{project.profile.howItWorks}</p>
                  </div>
                )}
                {project.profile.scientificRatingSystem && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Scientific Rating System</h2>
                    <p className="text-body text-gray-700">{project.profile.scientificRatingSystem}</p>
                  </div>
                )}
                {project.profile.competitionAnalysis && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Competition Analysis</h2>
                    <p className="text-body text-gray-700">{project.profile.competitionAnalysis}</p>
                  </div>
                )}
                {project.profile.whatMakesUsDifferent && (
                  <div>
                    <h2 className="heading-tertiary mb-4">What Makes Us Different?</h2>
                    <p className="text-body text-gray-700">{project.profile.whatMakesUsDifferent}</p>
                  </div>
                )}
                {project.profile.businessModel && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Business Model</h2>
                    <p className="text-body text-gray-700">{project.profile.businessModel}</p>
                  </div>
                )}
                {project.profile.team && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Team</h2>
                    <p className="text-body text-gray-700">{project.profile.team}</p>
                  </div>
                )}
                {project.profile.scientificAdvisors && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Scientific Advisors</h2>
                    <p className="text-body text-gray-700">{project.profile.scientificAdvisors}</p>
                  </div>
                )}
                {project.profile.traction && (
                  <div>
                    <h2 className="heading-tertiary mb-4">Traction</h2>
                    <p className="text-body text-gray-700">{project.profile.traction}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'updates' && project.updates && (
              <div className="space-y-8">
                {project.updates.length === 0 ? (
                  <p className="text-gray-600">No updates available yet.</p>
                ) : (
                  project.updates.map((update, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{update.content}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

