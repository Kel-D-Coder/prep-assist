import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CodeBracketIcon, ChatBubbleLeftRightIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Interviews',
    description: 'Practice with our advanced AI that simulates real technical interviews and provides instant feedback.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Code Challenges',
    description: 'Solve real-world coding problems with our extensive library of challenges across different difficulty levels.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Performance Analytics',
    description: 'Track your progress with detailed analytics and personalized recommendations for improvement.',
    icon: ChartBarIcon,
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Master Your Technical Interviews with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Practice technical interviews with our AI-powered platform. Get instant feedback, improve your skills, and land your dream job.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/signup"
                className="btn-primary"
              >
                Get started
              </Link>
              <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <ArrowRightIcon className="h-4 w-4 inline ml-1" />
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Developer working on code"
                  width={1470}
                  height={980}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Practice Smarter</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to ace your technical interviews
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines AI technology with proven interview techniques to help you prepare effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-32 sm:mt-40">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to start practicing?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join thousands of developers who have improved their interview skills with our platform.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/signup"
                    className="btn-primary"
                  >
                    Get started
                  </Link>
                  <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                    View pricing <ArrowRightIcon className="h-4 w-4 inline ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 