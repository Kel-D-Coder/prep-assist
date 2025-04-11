"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { 
  MicrophoneIcon, 
  StopIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline'

type Message = {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isSpeaking?: boolean
}

type InterviewStatus = 'not-started' | 'in-progress' | 'paused' | 'completed'

export default function Interview() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [interviewStatus, setInterviewStatus] = useState<InterviewStatus>('in-progress')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isAISpeaking, setIsAISpeaking] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAISpeaking = (message: string) => {
    setIsAISpeaking(true)
    const words = message.split(' ')
    let currentMessage = ''
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        currentMessage += words[currentIndex] + ' '
        setMessages(prev => {
          const newMessages = [...prev]
          newMessages[newMessages.length - 1] = {
            ...newMessages[newMessages.length - 1],
            content: currentMessage,
            isSpeaking: true
          }
          return newMessages
        })
        currentIndex++
      } else {
        clearInterval(interval)
        setIsAISpeaking(false)
        setMessages(prev => {
          const newMessages = [...prev]
          newMessages[newMessages.length - 1] = {
            ...newMessages[newMessages.length - 1],
            isSpeaking: false
          }
          return newMessages
        })
      }
    }, 100)
  }

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        role: 'user',
        content: input,
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setInput('')

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          role: 'assistant',
          content: 'That sounds impressive.',
          timestamp: new Date(),
          isSpeaking: true
        }
        setMessages(prev => [...prev, aiResponse])
        simulateAISpeaking(aiResponse.content)
      }, 1000)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AI Interviewer */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
            <div className="relative z-10">
              <div className="w-28 h-28 bg-primary-50 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary-100">
                <ChatBubbleLeftRightIcon className="h-14 w-14 text-primary-600" />
              </div>
              <h2 className="text-gray-900 text-2xl font-medium mb-2 text-center">AI Interviewer</h2>
              {isAISpeaking && (
                <div className="flex items-center gap-2 mt-4 bg-primary-50 rounded-full px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-primary-600 rounded animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1 h-4 bg-primary-600 rounded animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1 h-4 bg-primary-600 rounded animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-primary-700 text-sm">Speaking...</span>
                </div>
              )}
            </div>
          </div>

          {/* User */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
            <div className="relative z-10">
              <div className="w-28 h-28 bg-gray-50 rounded-full flex items-center justify-center mb-6 ring-4 ring-gray-100">
                <UserIcon className="h-14 w-14 text-gray-600" />
              </div>
              <h2 className="text-gray-900 text-2xl font-medium mb-2 text-center">You</h2>
              {isRecording && (
                <div className="flex items-center gap-2 mt-4 bg-red-50 rounded-full px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-red-700 text-sm">Recording...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-12 flex items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={toggleRecording}
            className={`
              rounded-full p-5 transition-all duration-200
              ${
                isRecording 
                  ? 'bg-red-500 text-white ring-4 ring-red-500/20 hover:bg-red-600'
                  : 'bg-primary-600 text-white hover:bg-primary-700 ring-4 ring-primary-500/20'
              }
            `}
          >
            {isRecording ? (
              <StopIcon className="h-7 w-7" />
            ) : (
              <MicrophoneIcon className="h-7 w-7" />
            )}
          </button>
          <button
            onClick={() => setInterviewStatus('completed')}
            className="rounded-full bg-gray-100 px-8 py-3 text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            End Interview
          </button>
        </div>

        {/* Current Message */}
        {messages.length > 0 && (
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <SpeakerWaveIcon className="h-5 w-5 text-primary-600" />
                <span className="text-primary-700 text-sm font-medium">Current Message</span>
              </div>
              <p className="text-gray-900 text-lg text-center">
                {messages[messages.length - 1].content}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 