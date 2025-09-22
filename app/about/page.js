'use client';

import Header from '../components/Header';

export default function about() {
  return (
    <main>
      <Header />
      {/* Hero 섹션 */}
      <section className="text-center mt-10 mb-16">
        <p className="text-sm font-semibold text-[#cdb3fd] uppercase tracking-wide">
          Subtitle
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Simplifying Your Options to Make <br />
          Decision-Making Easier
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae elementum ligula. Duis cursus, mi quis viverra commodo diam
          lorem vitae erat.
        </p>
      </section>

      {/* 카드 레이아웃 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 큰 카드 */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
            Subtitle
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Innovative Strategies for Unmatched Results
          </h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius sit amet.
          </p>
          <a href="#" className="mt-4 inline-block text-black font-medium">
            Learn More →
          </a>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
            Subtitle
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Comprehensive Solutions Tailored to Your Needs
          </h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius elementum ligula. Duis cursus, mi quis viverra commodo diam
            lorem vitae erat.
          </p>
          <a href="#" className="mt-4 inline-block text-black font-medium">
            Learn More →
          </a>
        </div>

        {/* 하단 카드 2개 */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
            Subtitle
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Tailored Solutions
          </h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius sit amet.
          </p>
          <a href="#" className="mt-4 inline-block text-black font-medium">
            Learn More →
          </a>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
            Subtitle
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Smarter Workflows
          </h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius sit amet.
          </p>
          <a href="#" className="mt-4 inline-block text-black font-medium">
            Learn More →
          </a>
        </div>

        {/* 오른쪽 큰 카드 */}
        <div className="md:col-span-2 bg-purple-50 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
            Subtitle
          </p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">
            Redefining Standards with Exceptional Features
          </h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius sit amet. Duis cursus, mi quis viverra commodo diam lorem
            vitae erat.
          </p>
          <a href="#" className="mt-4 inline-block text-black font-medium">
            Learn More →
          </a>
        </div>
      </section>
    </main>
  );
}