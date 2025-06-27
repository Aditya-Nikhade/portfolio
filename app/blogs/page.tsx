import Link from "next/link";

const blogs = [
  {
    title: "How I Built My Portfolio",
    slug: "how-i-built-my-portfolio",
    date: "2024-06-01",
    excerpt: "A behind-the-scenes look at building this portfolio with Next.js and TailwindCSS.",
    content: "Full content for How I Built My Portfolio..."
  },
  {
    title: "Why I Love Open Source",
    slug: "why-i-love-open-source",
    date: "2024-05-20",
    excerpt: "Sharing my journey and contributions in the open source world.",
    content: "Full content for Why I Love Open Source..."
  }
];

export default function BlogsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold font-heading mb-8">Blogs</h1>
      <div className="flex flex-col gap-8">
        {blogs.map(blog => (
          <div key={blog.slug} className="border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_var(--border)] p-6">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
            <p className="mb-4">{blog.excerpt}</p>
            <Link href={`/blogs/${blog.slug}`} className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-600 hover:text-white transition-colors">Read more</Link>
          </div>
        ))}
      </div>
    </main>
  );
} 