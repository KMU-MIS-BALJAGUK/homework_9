'use client';
import Header from '../components/Header';
import React, { useState } from 'react';
import Button, { LearnMore } from '../components/Button.js';
import { GetStarted } from '../components/Button.js';
import { LearnMoreButton } from '../components/Button.js';
export default function PricingPage() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    alert(`${buttonName} 버튼을 클릭했습니다!`);
  };

  return (
    <main>
      <Header />
      <section className="bg-[#ffffff] py-8 text-center">
        <div className="container mx-auto rounded-lg  pt-10 pb-10  bg-[#F5F5F5] ">
          <p className="text-xs font-semibold text-[#D3BDFC] mb-2 ">SUBTITLE</p>
          <div className="container mx-auto px-5 max-w-7xl gap-4 mb-24">
            <h1 className="text-4xl font-bold mb-4">
              Designed to Deliver Real Value <br />
              and Tangible Results
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis justo non enim lacinia.
            </p>
            <div className="flex justify-center gap-4">
              <GetStarted onClick={() => handleButtonClick('Get started')}>
                Get started &rarr;
              </GetStarted>
              <LearnMoreButton
                onClick={() => handleButtonClick('Learn More 2')}
              >
                Learn More
              </LearnMoreButton>
            </div>
          </div>
          {/* 카드 섹션 */}

          <div className="container mx-auto px-5 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-start gap-5">
              {/* 첫 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left flex flex-col">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <LearnMore />
              </div>
              {/* 두 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left flex flex-col">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Smarter Workflows
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <LearnMore />
              </div>
              {/* 세 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left flex flex-col">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg  mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Strategies
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {하위섹션} */}
      <section className="bg-[#ffffff] py-8 ">
        <div className="container mx-auto rounded-lg  pt-10 pb-10  bg-[#F5F5F5] ">
          <p className="text-xs font-semibold text-[#D3BDFC] mb-2 text-left">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories That <br /> Inspire Confidence <br /> in What We Do
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit. Suspendisse varius elementum tristique.
          </p>
          <div className="flex items-center justify-between mt-10">
            {/* 1. 화살표 버튼 영역 */}
            <div className="flex space-x-4">
              {/* 왼쪽 화살표 */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-purple-200 text-purple-700"
              >
                &larr;
              </button>
              {/* 오른쪽 화살표 */}
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-purple-200 text-purple-700"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
