'use client'

import { useState } from 'react'

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
    contribution: '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        setIsSubmitting(false)
        alert('Server returned an invalid response. Please try again.')
        return
      }

      if (response.ok) {
        setSubmitted(true)
        setIsSubmitting(false)
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            interests: '',
            contribution: '',
            message: '',
          })
          setAgreed(false)
        }, 3000)
      } else {
        setIsSubmitting(false)
        alert(data?.error || 'Failed to submit application. Please try again.')
      }
    } catch (error) {
      setIsSubmitting(false)
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="card bg-green-50 border-green-200 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          Your membership application has been submitted. We&apos;ll be in touch soon!
        </p>
      </div>
    )
  }

  return (
    <div className="card bg-white">
      <h3 className="heading-tertiary mb-6 text-center">
        Apply for Membership
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            What interests you about our community?
          </label>
          <textarea
            id="interests"
            name="interests"
            rows={3}
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
            placeholder="Tell us what draws you to Creative-Community..."
          />
        </div>

        <div>
          <label
            htmlFor="contribution"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            How would you like to contribute? (Optional)
          </label>
          <textarea
            id="contribution"
            name="contribution"
            rows={3}
            value={formData.contribution}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
            placeholder="Skills, time, resources, or ideas you'd like to share..."
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
            placeholder="Anything else you'd like us to know..."
          />
        </div>

        {/* Legal Agreement */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreement"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300 rounded"
            />
            <label htmlFor="agreement" className="text-sm text-gray-700">
              <span className="font-semibold">I understand and agree to the following:</span>
              <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                <li>This is a voluntary community with no financial commitments</li>
                <li>There are no guaranteed returns or profit-sharing</li>
                <li>Contributions are voluntary and based on personal interest</li>
                <li>I have read and understood the community values and purpose</li>
              </ul>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!agreed || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}

