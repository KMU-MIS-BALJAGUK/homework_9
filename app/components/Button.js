export function LearnMore({ href = '#' }) {
  return (
    <a
      href={href}
      className="mt-4 inline-block max-w-max px-4 py-2 rounded-md text-black font-medium transition-colors bg-white hover:bg-gray-200"
    >
      Learn More →
    </a>
  );
}

export function GetStarted({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-5 rounded-md transition-colors duration-200 
  bg-[#C1A0FD] text-gray-900"
    >
      {children}
    </button>
  );
}

export function LearnMoreButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-5 rounded-md border border-gray-600 transition-colors duration-200 text-gray-900"
    >
      {children}
    </button>
  );
}
