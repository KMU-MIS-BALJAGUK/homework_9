'use client';
import Header from '../components/Header';
import React, { useState } from 'react';
import { Button } from '../components/Button.js';
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
        <div className="container mx-auto rounded-lg  pt-10 pb-10  bg-[#f7f3f9] ">
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
              <Button onClick={() => handleButtonClick('Get started')}>
                Get started &rarr;
              </Button>
              <button
                onClick={() => handleButtonClick('Learn More 2')}
                className="py-2 px-5 rounded-md border border-gray-600 transition-colors duration-200 text-gray-900"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* 카드 섹션 */}

          <div className="container mx-auto px-5 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-start gap-5">
              {/* 첫 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <button className="bg-white py-2 px-5 rounded-md ">
                  Learn More &rarr;
                </button>
              </div>
              {/* 두 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Smarter Workflows
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <button className="bg-white py-2 px-5 rounded-md">
                  Learn More &rarr;
                </button>
              </div>
              {/* 세 번째 카드 */}
              <div className="bg-[#ffffff] p-8 rounded-xl flex-1 text-left">
                <div className="w-16 h-16 bg-[#dcb5ef] rounded-lg  mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Strategies
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer mollis justo non enim lacinia.
                </p>
                <button className="bg-white py-2 px-5 rounded-md  ">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
    </main>
  );
}
