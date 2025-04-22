"use client"

import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import './signup.css'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { app, db } from '@/firebase/firebase.config'
import Loader from '@/components/Loader'

const checkUsernameOrEmailExists = async (username: string, email: string): Promise<{ usernameExists: boolean, emailExists: boolean}> => {
  const q = query(collection(db, "users"), where("username", "==", username.toLowerCase()));
  const r = query(collection(db, "users"), where("email", "==", email.toLowerCase()));
  const usernameSnapshot = await getDocs(q);
  const emailSnapshot = await getDocs(r);
  return {
    usernameExists: !usernameSnapshot.empty,
    emailExists: !emailSnapshot.empty,
  }
};

export default function SignUp() {
  const auth = getAuth(app);
  const [error, setError] = useState<string | null | boolean>(true);
  const [success, setSuccess] = useState<string>('');
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    confirmPassword: false
  })
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { id, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError({
      name: false,
      email: false,
      confirmPassword: false
    })
    setSuccess('')
    setLoading(true)
    setError(null)
    const { usernameExists, emailExists } = await checkUsernameOrEmailExists(formData.name, formData.email);
    try {

      if (formData.password !== formData.confirmPassword) {
        setLoading(false)
        setSuccess("")
        setFormError((prev) => ({ ...prev, confirmPassword: true }))
        setError('Passwords do not match')
        return
      } else if (usernameExists) {
        setSuccess("")
        setFormError((prev) => ({ ...prev, name: true }))
        setLoading(false)
        return
      } else if (emailExists) {
        setSuccess("")
        setFormError((prev) => ({ ...prev, email: true }))
        setLoading(false)
        return
      }

      // 1. Create the user
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)

      const userDocRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userDocRef, {
        email: userCredential.user.email,
        username: formData.name,
        createdAt: new Date().toISOString(),
      })

      setLoading(false)

      setSuccess('User created successfully')

      // 2. Send email verification
      await sendEmailVerification(userCredential.user)
      alert('Verification email sent! Please check your inbox.')
    } catch (error: any) {
      setLoading(false)
      setSuccess("")
      alert(error.message)
    }
  }

  const handleGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
    
    } catch (error: any) {
      alert(error.message)
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to home
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
            sign in to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChage}
                  required
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-black ${formError.name && 'border-red-500 wiggle'}`}
                />
              </div>
              {formError.name && <p className='text-red-500 text-sm'>Name already in use</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChage}
                  required
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-black ${formError.email && 'wiggle'}`}
                />
              </div>
              {formError.email && <p className='text-red-500 text-sm'>Email already in use</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChage}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChage}
                  required
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-black ${formError.confirmPassword ? 'border-red-500 wiggle' : ''}`}
                />
              </div>
              {formError.confirmPassword && <p className='text-red-500 text-sm'>Passwords do not match</p>}
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300`}
                disabled={loading}
              >
                {loading ? <Loader /> : 'Sign up'}
              </button>
              <p className='text-green-500 text-center'>{success}</p>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
                onClick={handleGoogleAuth}
              >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}