'use client'
import { useState } from 'react'

export default function SanzidaChemical() {
  const [lang, setLang] = useState<'en' | 'bn'>('en')

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en')
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLang}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {lang === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>

      {lang === 'en' ? (
        <>
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Sanzida Chemical Works
          </h1>
          <p className="text-gray-700 mb-6">
            Sanzida Chemical Works is committed to delivering premium quality 
            chemical products with international standards and reliability. Our product is TATA-COIL.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            সানজিদা কেমিক্যাল ওয়ার্কস
          </h1>
          <p className="text-gray-700 mb-6">
            সানজিদা কেমিক্যাল ওয়ার্কস আন্তর্জাতিক মানের উচ্চ গুণগত 
            রাসায়নিক পণ্য সরবরাহে প্রতিশ্রুতিবদ্ধ।
          </p>
        </>
      )}

      <div className="mt-6">
        <img
          src="/sanzida.jpg"
          alt="Sanzida Chemical"
          className="w-full rounded-lg shadow"
        />
      </div>

    </div>
  )
}
