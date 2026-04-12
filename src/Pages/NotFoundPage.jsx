import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-black mb-4">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      {/* Button */}
      <a
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default NotFoundPage