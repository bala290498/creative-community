'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Project {
  slug: string
  title: string
  category: 'food' | 'education' | 'entertainment' | 'b2b' | 'clothing'
  type: 'community-owned' | 'in-house' | 'trusted-partner'
  bannerImage?: string
  description: string
  date: string
  tags?: string[]
}

interface ProjectsListProps {
  type: 'community-owned' | 'in-house' | 'trusted-partner'
  title: string
}

const categories = ['all', 'food', 'education', 'entertainment', 'b2b', 'clothing']

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

export default function ProjectsList({ type, title }: ProjectsListProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      )
    }
  }, [selectedCategory, projects])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/projects?type=${type}`)
      const data = await response.json()
      if (data.projects) {
        setProjects(data.projects)
        setFilteredProjects(data.projects)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

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

  if (loading) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider">
              {title}
            </span>
          </div>
          <h2 className="heading-secondary">Member-Driven Projects</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 capitalize ${
                selectedCategory === category
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/${type}/${project.slug}`}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Banner Image */}
                  {project.bannerImage ? (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.bannerImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                      <span className="text-secondary-600 text-4xl font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs font-medium px-2 py-1 rounded-full ${getTagColor(tag)}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <p className="text-sm text-gray-500">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

