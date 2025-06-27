import { notFound } from "next/navigation";
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return notFound();
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blogs</Link>
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{blog.date}</div>
      <div className="prose prose-lg max-w-none">{blog.content}</div>
    </main>
  );
}

// Use a const, not a function, and do NOT annotate the type!
export const generateStaticParams = () => [
  { slug: "how-i-built-my-portfolio" },
  { slug: "why-i-love-open-source" }
];