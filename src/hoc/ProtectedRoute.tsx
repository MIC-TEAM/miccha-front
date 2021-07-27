import React from 'react'
import { apiClient } from '../lib/apiClient'

const ProtectedRoute = (ProtectedComponent: React.FC) => {
  const AuthenticateCheck = () => {
    const accessToken = apiClient.defaults.headers.common['Authorization']

    if (typeof location !== 'undefined' && !accessToken) {
      location.href = '/sign_in'
      return null
    }

    return <ProtectedComponent />
  }

  return AuthenticateCheck
}

export default ProtectedRoute
