import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: "1",
      title: "The 5 Most Profitable Faceless YouTube Niches in 2024",
      excerpt: "Not all views are created equal. Discover the niches that command the highest CPMs and how to dominate them.",
      date: "Oct 12, 2023",
      author: "Michael R.",
      category: "Strategy",
      image: "https://picsum.photos/seed/finance/800/600?blur=2"
    },
    {
      id: "2",
      title: "Why Your Thumbnails Aren't Getting Clicks (And How to Fix It)",
      excerpt: "A deep dive into the psychology of a high-converting thumbnail. Stop losing views to bad packaging.",
      date: "Oct 05, 2023",
      author: "Sarah J.",
      category: "Design",
      image: "https://picsum.photos/seed/design/800/600?blur=2"
    },
    {
      id: "3",
      title: "The Anatomy of a High-Retention YouTube Script",
      excerpt: "How to hook viewers in the first 5 seconds and keep them watching until the end screen.",
      date: "Sep 28, 2023",
      author: "David L.",
      category: "Content",
      image: "https://picsum.photos/seed/writing/800/600?blur=2"
    },
    {
      id: "4",
      title: "AI vs. Human Voiceovers: What the Data Actually Says",
      excerpt: "We tested AI voices against human voice actors across 50 videos. The results might surprise you.",
      date: "Sep 15, 2023",
      author: "Michael R.",
      category: "Production",
      image: "https://picsum.photos/seed/audio/800/600?blur=2"
    },
    {
      id: "5",
      title: "How to Scale from 1 to 5 Profitable YouTube Channels",
      excerpt: "The exact systems and SOPs we use to manage a multi-channel media empire without burning out.",
      date: "Sep 02, 2023",
      author: "Michael R.",
      category: "Scaling",
      image: "https://picsum.photos/seed/growth/800/600?blur=2"
    },
    {
      id: "6",
      title: "Monetization Beyond AdSense: Sponsorships & Affiliates",
      excerpt: "AdSense is just the beginning. Learn how to double your channel's revenue with strategic partnerships.",
      date: "Aug 20, 2023",
      author: "Emma W.",
      category: "Monetization",
      image: "https://picsum.photos/seed/money/800/600?blur=2"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Insights & Strategies
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Actionable advice, case studies, and industry trends from the frontlines of YouTube automation.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-zinc-700 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs font-bold text-blue-400 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900/20 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Stop reading. Start building.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            You know the theory. Now let our team execute it for you.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Book Your Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
