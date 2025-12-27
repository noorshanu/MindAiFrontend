# Profile Picture Upload - Usage Guide

## ✅ Implementation Complete!

The profile picture upload feature has been fully implemented with Cloudinary integration.

## 📦 What's Been Added

### Backend:
1. ✅ Cloudinary configuration (`src/config/cloudinary.ts`)
2. ✅ Upload middleware with validation (`src/middleware/upload.ts`)
3. ✅ Upload endpoint (`POST /api/profile/upload-picture`)
4. ✅ Environment variables configured (`.env`)

### Frontend:
1. ✅ Profile API client with upload function (`src/libs/api.ts`)
2. ✅ ProfilePictureUpload component (`src/components/ProfilePictureUpload.tsx`)

## 🚀 How to Use

### 1. In Your Dashboard/Profile Page

```tsx
'use client'

import React, { useState, useEffect } from 'react'
import ProfilePictureUpload from '@/components/ProfilePictureUpload'
import { profileApi, authApi } from '@/libs/api'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      const response = await authApi.getCurrentUser()
      if (response.success && response.user) {
        setUser(response.user)
      }
    } catch (error) {
      console.error('Failed to load profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUploadSuccess = (url: string) => {
    // Update local user state
    setUser({ ...user, profilePicture: url })
    console.log('Profile picture updated:', url)
  }

  const handleUploadError = (error: string) => {
    console.error('Upload error:', error)
    // You can show a toast notification here
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
        
        <ProfilePictureUpload
          currentPicture={user?.profilePicture}
          onUploadSuccess={handleUploadSuccess}
          onUploadError={handleUploadError}
          size="large"
        />
      </div>
    </div>
  )
}
```

### 2. Component Props

```tsx
interface ProfilePictureUploadProps {
  currentPicture?: string        // Current profile picture URL
  onUploadSuccess?: (url: string) => void  // Callback on successful upload
  onUploadError?: (error: string) => void // Callback on upload error
  size?: 'small' | 'medium' | 'large'     // Size of the profile picture display
}
```

### 3. Features

- ✅ **Image Preview**: Shows preview before and after upload
- ✅ **Drag & Drop**: Users can drag images onto the component
- ✅ **File Validation**: Validates file type and size (max 5MB)
- ✅ **Upload Progress**: Shows loading state during upload
- ✅ **Error Handling**: Displays error messages
- ✅ **Auto-optimization**: Cloudinary automatically optimizes images
- ✅ **Face Detection**: Auto-crops to face (500x500px)
- ✅ **Responsive**: Works on all screen sizes

## 🔧 Backend Endpoint

### POST `/api/profile/upload-picture`

**Authentication:** Required (Bearer token)

**Request:**
- Content-Type: `multipart/form-data`
- Field name: `profilePicture`
- File: Image file (max 5MB)

**Response:**
```json
{
  "success": true,
  "message": "Profile picture uploaded successfully",
  "profilePicture": "https://res.cloudinary.com/...",
  "user": { ... }
}
```

## 🎨 Styling

The component uses Tailwind CSS classes that match your existing design:
- Primary color: `#84B357` (green)
- Secondary color: `#2C5F5D` (teal)
- Hover effects and transitions included

## 🔒 Security Features

- ✅ File type validation (images only)
- ✅ File size limit (5MB)
- ✅ Authentication required
- ✅ Secure Cloudinary upload
- ✅ Automatic image optimization
- ✅ Overwrites previous uploads (same user)

## 📝 Environment Variables

Make sure your `.env` file in the backend has:

```env
CLOUDINARY_CLOUD_NAME=dbxipdjpp
CLOUDINARY_API_KEY=774282782833695
CLOUDINARY_API_SECRET=0LED7lzDKakUhJ3xIl-m4bcH57Q
```

## 🧪 Testing

1. Start your backend server: `npm run dev`
2. Start your frontend: `npm run dev`
3. Navigate to a page with the ProfilePictureUpload component
4. Click or drag an image to upload
5. Check that the image appears and is optimized

## 🐛 Troubleshooting

**Upload fails:**
- Check Cloudinary credentials in `.env`
- Verify file size is under 5MB
- Check network tab for error details

**Image not displaying:**
- Verify the URL is returned correctly
- Check CORS settings if needed
- Ensure Cloudinary URL is accessible

**Type errors:**
- Make sure all packages are installed: `npm install`
- Check TypeScript configuration

## 📚 Next Steps

You can enhance this further by:
- Adding image cropping before upload
- Adding multiple size variants
- Adding delete functionality
- Adding upload progress percentage
- Adding image compression on client side

