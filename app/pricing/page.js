'use client';
import Header from '../components/Header';
import React, { useState } from 'react';
import {
  LearnMore,
  GetStarted,
  LearnMoreButton,
} from '../components/Button.js';
export default function PricingPage() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    alert(`${buttonName} 버튼을 클릭했습니다!`);
  };

  // 총 카드의 개수 (예시: 4개)
  const totalSlides = 4;

  // 현재 보여줄 카드의 인덱스 (0, 1, 2, ...)
  const [currentSlide, setCurrentSlide] = useState(0);

  // 다음(오른쪽) 버튼 핸들러
  const handleNext = () => {
    // 현재 슬라이드 번호가 마지막이 아니면 +1, 마지막이면 다시 0으로 돌아감
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // 이전(왼쪽) 버튼 핸들러
  const handlePrev = () => {
    // 현재 슬라이드 번호가 0이 아니면 -1, 0이면 마지막 번호로 돌아감
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
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
              <GetStarted onClick={handleButtonClick} buttonValue="Get started">
                Get started &rarr;
              </GetStarted>
              <LearnMoreButton
                onClick={handleButtonClick}
                buttonValue="Learn More"
              >
                Learn More
              </LearnMoreButton>
            </div>
          </div>
          {/* 카드 섹션 */}

          <div className="container mx-auto px-5 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-start gap-5">
              {/* 첫번째 카드 */}
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
      <section className="bg-[#ffffff] py-8  ">
        <div className="container mx-auto rounded-lg  pt-10 pb-10  bg-[#F5F5F5]  px-12 text-left ">
          <div className="flex gap-6">
            {/* 1. 왼쪽 영역: 텍스트와 버튼을 모두 담는 영역 (W-1/2로 고정) */}
            <div className="w-[40%]  flex-shrink-0">
              <p className="text-xs font-semibold text-[#D3BDFC] mb-2 text-left">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories That <br /> Inspire Confidence <br /> in What We
                Do
              </h2>
              <p className="text-gray-600 mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit. Suspendisse varius elementum tristique.
              </p>

              {/* 1-A. 화살표 버튼 영역 */}
              <div className="flex space-x-4 mt-8">
                {/* 왼쪽 화살표 */}
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3ECFF] text-black"
                >
                  &lt;
                </button>
                {/* 오른쪽 화살표 */}
                <button
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C1A0FD] text-black"
                >
                  &gt;
                </button>
              </div>
            </div>
            {/* 2. 오른쪽 영역: 카드 캐러셀 컨테이너 (W-1/2로 고정, 1번 DIV의 형제여야 함) */}
            <div className="w-[60%]">
              {/* 뷰포트 */}
              <div className="relative overflow-hidden w-full flex-grow-0 flex-shrink-0">
                {/* 카드들을 담고 실제로 움직일 내부 트랙 */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 33.333333}%)`,
                  }}
                >
                  {/* 후기 카드 컴포넌트 (각 카드는 33.33% 너비를 가짐) */}
                  {/* {카드1} */}
                  <div className="w-[33.33333%] flex-shrink-0 mr-4 ">
                    <div className="bg-[#F3ECFF] rounded-lg min-h-80 shadow-lg flex flex-col justify-between p-0 m-2">
                      {/* A. 후기 텍스트 영역 (상단) - 패딩을 내부에 적용 */}
                      {/* 현재 이미지에는 후기 텍스트가 안 보이지만, 공간을 위해 min-h-60을 사용 */}
                      <div className="p-4 min-h-60 flex-grow">
                        {/* 텍스트가 있다면 여기에 넣습니다. (예시) */}
                        <p className="text-gray-700 text-lg italic">
                          {/* "후기 내용이 여기에 들어갑니다." */}
                        </p>
                      </div>

                      {/* B. 사용자 정보 영역 (하단) - 별도의 흰색 배경 영역 */}
                      <div className="bg-white p-4 rounded-b-lg flex items-center mt-auto">
                        {/* 🌟🌟🌟 수정된 아바타 영역 (보라색 테두리와 사람 아이콘) 🌟🌟🌟 */}
                        <div className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center mr-3 bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-purple-600"
                          >
                            {/* 사람 (User) 모양 아이콘 */}
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>

                        {/* 이름과 직책 */}
                        <div>
                          <p className="font-semibold text-gray-900">
                            John Doe
                          </p>
                          <p className="text-sm text-gray-500">CEO, XYZ Corp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {카드2} */}
                  <div className="w-[33.33333%] flex-shrink-0 mr-4">
                    <div className="bg-[#F3ECFF] rounded-lg min-h-80 shadow-lg flex flex-col justify-between p-0 m-2">
                      {/* A. 후기 텍스트 영역 (상단) - 패딩을 내부에 적용 */}
                      {/* 현재 이미지에는 후기 텍스트가 안 보이지만, 공간을 위해 min-h-60을 사용 */}
                      <div className="p-4 min-h-60 flex-grow">
                        {/* 텍스트가 있다면 여기에 넣습니다. (예시) */}
                        <p className="text-gray-700 text-lg italic">
                          {/* "후기 내용이 여기에 들어갑니다." */}
                        </p>
                      </div>

                      {/* B. 사용자 정보 영역 (하단) - 별도의 흰색 배경 영역 */}
                      <div className="bg-white p-4 rounded-b-lg flex items-center mt-auto">
                        {/* 🌟🌟🌟 수정된 아바타 영역 (보라색 테두리와 사람 아이콘) 🌟🌟🌟 */}
                        <div className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center mr-3 bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-purple-600"
                          >
                            {/* 사람 (User) 모양 아이콘 */}
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>

                        {/* 이름과 직책 */}
                        <div>
                          <p className="font-semibold text-gray-900">
                            John Doe
                          </p>
                          <p className="text-sm text-gray-500">CEO, XYZ Corp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {카드3} */}
                  <div className="w-[33.33333%] flex-shrink-0 mr-4">
                    <div className="bg-[#F3ECFF] rounded-lg min-h-80 shadow-lg flex flex-col justify-between p-0 m-2">
                      {/* A. 후기 텍스트 영역 (상단) - 패딩을 내부에 적용 */}
                      {/* 현재 이미지에는 후기 텍스트가 안 보이지만, 공간을 위해 min-h-60을 사용 */}
                      <div className="p-4 min-h-60 flex-grow">
                        {/* 텍스트가 있다면 여기에 넣습니다. (예시) */}
                        <p className="text-gray-700 text-lg italic">
                          {/* "후기 내용이 여기에 들어갑니다." */}
                        </p>
                      </div>

                      {/* B. 사용자 정보 영역 (하단) - 별도의 흰색 배경 영역 */}
                      <div className="bg-white p-4 rounded-b-lg flex items-center mt-auto">
                        {/* 🌟🌟🌟 수정된 아바타 영역 (보라색 테두리와 사람 아이콘) 🌟🌟🌟 */}
                        <div className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center mr-3 bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-purple-600"
                          >
                            {/* 사람 (User) 모양 아이콘 */}
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>

                        {/* 이름과 직책 */}
                        <div>
                          <p className="font-semibold text-gray-900">
                            John Doe
                          </p>
                          <p className="text-sm text-gray-500">CEO, XYZ Corp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {카드4} */}
                  <div className="w-[33.33333%] flex-shrink-0 ">
                    <div className="bg-[#F3ECFF] rounded-lg min-h-80 shadow-lg flex flex-col justify-between p-0 m-2">
                      {/* A. 후기 텍스트 영역 (상단) - 패딩을 내부에 적용 */}
                      {/* 현재 이미지에는 후기 텍스트가 안 보이지만, 공간을 위해 min-h-60을 사용 */}
                      <div className="p-4 min-h-60 flex-grow">
                        {/* 텍스트가 있다면 여기에 넣습니다. (예시) */}
                        <p className="text-gray-700 text-lg italic">
                          {/* "후기 내용이 여기에 들어갑니다." */}
                        </p>
                      </div>

                      {/* B. 사용자 정보 영역 (하단) - 별도의 흰색 배경 영역 */}
                      <div className="bg-white p-4 rounded-b-lg flex items-center mt-auto">
                        {/* 🌟🌟🌟 수정된 아바타 영역 (보라색 테두리와 사람 아이콘) 🌟🌟🌟 */}
                        <div className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center mr-3 bg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-purple-600"
                          >
                            {/* 사람 (User) 모양 아이콘 */}
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>

                        {/* 이름과 직책 */}
                        <div>
                          <p className="font-semibold text-gray-900">
                            Sarah Johnson
                          </p>
                          <p className="text-sm text-gray-500">
                            Founder, Creative Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
