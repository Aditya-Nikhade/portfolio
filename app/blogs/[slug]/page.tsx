import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from 'next';

// --- Data Source ---
// (It's good practice to define data outside the component)
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

// --- Type Definition ---
// This is the correct and most stable way to type props for pages.
type Props = {
  params: {
    slug: string;
  };
};

// --- generateMetadata Function (Good for SEO and types) ---
// This helps Next.js understand the page's context even better.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) {
    return { title: "Not Found" };
  }
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

// --- generateStaticParams Function ---
// Stays the same: a standard function is correct.
export async function generateStaticParams() {
  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

// --- Page Component ---
// Make the component async, which is standard for Server Components.
export default async function BlogPostPage({ params }: Props) {
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blogs</Link>
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <div className="prose prose-lg max-w-none">{blog.content}</div>
    </main>
  );
}