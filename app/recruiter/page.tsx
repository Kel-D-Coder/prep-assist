"use client"

import { useState } from 'react'
import { 
  UserGroupIcon,
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  EnvelopeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const recruiterTools = [
  {
    id: 'candidate-search',
    name: 'Candidate Search',
    description: 'Advanced search and filtering for finding the perfect candidates',
    icon: UserGroupIcon,
    features: ['AI-powered matching', 'Skill-based filtering', 'Experience analysis']
  },
  {
    id: 'job-posting',
    name: 'Job Posting',
    description: 'Create and manage job listings with AI assistance',
    icon: BriefcaseIcon,
    features: ['Template generation', 'SEO optimization', 'Multi-platform posting']
  },
  {
    id: 'resume-analysis',
    name: 'Resume Analysis',
    description: 'Automated resume screening and analysis',
    icon: DocumentMagnifyingGlassIcon,
    features: ['Skill extraction', 'Experience evaluation', 'Red flag detection']
  },
  {
    id: 'analytics',
    name: 'Recruitment Analytics',
    description: 'Track and analyze your recruitment process',
    icon: ChartBarIcon,
    features: ['Pipeline metrics', 'Time-to-hire analysis', 'Source effectiveness']
  },
  {
    id: 'communication',
    name: 'Candidate Communication',
    description: 'Automated and personalized candidate communication',
    icon: EnvelopeIcon,
    features: ['Email templates', 'SMS notifications', 'Status updates']
  },
  {
    id: 'scheduling',
    name: 'Interview Scheduling',
    description: 'Streamline interview coordination',
    icon: CalendarIcon,
    features: ['Calendar integration', 'Automated reminders', 'Time zone handling']
  }
]

export default function Recruiter() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Recruiter Tools</h1>
            <p className="text-xl text-gray-600">
              Streamline your recruitment process with AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruiterTools.map((tool) => {
              const Icon = tool.icon
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`
                    bg-white rounded-2xl p-6 border transition-all duration-200
                    ${selectedTool === tool.id 
                      ? 'border-primary-500 ring-2 ring-primary-500/20' 
                      : 'border-gray-200 hover:border-primary-300'
                    }
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
                </button>
              )
            })}
          </div>

          {selectedTool && (
            <div className="mt-12 text-center">
              <a
                href={`/recruiter/${selectedTool}`}
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-white font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Open {recruiterTools.find(t => t.id === selectedTool)?.name}
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 