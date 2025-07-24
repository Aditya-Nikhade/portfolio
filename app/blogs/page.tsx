// app/blogs/page.tsx
import Link from "next/link";
import { getAllPosts } from "../../lib/blog"; // Assuming @ is configured for src/ or root

export default function BlogsPage() {
  const blogs = getAllPosts(); // Fetches data from your .md files!

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-4xl font-bold font-heading mb-8">Blogs</h1>
      <div className="flex flex-col gap-8">
        {blogs.map(blog => (
          <div key={blog.slug} className="border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_var(--border)] p-6">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-2">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <p className="mb-4">{blog.excerpt}</p>
            <Link href={`/blogs/${blog.slug}`} className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-600 hover:text-white transition-colors">Read more</Link>
          </div>
        ))}
      </div>
    </main>
  );
}