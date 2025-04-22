"use client"

import { useState } from 'react'
import { 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  EnvelopeIcon,
  CalendarIcon,
  VideoCameraIcon,
  ClockIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const tools = [
  {
    id: 'practice',
    name: 'Practice Interviews',
    description: 'Practice technical and behavioral interviews with AI',
    icon: ChatBubbleLeftRightIcon,
    features: ['Technical interviews', 'Behavioral interviews', 'Real-time feedback'],
    href: '/practice'
  },
  {
    id: 'ai-call',
    name: 'AI Call Assistant',
    description: 'AI-powered interview assistance and automation',
    icon: PhoneIcon,
    features: ['Screening calls', 'Technical interviews', 'Feedback sessions'],
    href: '/ai-call'
  },
  {
    id: 'recruiter',
    name: 'Recruiter Tools',
    description: 'Tools for streamlining the recruitment process',
    icon: UserGroupIcon,
    features: ['Candidate search', 'Job posting', 'Resume analysis'],
    href: '/recruiter'
  }
]

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Interview Tools</h1>
            <p className="text-xl text-gray-600">
              Access all our tools to enhance your interview process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <a
                  key={tool.id}
                  href={tool.href}
                  className={`
                    bg-white rounded-2xl p-6 border transition-all duration-200
                    hover:border-primary-300 hover:shadow-md
                    border-gray-200
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
} 