// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from "../../../lib/blog"; // Adjust path if needed

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // You can fetch the post here, but to avoid double-fetching,
  // we'll just use the same logic. In a real app with a DB, you'd fetch once.
  try {
    const blog = await getPostBySlug(params.slug);
    return {
      title: blog.title,
      description: blog.excerpt,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "This blog post could not be found."
    }
  }
}

// Statically generate routes at build time
export async function generateStaticParams() {
  const blogs = getAllPosts();
  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

// The Page Component
export default async function BlogPostPage({ params }: Props) {
  let blog;
  try {
    blog = await getPostBySlug(params.slug);
  } catch (e) {
    notFound(); // This will render the not-found.tsx page
  }

  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <Link href="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blogs</Link>
      <div className="border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_var(--border)] p-6">
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        {/* The rendered Markdown content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </div>
    </main>
  );
}