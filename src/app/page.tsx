import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION START */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Floating Lights */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-float top-10 left-10"></div>

  <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float delay-2000 bottom-10 right-10"></div>

  <div className="absolute w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-float delay-4000 top-1/2 left-1/3"></div>

</div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">

    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeIn">
      Premium Industrial & Cleaning Chemical Solutions
    </h1>

    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
      Trusted by businesses across Bangladesh for high-quality, safe,
      and reliable chemical products under Monir Chemical & Sanzida Chemical.
    </p>

    <div className="flex justify-center gap-6 animate-fadeIn delay-300">
      <a
        href="/monir-chemical"
        className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg hover:scale-105"
      >
        Explore Products
      </a>

      <a
        href="/contact"
        className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 hover:scale-105"
      >
        Contact Us
      </a>
    </div>

  </div>

</section>
      {/* HERO SECTION END */}

      {/* ABOUT SECTION START */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About Our Company
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Monir & Sanzida Chemical Group is a trusted manufacturer and supplier
            of high-quality industrial and household cleaning chemicals.
            We focus on safety, performance, and long-term business partnerships.
          </p>

        </div>
      </section>
      {/* ABOUT SECTION END */}

            {/* PRODUCT SECTION START */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Companies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Monir Chemical Card */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 text-center transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400">
              <div className="mb-6">
  <Image
    src="/images/monir.jpg"
    alt="Monir Chemical"
    width={500}
    height={400}
    className="rounded-lg object-contain w-full h-auto"
  />
</div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Monir Chemical
              </h3>

              <p className="text-gray-600 mb-6">
                Industrial chemical manufacturer specializing in bulk production
                and commercial supply.
              </p>

              <a
                href="/monir-chemical"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                View Details
              </a>
            </div>

            {/* Sanzida Chemical Card */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 text-center transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400">
              
<div className="mb-6">
  <Image
    src="/images/sanzida.jpg"
    alt="Sanzida Chemical"
    width={500}
    height={400}
    className="rounded-lg object-contain w-full h-auto"
  />
</div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Sanzida Chemical
              </h3>

              <p className="text-gray-600 mb-6">
                Premium cleaning chemical brand focused on quality and consumer safety.
              </p>

              <a
                href="/sanzida-chemical"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                View Details
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* PRODUCT SECTION END */}

    </div>
  );
}