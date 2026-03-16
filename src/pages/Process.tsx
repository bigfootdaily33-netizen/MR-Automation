import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Search, Map, Video, TrendingUp, DollarSign, Layers } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Market Research",
      icon: <Search className="w-8 h-8 text-blue-400" />,
      whatHappens: "We conduct deep data analysis to identify high-CPM, low-competition niches. We analyze competitor channels, search volume, and audience demographics to find the most profitable angle.",
      whyItMatters: "Choosing the wrong niche is the #1 reason channels fail. We eliminate the guesswork and ensure your channel is positioned in a market with high advertiser demand.",
      expectedResults: "A comprehensive 15-page niche analysis report with 3 recommended, highly profitable directions for your channel."
    },
    {
      number: "02",
      title: "Channel Strategy",
      icon: <Map className="w-8 h-8 text-blue-400" />,
      whatHappens: "We develop a 90-day content roadmap. This includes defining the channel's unique value proposition, visual branding guidelines, and a list of the first 30 highly searchable video topics.",
      whyItMatters: "A channel without a strategy is just a collection of random videos. A cohesive strategy builds a loyal audience and signals authority to the YouTube algorithm.",
      expectedResults: "A complete brand identity (logo, banner) and a 30-video content calendar optimized for search and suggested views."
    },
    {
      number: "03",
      title: "Content Production",
      icon: <Video className="w-8 h-8 text-blue-400" />,
      whatHappens: "Our elite team takes over. Native English writers draft high-retention scripts, professional voice actors record the audio, and expert editors combine it with dynamic visuals and sound design.",
      whyItMatters: "Quality is the only differentiator on YouTube today. Our production standards are designed to maximize average view duration (AVD) and click-through rate (CTR).",
      expectedResults: "4 to 8 broadcast-quality, fully optimized videos delivered and scheduled on your channel every month."
    },
    {
      number: "04",
      title: "Channel Growth",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      whatHappens: "We manage the upload process, optimizing titles, descriptions, and tags for SEO. We actively monitor analytics to A/B test thumbnails and adjust our content strategy based on real-time data.",
      whyItMatters: "Uploading is only half the battle. Continuous optimization based on analytics is what pushes a channel from 1,000 views to 1,000,000 views.",
      expectedResults: "Steady, compounding growth in impressions, views, and subscriber count as the algorithm begins to favor your content."
    },
    {
      number: "05",
      title: "Monetization",
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      whatHappens: "Once eligible, we optimize your AdSense integration, strategically place mid-roll ads for maximum RPM, and begin outreach for lucrative brand sponsorships and affiliate partnerships.",
      whyItMatters: "Views are vanity metrics unless they convert to revenue. We ensure every view is monetized to its maximum potential without hurting the viewer experience.",
      expectedResults: "A diversified income stream generating consistent monthly revenue from AdSense, sponsorships, and affiliates."
    },
    {
      number: "06",
      title: "Scaling",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      whatHappens: "With a profitable channel running on autopilot, we replicate the system. We launch additional channels in adjacent niches to build a diversified digital media portfolio.",
      whyItMatters: "The real wealth in YouTube automation comes from owning a network of profitable channels. Scaling multiplies your revenue while diversifying your risk.",
      expectedResults: "A multi-channel media empire generating significant, passive monthly cash flow."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            The MR Automation System
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Our proven, step-by-step process to build, grow, and monetize faceless YouTube channels with zero guesswork.
          </p>
          <Button href="/contact" size="lg">
            Start the Process
          </Button>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-8 space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12 md:pl-24">
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-zinc-900 border-4 border-zinc-950 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-display font-bold text-zinc-800">{step.number}</div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold mb-6">{step.title}</h2>
                
                <div className="space-y-8">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-3">What Happens</h3>
                    <p className="text-zinc-400 leading-relaxed">{step.whatHappens}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Why It Matters</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.whyItMatters}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Expected Results</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.expectedResults}</p>
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Trust the Process. Reap the Rewards.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Our system is designed to remove emotion and rely purely on data and high-end execution. Ready to build your asset?
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Book Your Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
