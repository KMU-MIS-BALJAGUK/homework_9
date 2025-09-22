export function Button({ children, onClick }) {
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