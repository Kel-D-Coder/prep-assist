"use client"

import { useState } from 'react'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  PhoneIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    id: 'interview-practice',
    name: 'Interview Practice',
    description: 'Master technical interviews with our AI-powered practice platform.',
    icon: CodeBracketIcon,
    features: [
      {
        name: 'AI-Powered Interviews',
        description: 'Practice with our advanced AI interviewer that adapts to your responses and provides real-time feedback.',
        icon: ChatBubbleLeftRightIcon,
        details: [
          'Natural conversation flow',
          'Technical question generation',
          'Real-time feedback',
          'Adaptive difficulty levels'
        ]
      },
      {
        name: 'Coding Challenges',
        description: 'Solve real-world coding problems with our extensive challenge library.',
        icon: CodeBracketIcon,
        details: [
          'Multiple programming languages',
          'Time complexity analysis',
          'Code review feedback',
          'Best practices guidance'
        ]
      },
      {
        name: 'System Design Practice',
        description: 'Master system design interviews with our comprehensive practice platform.',
        icon: Cog6ToothIcon,
        details: [
          'Common system design scenarios',
          'Scalability considerations',
          'Architecture diagrams',
          'Performance optimization'
        ]
      },
      {
        name: 'Progress Tracking',
        description: 'Monitor your improvement with detailed analytics and progress reports.',
        icon: ChartBarIcon,
        details: [
          'Performance metrics',
          'Skill assessment',
          'Progress reports',
          'Weakness identification'
        ]
      }
    ]
  },
  {
    id: 'recruiter-tools',
    name: 'Recruiter Tools',
    description: 'Streamline your technical hiring process with AI-powered assessment tools.',
    icon: UserGroupIcon,
    features: [
      {
        name: 'Candidate Evaluation',
        description: 'Efficiently assess technical candidates with our comprehensive evaluation system.',
        icon: DocumentTextIcon,
        details: [
          'Automated screening',
          'Technical skill assessment',
          'Behavioral analysis',
          'Cultural fit evaluation'
        ]
      },
      {
        name: 'Assessment Templates',
        description: 'Create and customize technical assessments for different roles and levels.',
        icon: ArrowPathIcon,
        details: [
          'Pre-built templates',
          'Custom question creation',
          'Role-specific assessments',
          'Difficulty scaling'
        ]
      },
      {
        name: 'Team Collaboration',
        description: 'Collaborate with your team throughout the hiring process.',
        icon: UserGroupIcon,
        details: [
          'Shared candidate profiles',
          'Team feedback system',
          'Interview scheduling',
          'Decision tracking'
        ]
      },
      {
        name: 'Analytics Dashboard',
        description: 'Make data-driven hiring decisions with our comprehensive analytics.',
        icon: ChartBarIcon,
        details: [
          'Hiring funnel metrics',
          'Candidate performance',
          'Team efficiency',
          'Diversity analytics'
        ]
      }
    ]
  },
  {
    id: 'ai-call-assistant',
    name: 'AI Call Assistant',
    description: 'Conduct and analyze technical interviews with our AI-powered phone assistant.',
    icon: PhoneIcon,
    features: [
      {
        name: 'Smart Interviewing',
        description: 'Our AI assistant conducts natural, engaging technical interviews.',
        icon: ChatBubbleLeftRightIcon,
        details: [
          'Natural conversation flow',
          'Technical question generation',
          'Real-time analysis',
          'Follow-up questions'
        ]
      },
      {
        name: 'Call Analysis',
        description: 'Get detailed insights from every interview call.',
        icon: ArrowPathIcon,
        details: [
          'Speech-to-text transcription',
          'Technical skill assessment',
          'Communication analysis',
          'Behavioral insights'
        ]
      },
      {
        name: 'Custom Scripts',
        description: 'Create and customize interview scripts for different roles.',
        icon: DocumentTextIcon,
        details: [
          'Role-specific questions',
          'Custom evaluation criteria',
          'Company-specific content',
          'Multi-language support'
        ]
      },
      {
        name: 'Security & Compliance',
        description: 'Enterprise-grade security and compliance features.',
        icon: ShieldCheckIcon,
        details: [
          'End-to-end encryption',
          'Data privacy compliance',
          'Secure storage',
          'Access controls'
        ]
      }
    ]
  }
]

export default function Features() {
  const [selectedService, setSelectedService] = useState('interview-practice')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to succeed
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Discover how our platform can help you achieve your goals, whether you're preparing for interviews,
          hiring technical talent, or conducting technical assessments.
        </p>

        {/* Service Type Selection */}
        <div className="mt-10 flex justify-center">
          <div className="isolate inline-flex rounded-lg shadow-sm">
            {features.map((service, serviceIdx) => (
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
                  ${serviceIdx === features.length - 1 ? 'rounded-r-lg' : '-ml-px'}
                `}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Features */}
        <div className="mt-16">
          {features
            .find(service => service.id === selectedService)
            ?.features.map((feature) => (
              <div key={feature.name} className="mb-16">
                <div className="flex items-center gap-x-4">
                  <feature.icon className="h-12 w-12 text-primary-600" aria-hidden="true" />
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{feature.name}</h3>
                </div>
                <p className="mt-4 text-lg leading-8 text-gray-600">{feature.description}</p>
                <ul role="list" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      <span className="text-sm leading-6 text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Ready to get started?</h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the plan that's right for you and start using our platform today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/pricing"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              View pricing
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 