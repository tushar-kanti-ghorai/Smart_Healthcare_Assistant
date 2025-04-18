import React, { useState, useContext } from 'react'
import { marked } from 'marked'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'  // Importing react-toastify

const ImageAnalyzer = () => {
  const navigate = useNavigate()
  const { token, userData } = useContext(AppContext) // Access token and user data from context

  const [image, setImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [query, setQuery] = useState('')
  const [llamaResponse, setLlamaResponse] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleQuerySubmit = async () => {
    if (!token || !userData) {
      // Show toast notification and redirect to login page if not logged in
      toast.error("⚠️ You need to be logged in to analyze the image. Redirecting to login page...");
      setTimeout(() => navigate('/login'), 2000); // Redirect after a short delay
      return
    }

    if (!image || !query.trim()) {
      setError('⚠️ Please upload an image and enter a query.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('query', query)

      const res = await fetch('http://127.0.0.1:8000/upload_and_query', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.detail || 'An error occurred.')

      setLlamaResponse(marked.parse(result.llama))
    } catch (err) {
      setError(err.message)
      setLlamaResponse('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary text-white font-sans p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white shadow-md">AI-DOCTOR (MEDICAL CHATBOT) ANALYZE IMAGE</h1>
      </div>

      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">📤 Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4 block w-full text-white" />
          {previewUrl && <img src={previewUrl} alt="Preview" className="w-full rounded-lg shadow" />}
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">💬 Ask Question</h2>
          <textarea
            rows="4"
            placeholder="Enter your question about the image"
            className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleQuerySubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-3"
            disabled={loading}
          >
            {loading ? 'Processing... ⏳' : '🚀 Submit Query'}
          </button>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-1 gap-8 mb-8">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-green-400">AI DOCTOR RESPONSE</h2>
          <div
            className="mt-4 bg-gray-800 p-6 rounded-lg text-gray-300"
            dangerouslySetInnerHTML={{ __html: llamaResponse }}
          />
        </div>
      </div>

      {error && (
        <div className="mt-8 p-4 bg-red-500 text-white rounded">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default ImageAnalyzer
