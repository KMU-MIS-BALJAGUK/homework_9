'use client';

import Header from '../components/Header';
import { LearnMoreButton } from '../components/Button';

export default function about() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
          {/* Comprehensive Solutions 카드 */}
          <div className="rounded-lg overflow-hidden flex flex-col border border-[#c1a0fd] md:row-span-2">
            <div className="bg-[#f3ecff] h-[342px]"></div>
            <div className="bg-white p-6 flex flex-col">
              <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
                Subtitle
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Comprehensive Solutions Tailored to Your Needs
              </h3>
              <p className="mt-10 text-gray-600 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius elementum tristique. 
                Duis cursus, mi quis viverra ut commodo diam libero vitae erat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <LearnMoreButton />
            </div>
          </div>

          {/* Innovative Strategies 카드 */}
          <div className="rounded-lg border border-[#c1a0fd] grid grid-cols-2 overflow-hidden">
            {/* 왼쪽: 흰 배경 + 텍스트 */}
            <div className="bg-white p-6 flex flex-col">
              <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
                Subtitle
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Innovative Strategies for Unmatched Results
              </h3>
              <p className="mt-2 text-gray-600 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius sit amet.
              </p>
              <LearnMoreButton />
            </div>
            {/* 오른쪽: 보라색 배경 */}
            <div className="bg-[#f3ecff]"></div>
          </div>

          {/* Redefining Standards 카드 */}
          <div className="rounded-lg overflow-hidden flex flex-col border border-[#c1a0fd] md:row-span-2">
            <div className="bg-[#f3ecff] h-[342px]"></div>
            <div className="bg-white p-6 flex flex-col"> 
              <p className="text-sm font-semibold text-[#cdb3fd] uppercase">
              Subtitle
            </p>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Redefining Standards with Exceptional Features
            </h3>
            <p className="mt-2 text-gray-600 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius elementum tristique.
              Duis cursus, mi quis viverra ut commodo diam libero vitae erat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <LearnMoreButton />
            </div>
          </div>

          {/* 하단 작은 카드 2개 컨테이너 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#c1a0fd] flex flex-col">
              <div className="w-16 h-16 bg-[#f3ecff] rounded-lg mb-4"></div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Tailored Solutions
              </h3>
              <p className="mt-2 text-gray-600 flex-grow">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Suspendis varius elementum tristique.
              </p>
              <LearnMoreButton />
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c1a0fd] flex flex-col">
              <div className="w-16 h-16 bg-[#f3ecff] rounded-lg mb-4"></div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Smarter Workflows
              </h3>
              <p className="mt-2 text-gray-600 flex-grow">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Suspendis varius elementum tristique.
                varius sit amet.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}