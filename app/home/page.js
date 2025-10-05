'use client';

import Header from '../components/Header';
import { GetStarted, LearnMoreButton } from '../components/Button';

export default function Home() {
  const handleButtonClick = (buttonName) => {
    alert(`${buttonName} 버튼을 클릭했습니다!`);
  };

  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero 섹션 */}
      <section className="text-center pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-[#D3BDFC] uppercase tracking-wide mb-4">
            SUBTITLE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering businesses with
            <br />
            innovative strategies
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra commodo diam lorem vitae erat.
          </p>
          
          {/* 버튼 그룹 */}
          <div className="flex justify-center gap-4">
            <GetStarted onClick={handleButtonClick} buttonValue="Get started">
              Get started &rarr;
            </GetStarted>
            <LearnMoreButton onClick={handleButtonClick} buttonValue="Learn more">
              Learn more
            </LearnMoreButton>
          </div>
        </div>
      </section>

      {/* 큰 보라색 박스 영역 */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F3ECFF] rounded-2xl h-[300px] md:h-[400px]">
            {/* 이미지나 추가 콘텐츠가 들어갈 영역 */}
          </div>
        </div>
      </section>

      {/* Features 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#D3BDFC] uppercase tracking-wide mb-4">
              SUBTITLE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose What Fits You and
              <br />
              Elevate Your Business Goals
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique.
            </p>
          </div>

          {/* 6개 카드 그리드 (2행 3열) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Tailored Solutions */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra commodo diam lorem vitae erat.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Smarter Workflows */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smarter Workflows
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra commodo diam lorem vitae erat.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: Scalable Strategies */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scalable Strategies
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra commodo diam lorem vitae erat.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4: Seamless Integration */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Seamless Integration
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 5: Dynamic Features */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dynamic Features
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 6: Reliable Support */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliable Support
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum.
              </p>
              <div className="flex justify-start">
                <div className="w-10 h-10 bg-[#C1A0FD] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

