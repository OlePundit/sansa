import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <p className="text-lg mb-4">
          This is your Next.js frontend with Laravel API backend.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link
            href="/admin"
            className="p-8 border-2 border-blue-500 rounded-lg hover:shadow-lg transition text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Admin Panel</h2>
            <p>Manage content, services, blogs, and orders</p>
          </Link>
          <Link
            href="/services"
            className="p-8 border rounded-lg hover:shadow-lg transition text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Public Site</h2>
            <p>View services and blog posts</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
