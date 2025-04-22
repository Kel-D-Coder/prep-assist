"use client"

import { useState } from 'react'
import { 
  PhoneIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const callTypes = [
  {
    id: 'screening',
    name: 'Screening Call',
    description: 'Automated initial screening calls with candidates',
    icon: PhoneIcon,
    duration: '15-20 min',
    features: ['Pre-defined questions', 'Natural conversation flow', 'Candidate evaluation']
  },
  {
    id: 'technical',
    name: 'Technical Interview',
    description: 'In-depth technical discussions and coding assessments',
    icon: VideoCameraIcon,
    duration: '45-60 min',
    features: ['Live coding environment', 'Technical Q&A', 'Skill assessment']
  },
  {
    id: 'feedback',
    name: 'Feedback Session',
    description: 'Post-interview feedback and discussion',
    icon: ChatBubbleLeftRightIcon,
    duration: '20-30 min',
    features: ['Performance analysis', 'Improvement suggestions', 'Next steps']
  },
  {
    id: 'scheduling',
    name: 'Scheduling Assistant',
    description: 'Automated interview scheduling and coordination',
    icon: ClockIcon,
    duration: 'Flexible',
    features: ['Calendar integration', 'Time zone handling', 'Reminder system']
  },
  {
    id: 'analytics',
    name: 'Call Analytics',
    description: 'Detailed analysis of interview performance',
    icon: ChartBarIcon,
    duration: 'Instant',
    features: ['Performance metrics', 'Speech analysis', 'Engagement tracking']
  },
  {
    id: 'documentation',
    name: 'Call Documentation',
    description: 'Automated transcription and documentation',
    icon: DocumentTextIcon,
    duration: 'Instant',
    features: ['Real-time transcription', 'Key points extraction', 'Report generation']
  }
]

export default function AICall() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Call Assistant</h1>
            <p className="text-xl text-gray-600">
              Enhance your interview process with AI-powered call assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {callTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`
                    bg-white rounded-2xl p-6 border transition-all duration-200
                    ${selectedType === type.id 
                      ? 'border-primary-500 ring-2 ring-primary-500/20' 
                      : 'border-gray-200 hover:border-primary-300'
                    }
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary-600 mb-4">
                      <ClockIcon className="h-4 w-4" />
                      <span>{type.duration}</span>
                    </div>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      {type.features.map((feature, index) => (
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

          {selectedType && (
            <div className="mt-12 text-center">
              <a
                href={`/ai-call/${selectedType}`}
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-white font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Start {callTypes.find(t => t.id === selectedType)?.name}
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 