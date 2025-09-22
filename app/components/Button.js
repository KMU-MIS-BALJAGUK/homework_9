export default function Button({ children, type = 'primary' }) {
  const base = 'px-6 py-2 rounded font-medium transition';
  const styles =
    type === 'primary'
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return <button className={`${base} ${styles}`}>{children}</button>;
}

export function Button2({ children, onClick }) {
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

export function Button3({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-5 rounded-md border border-gray-600 transition-colors duration-200 text-gray-900"
    >
      {children}
    </button>
  );
}

export function Button4({ children }) {
  return <button className="bg-white py-2 px-5 rounded-md ">{children}</button>;
}
