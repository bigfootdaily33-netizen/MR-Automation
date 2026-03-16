import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { TrendingUp, Users, DollarSign, Calendar, Target, Lightbulb } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "finance-channel",
      title: "The Financial Education Empire",
      niche: "Personal Finance & Investing",
      startingPoint: "Brand new channel. Zero subscribers, zero views. Client had a $5k/mo budget but no time to create content.",
      strategyUsed: "We targeted high-search, low-competition keywords around specific investing strategies (e.g., 'Dividend Investing for Beginners'). We focused heavily on high-retention scriptwriting to keep viewers engaged through complex topics.",
      contentStyle: "Whiteboard animation mixed with high-quality stock footage and dynamic text overlays. Professional, authoritative voiceover.",
      results: {
        views: "2.4M+",
        subscribers: "85,000+",
        revenue: "$14,500/mo (AdSense only)"
      },
      timeline: "8 Months",
      lessonsLearned: "High-CPM niches require exceptional script quality. Viewers in the finance space will click away immediately if the information isn't dense and actionable. Investing in top-tier writers was the key to this channel's success."
    },
    {
      id: "tech-channel",
      title: "The Tech Gadget Reviewer",
      niche: "Consumer Technology",
      startingPoint: "Existing channel with 5,000 subscribers, but stagnant growth. Videos were averaging 500 views. Client was burning out trying to edit videos themselves.",
      strategyUsed: "We completely overhauled the thumbnail strategy, moving from cluttered designs to high-contrast, curiosity-inducing images. We also shifted the content from broad tech news to highly specific product comparisons.",
      contentStyle: "Fast-paced editing with heavy use of motion graphics, sound effects, and B-roll. Energetic, engaging voiceover.",
      results: {
        views: "5.1M+",
        subscribers: "120,000+",
        revenue: "$22,000/mo (AdSense + Affiliates)"
      },
      timeline: "12 Months",
      lessonsLearned: "Thumbnails are the ultimate bottleneck. By simply changing the packaging of the videos, we increased the Click-Through Rate (CTR) from 3% to 9%, which triggered the algorithm to push the content to millions."
    },
    {
      id: "history-channel",
      title: "The Untold History Documentaries",
      niche: "History & Education",
      startingPoint: "Brand new channel. Client wanted to build a long-term, evergreen asset that would generate passive income for years.",
      strategyUsed: "We focused on producing longer, documentary-style videos (15-20 minutes) about obscure but fascinating historical events. We prioritized storytelling and high-quality voice acting over fast-paced editing.",
      contentStyle: "Cinematic pacing, archival footage, custom maps, and a deep, resonant voiceover. High production value.",
      results: {
        views: "8.5M+",
        subscribers: "210,000+",
        revenue: "$18,000/mo (AdSense + Sponsorships)"
      },
      timeline: "14 Months",
      lessonsLearned: "Evergreen content compounds. While the initial growth was slower than trend-jacking channels, the videos continue to generate thousands of views (and dollars) every single month, years after they were published."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Proven Results. Real Revenue.
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Explore how we've built and scaled profitable faceless YouTube channels across multiple high-CPM niches.
          </p>
          <Button href="/contact" size="lg">
            Build Your Channel
          </Button>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
                        {study.niche}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-bold">{study.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">Timeline: {study.timeline}</span>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                      <div className="text-3xl font-display font-bold text-white mb-1">{study.results.views}</div>
                      <div className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Total Views</div>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
                      <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                      <div className="text-3xl font-display font-bold text-white mb-1">{study.results.subscribers}</div>
                      <div className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Subscribers</div>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
                      <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                      <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-1">{study.results.revenue}</div>
                      <div className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Monthly Revenue</div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-500" /> Starting Point
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.startingPoint}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-blue-500" /> Strategy Used
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.strategyUsed}</p>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                          <Video className="w-5 h-5 text-blue-500" /> Content Style
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.contentStyle}</p>
                      </div>
                      <div className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-blue-400 mb-3">Key Lesson Learned</h3>
                        <p className="text-zinc-300 italic">"{study.lessonsLearned}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900/20 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Want these results for your own channel?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            We are currently accepting 3 new partners this month. Book a call to see if your niche qualifies.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Book Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
