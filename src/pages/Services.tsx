import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Video, Search, PenTool, Mic, Scissors, Image as ImageIcon, Settings, DollarSign, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "niche-research",
      title: "Niche & Market Research",
      icon: <Search className="w-8 h-8 text-blue-400" />,
      overview: "We identify high-CPM, low-competition niches that guarantee profitability and long-term growth.",
      benefits: ["Avoid saturated markets", "Maximize ad revenue", "Target high-value audiences"],
      features: ["Competitor analysis", "Keyword volume tracking", "CPM estimation"],
      deliverables: "A comprehensive 15-page niche analysis report with 3 recommended directions.",
      whyItMatters: "Choosing the wrong niche is the #1 reason channels fail. We eliminate the guesswork.",
      whoItsFor: "Investors looking for the highest ROI on their YouTube assets."
    },
    {
      id: "script-writing",
      title: "High-Retention Script Writing",
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      overview: "Our native English writers craft compelling narratives designed specifically to maximize viewer retention.",
      benefits: ["Higher watch time", "Increased algorithmic push", "Better audience engagement"],
      features: ["Hook optimization", "Pacing control", "Call-to-action integration"],
      deliverables: "Fully formatted, engaging scripts ready for voiceover.",
      whyItMatters: "The script is the backbone of the video. Without a good story, viewers click away in seconds.",
      whoItsFor: "Channels struggling with low average view duration."
    },
    {
      id: "voiceover",
      title: "Professional Voiceover Production",
      icon: <Mic className="w-8 h-8 text-blue-400" />,
      overview: "We use top-tier human voice actors (never robotic AI) to bring your scripts to life with emotion and clarity.",
      benefits: ["Builds trust with audience", "Higher perceived production value", "Better monetization approval rates"],
      features: ["Studio-quality audio", "Pacing and inflection control", "Multiple accents available"],
      deliverables: "Mastered, broadcast-ready audio files.",
      whyItMatters: "YouTube heavily penalizes low-quality AI voices. Real human emotion keeps viewers watching.",
      whoItsFor: "Faceless channels that need a recognizable, authoritative brand voice."
    },
    {
      id: "video-editing",
      title: "Dynamic Video Editing",
      icon: <Scissors className="w-8 h-8 text-blue-400" />,
      overview: "Our editors use advanced visual storytelling, motion graphics, and sound design to keep viewers hooked.",
      benefits: ["Massive retention boosts", "Professional brand image", "Higher click-through rates on end screens"],
      features: ["Motion graphics", "B-roll sourcing", "Sound design & mixing"],
      deliverables: "Final rendered 4K videos ready for upload.",
      whyItMatters: "In a highly competitive landscape, visual pacing is what separates amateur channels from multi-million dollar brands.",
      whoItsFor: "Anyone wanting top 1% production quality without hiring an in-house team."
    },
    {
      id: "thumbnail-design",
      title: "Click-Optimized Thumbnail Design",
      icon: <ImageIcon className="w-8 h-8 text-blue-400" />,
      overview: "We design high-contrast, psychologically-driven thumbnails that demand clicks.",
      benefits: ["Higher Click-Through Rate (CTR)", "More impressions", "Lower cost per view"],
      features: ["A/B testing concepts", "Color psychology", "Face/emotion optimization"],
      deliverables: "3 custom thumbnail variations per video.",
      whyItMatters: "If they don't click, the video doesn't matter. The thumbnail is the most important part of the upload.",
      whoItsFor: "Channels with great content but low views."
    },
    {
      id: "channel-management",
      title: "Full Channel Management",
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      overview: "We handle the entire upload process, SEO optimization, and community management.",
      benefits: ["100% passive experience", "Optimized search rankings", "Consistent upload schedule"],
      features: ["Title & tag optimization", "Description copywriting", "Comment moderation"],
      deliverables: "A fully managed, hands-off YouTube channel.",
      whyItMatters: "Consistency and SEO are key to algorithm favorability. We ensure every detail is perfect.",
      whoItsFor: "Busy professionals who want a completely hands-off investment."
    },
    {
      id: "monetization",
      title: "Monetization Strategy",
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      overview: "We optimize your channel to maximize AdSense revenue and secure lucrative brand deals.",
      benefits: ["Higher RPMs", "Diversified income streams", "Faster path to profitability"],
      features: ["Mid-roll ad placement", "Sponsorship outreach", "Affiliate link strategy"],
      deliverables: "A custom monetization roadmap and ongoing revenue optimization.",
      whyItMatters: "Views don't equal money unless the channel is properly monetized. We turn attention into cash.",
      whoItsFor: "Channels ready to scale their revenue beyond basic AdSense."
    },
    {
      id: "scaling",
      title: "YouTube Scaling",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      overview: "Once profitable, we help you launch multiple channels to build a massive digital media portfolio.",
      benefits: ["Exponential revenue growth", "Risk diversification", "Media empire building"],
      features: ["Systematized production", "Cross-promotion", "Portfolio management"],
      deliverables: "Launch plans and management for 2-5 additional channels.",
      whyItMatters: "The real wealth in YouTube automation comes from owning a network of profitable channels.",
      whoItsFor: "Successful channel owners ready to build an empire."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Done-For-You Services
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            From niche selection to scaling a media empire, we handle every aspect of your YouTube business with elite precision.
          </p>
          <Button href="/contact" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-zinc-400 mb-8 leading-relaxed">{service.overview}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" /> Benefits
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        {service.benefits.map((b, i) => <li key={i}>• {b}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" /> Features
                      </h4>
                      <ul className="space-y-2 text-zinc-400">
                        {service.features.map((f, i) => <li key={i}>• {f}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8">
                    <div className="font-bold text-white mb-2">Deliverables:</div>
                    <p className="text-zinc-400">{service.deliverables}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="font-bold text-white">Why it matters: </span>
                      <span className="text-zinc-400">{service.whyItMatters}</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">Who it's for: </span>
                      <span className="text-zinc-400">{service.whoItsFor}</span>
                    </div>
                  </div>

                  <Button href="/contact" variant="outline">
                    Get Started with {service.title.split(' ')[0]}
                  </Button>
                </div>
                
                <div className="flex-1 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 blur-3xl rounded-full" />
                  <div className="relative aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-12 text-center">
                     {/* Abstract representation of the service */}
                     <div className="text-zinc-700 opacity-50 scale-150">
                        {service.icon}
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Stop managing freelancers. Start building an asset.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Let our elite team handle 100% of the production so you can focus on scaling your portfolio.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Book a Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
