"use client"

import { useState } from 'react'
import Link from 'next/link'
import { 
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  ServerIcon,
  BeakerIcon,
  CommandLineIcon,
  CpuChipIcon,
  ClockIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const practiceTypes = [
  {
    id: 'algorithms',
    name: 'Data Structures & Algorithms',
    description: 'Practice solving algorithmic problems with step-by-step guidance',
    icon: CodeBracketIcon,
    difficulty: 'Medium',
    duration: '45 mins',
    topics: ['Arrays', 'Trees', 'Dynamic Programming', 'Graphs']
  },
  {
    id: 'system-design',
    name: 'System Design',
    description: 'Design scalable systems and discuss architectural decisions',
    icon: ServerIcon,
    difficulty: 'Hard',
    duration: '60 mins',
    topics: ['Scalability', 'Load Balancing', 'Caching', 'Microservices']
  },
  {
    id: 'behavioral',
    name: 'Behavioral Interview',
    description: 'Practice common behavioral questions and improve your responses',
    icon: ChatBubbleLeftRightIcon,
    difficulty: 'Easy',
    duration: '30 mins',
    topics: ['Leadership', 'Problem Solving', 'Teamwork', 'Conflict Resolution']
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Practice React, JavaScript, and web development concepts',
    icon: CommandLineIcon,
    difficulty: 'Medium',
    duration: '45 mins',
    topics: ['React', 'JavaScript', 'CSS', 'Web APIs']
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Discuss backend architecture, APIs, and database design',
    icon: CpuChipIcon,
    difficulty: 'Hard',
    duration: '45 mins',
    topics: ['APIs', 'Databases', 'Security', 'Performance']
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    description: 'Practice testing methodologies and quality assurance concepts',
    icon: BeakerIcon,
    difficulty: 'Medium',
    duration: '30 mins',
    topics: ['Unit Testing', 'Integration Tests', 'TDD', 'QA Processes']
  }
]

export default function Practice() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Practice Interview
          </h1>
          <p className="text-lg text-gray-600">
            Select the type of interview you want to practice. Our AI interviewer will adapt to your chosen topic.
          </p>
        </div>

        {/* Practice Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {practiceTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`
                relative bg-white rounded-2xl p-6 cursor-pointer
                shadow-sm hover:shadow-md
                border transition-all duration-200
                ${
                  selectedType === type.id
                    ? 'border-primary-500 ring-2 ring-primary-500/20'
                    : 'border-gray-100 hover:border-primary-100'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-50 rounded-xl">
                    <type.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {type.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {type.duration}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <AcademicCapIcon className="h-4 w-4 mr-1" />
                      {type.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="mt-12 text-center">
          <Link
            href={selectedType ? `/interview?type=${selectedType}` : '#'}
            className={`
              inline-flex items-center px-8 py-3 rounded-full text-lg font-medium
              transition-all duration-200
              ${
                selectedType
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Start Practice Interview
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            {selectedType
              ? `You selected: ${
                  practiceTypes.find((t) => t.id === selectedType)?.name
                }`
              : 'Please select an interview type to continue'}
          </p>
        </div>
      </main>
    </div>
  )
} 