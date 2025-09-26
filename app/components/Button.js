export default function Button({ children, type = 'primary' }) {
  const base = 'px-6 py-2 rounded font-medium transition';
  const styles =
    type === 'primary'
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return <button className={`${base} ${styles}`}>{children}</button>;
}

export function LearnMoreButton({ href = '#' }) {
  return (
    <a
      href={href}
      className="mt-4 inline-block max-w-max px-4 py-2 rounded-md text-black font-medium transition-colors bg-white hover:bg-gray-200"
    >
      Learn More →
    </a>
  );
}
