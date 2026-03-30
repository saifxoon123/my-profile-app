'use client'
import { useState } from 'react'

export default function MonirChemical() {
  const [lang, setLang] = useState<'en' | 'bn'>('en')

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en')
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLang}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {lang === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>

      {lang === 'en' ? (
        <>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Monir Chemical
          </h1>
          <p className="text-gray-700 mb-6">
            Monir Chemical is a trusted supplier of high-quality industrial chemicals.
            We focus on safety, reliability, and customer satisfaction.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            মনির কেমিক্যাল
          </h1>
          <p className="text-gray-700 mb-6">
            মনির কেমিক্যাল একটি বিশ্বস্ত শিল্প রাসায়নিক সরবরাহকারী প্রতিষ্ঠান।
            আমরা গুণগত মান, নিরাপত্তা এবং গ্রাহক সন্তুষ্টির উপর গুরুত্ব দিই।
          </p>
        </>
      )}

      <div className="mt-6">
        <img
          src="/monir.jpg"
          alt="Monir Chemical"
          className="w-full rounded-lg shadow"
        />
      </div>

    </div>
  )
}