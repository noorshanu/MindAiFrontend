const API_BASE_URL = 'http://localhost:4000/api'

export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: string
  token?: string
  user?: Record<string, unknown>
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

async function fetchApi<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  }

  // Add auth token if available
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json()

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data.error || data.message || 'An error occurred'
      )
    }

    return data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(500, 'Network error or server unavailable')
  }
}

// Auth API functions
export const authApi = {
  // Signup
  signup: async (contact: string, type: 'email' | 'phone', password: string) => {
    return fetchApi('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ contact, type, password }),
    })
  },

  // Login with password
  loginWithPassword: async (identifier: string, password: string) => {
    return fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        identifier,
        password,
        loginType: 'password',
      }),
    })
  },

  // Login with OTP
  loginWithOTP: async (phone: string, otp: string) => {
    return fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        identifier: phone,
        otp,
        loginType: 'otp',
      }),
    })
  },

  // Send OTP (using forget-password endpoint for now)
  sendOTP: async (contact: string, type: 'email' | 'phone') => {
    return fetchApi('/auth/forget-password', {
      method: 'POST',
      body: JSON.stringify({ contact, type }),
    })
  },

  // Get current user
  getCurrentUser: async () => {
    return fetchApi('/auth/me')
  },

  // Logout
  logout: async () => {
    return fetchApi('/auth/logout', {
      method: 'POST',
    })
  },
}

// Helper to save token
export const saveToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token)
  }
}

// Helper to remove token
export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }
}

// Helper to get token
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
  return null
}

