"use client"

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

const serviceTypes = [
  {
    id: 'interview-practice',
    name: 'Interview Practice',
    description: 'Practice technical interviews with AI-powered feedback and guidance.',
    tiers: [
      {
        name: 'Basic',
        id: 'interview-basic',
        href: '/signup?service=interview&tier=basic',
        price: { monthly: '$19', annually: '$190' },
        description: 'Perfect for beginners starting their interview preparation journey.',
        features: [
          '5 AI-powered interviews per month',
          'Basic coding challenges',
          'General feedback on performance',
          'Community support',
          'Basic analytics',
        ],
        featured: false,
      },
      {
        name: 'Professional',
        id: 'interview-professional',
        href: '/signup?service=interview&tier=professional',
        price: { monthly: '$49', annually: '$490' },
        description: 'For serious candidates looking to excel in technical interviews.',
        features: [
          'Unlimited AI-powered interviews',
          'Advanced coding challenges',
          'Detailed performance feedback',
          'Priority support',
          'Advanced analytics',
          'Custom interview scenarios',
          'Mock system design interviews',
        ],
        featured: true,
      },
    ],
  },
  {
    id: 'recruiter-tools',
    name: 'Recruiter Tools',
    description: 'AI-powered tools to help recruiters find and evaluate the best technical talent.',
    tiers: [
      {
        name: 'Starter',
        id: 'recruiter-starter',
        href: '/signup?service=recruiter&tier=starter',
        price: { monthly: '$99', annually: '$990' },
        description: 'For small teams and individual recruiters.',
        features: [
          '10 candidate evaluations per month',
          'Basic technical assessment templates',
          'Candidate ranking system',
          'Email support',
          'Basic reporting',
        ],
        featured: false,
      },
      {
        name: 'Enterprise',
        id: 'recruiter-enterprise',
        href: '/signup?service=recruiter&tier=enterprise',
        price: { monthly: '$299', annually: '$2,990' },
        description: 'For recruitment teams and agencies.',
        features: [
          'Unlimited candidate evaluations',
          'Custom assessment templates',
          'Advanced candidate matching',
          'Priority support',
          'Team collaboration tools',
          'Advanced analytics',
          'API access',
        ],
        featured: true,
      },
    ],
  },
  {
    id: 'ai-call-assistant',
    name: 'AI Call Assistant',
    description: 'AI-powered phone assistant for conducting and analyzing technical interviews.',
    tiers: [
      {
        name: 'Basic',
        id: 'call-basic',
        href: '/signup?service=call&tier=basic',
        price: { monthly: '$79', annually: '$790' },
        description: 'For individuals and small teams.',
        features: [
          '50 minutes of AI call time per month',
          'Basic conversation analysis',
          'Call recording and transcription',
          'Email support',
          'Basic reporting',
        ],
        featured: false,
      },
      {
        name: 'Professional',
        id: 'call-professional',
        href: '/signup?service=call&tier=professional',
        price: { monthly: '$199', annually: '$1,990' },
        description: 'For teams and organizations.',
        features: [
          '300 minutes of AI call time per month',
          'Advanced conversation analysis',
          'Custom call scripts',
          'Priority support',
          'Team management',
          'Advanced analytics',
          'API integration',
        ],
        featured: true,
      },
    ],
  },
]

export default function Pricing() {
  const [selectedService, setSelectedService] = useState('interview-practice')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose your service and plan
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Select the service that best fits your needs and choose a plan that works for you.
        </p>

        {/* Service Type Selection */}
        <div className="mt-10 flex justify-center">
          <div className="isolate inline-flex rounded-lg shadow-sm">
            {serviceTypes.map((service, serviceIdx) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.id)}
                className={`
                  relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10
                  ${
                    service.id === selectedService
                      ? 'bg-primary-600 text-white ring-primary-600'
                      : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
                  }
                  ${serviceIdx === 0 ? 'rounded-l-lg' : ''}
                  ${serviceIdx === serviceTypes.length - 1 ? 'rounded-r-lg' : '-ml-px'}
                `}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Description */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            {serviceTypes.find(service => service.id === selectedService)?.description}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {serviceTypes
            .find(service => service.id === selectedService)
            ?.tiers.map((tier) => (
              <div
                key={tier.id}
                className={`
                  flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10
                  ${tier.featured ? 'ring-2 ring-primary-600' : ''}
                `}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={`text-lg font-semibold leading-8 ${
                        tier.featured ? 'text-primary-600' : 'text-gray-900'
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price.monthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">or {tier.price.annually} billed annually</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`
                    mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    ${
                      tier.featured
                        ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                        : 'text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300'
                    }
                  `}
                >
                  Get started today
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Still have questions?</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We're here to help you choose the right service and plan for your needs. Contact our sales team for more information.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <Link
                href="/contact"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Contact sales
              </Link>
              <Link href="/faq" className="text-sm font-semibold leading-6 text-gray-900">
                View FAQ <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 