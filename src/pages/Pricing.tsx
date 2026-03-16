import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { CheckCircle2, ShieldCheck, Zap, Star } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: "Starter Channel",
      price: "$2,500",
      period: "/month",
      description: "Perfect for testing a new niche with high-quality, consistent content.",
      bestFor: "Investors testing the waters in a new niche.",
      features: [
        "4 High-Retention Videos/mo",
        "Niche & Keyword Research",
        "Professional Scriptwriting",
        "Human Voiceover (No AI)",
        "Standard Video Editing",
        "2 Thumbnail Concepts/Video",
        "Basic SEO Optimization",
        "Monthly Performance Report"
      ],
      cta: "Start Your Channel",
      popular: false
    },
    {
      name: "Growth Package",
      price: "$4,500",
      period: "/month",
      description: "Our most popular tier. Designed to aggressively scale views and AdSense revenue.",
      bestFor: "Entrepreneurs ready to build a serious digital asset.",
      features: [
        "8 High-Retention Videos/mo",
        "Advanced Competitor Analysis",
        "Elite Scriptwriting & Hook Optimization",
        "Premium Human Voiceover",
        "Dynamic Editing & Motion Graphics",
        "3 Thumbnail Concepts/Video (A/B Tested)",
        "Advanced SEO & Tagging",
        "Community Management",
        "Bi-Weekly Strategy Calls"
      ],
      cta: "Scale Your Channel",
      popular: true
    },
    {
      name: "Authority Package",
      price: "$8,000+",
      period: "/month",
      description: "The ultimate done-for-you media empire. Dominate your niche completely.",
      bestFor: "Brands and investors wanting market dominance.",
      features: [
        "15+ High-Retention Videos/mo",
        "Dedicated Channel Manager",
        "Top 1% Industry Writers",
        "Celebrity-Tier Voice Talent",
        "Cinematic Editing & Custom Assets",
        "Unlimited Thumbnail Revisions",
        "Full Monetization Strategy (Sponsors/Affiliates)",
        "Cross-Platform Repurposing (Shorts/Reels)",
        "Weekly Strategy & Analytics Calls"
      ],
      cta: "Dominate Your Niche",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Transparent Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Massive ROI.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            We don't just sell videos. We build digital real estate that pays dividends. Choose the package that fits your growth goals.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400">
            <ShieldCheck className="w-5 h-5" />
            100% Satisfaction Guarantee on First Video Delivery
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl p-8 border ${
                  tier.popular 
                    ? 'bg-zinc-900 border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10' 
                    : 'bg-zinc-900/50 border-zinc-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zinc-400 text-sm h-10">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-500 font-medium">{tier.period}</span>
                  </div>
                  <p className="text-sm text-blue-400 mt-2 font-medium">Best for: {tier.bestFor}</p>
                </div>
                
                <Button 
                  href="/contact" 
                  variant={tier.popular ? 'primary' : 'outline'} 
                  className="w-full mb-8"
                >
                  {tier.cta}
                </Button>
                
                <div className="space-y-4">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">What's Included:</div>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-blue-400' : 'text-zinc-600'}`} />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE & FAQ PREVIEW */}
      <section className="py-24 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The MR Automation Guarantee</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            We are so confident in our production quality that if you aren't completely blown away by the first video we deliver, we will revise it until you are, or refund your entire first month's retainer. No questions asked.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg" className="px-10">
              Apply for Partnership
            </Button>
            <Button href="/faq" variant="outline" size="lg" className="px-10">
              Read the FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
