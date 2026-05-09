import Link from 'next/link';

export default function MobileLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold text-white">🦅 Peregrine</h1>
      <p className="text-gray-400 text-lg">Code at the speed of flight.</p>
      <Link
        href="/editor/demo"
        className="bg-peregrine-orange text-white px-6 py-3 rounded-full font-semibold text-lg"
      >
        Open Editor
      </Link>
    </div>
  );
}
