import { motion, useInView } from 'motion/react';
import { Button } from '../components/Button';
import { Play, TrendingUp, Clock, Target, CheckCircle2, ArrowRight, Shield, Zap, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

function AnimatedCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center relative overflow-hidden group hover:border-blue-500/50 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2"
      >
        {value}
      </motion.div>
      <div className="text-zinc-400 font-medium">{label}</div>
    </div>
  );
}

function TestimonialSlider() {
  const testimonials = [
    {
      quote: "MR Automation completely changed my perspective on YouTube. I was burning out trying to do it all myself. Now, I just review the final videos and watch the AdSense roll in. My channel revenue has 3x'd in 6 months.",
      author: "David Chen",
      role: "Tech Entrepreneur",
      revenue: "$12k/mo"
    },
    {
      quote: "The quality of their scriptwriting and editing is unmatched. I've tried other agencies, but they always felt like cheap content farms. MR Automation builds actual brands. Worth every penny.",
      author: "Sarah Jenkins",
      role: "Real Estate Investor",
      revenue: "$8.5k/mo"
    },
    {
      quote: "I had zero experience with YouTube before working with them. They handled the niche research, the strategy, and the execution. It's truly a passive income stream for me now.",
      author: "Marcus T.",
      role: "E-commerce Founder",
      revenue: "$15k/mo"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
      <div className="flex justify-center gap-1 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      
      <div className="overflow-hidden relative min-h-[200px]">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-300 italic mb-8 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </p>
          <div>
            <div className="font-bold text-white text-lg">{testimonials[currentIndex].author}</div>
            <div className="text-zinc-500">{testimonials[currentIndex].role}</div>
            <div className="text-blue-400 font-medium mt-1">Current Revenue: {testimonials[currentIndex].revenue}</div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prev} className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Accepting 3 new partners this month
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
              We Build & Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Profitable Faceless</span> YouTube Channels
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The completely done-for-you system for entrepreneurs and investors who want passive income without recording videos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto text-lg px-8">
                Book Your Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                View Case Studies
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">No face required. 100% done-for-you. Proven ROI.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF SECTION */}
      <section className="py-12 border-y border-zinc-900 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by founders, investors, and creators generating over $5M+ in YouTube revenue
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            <div className="text-2xl font-display font-bold tracking-tighter">Forbes</div>
            <div className="text-2xl font-display font-bold tracking-tighter">TechCrunch</div>
            <div className="text-2xl font-display font-bold tracking-tighter">Bloomberg</div>
            <div className="text-2xl font-display font-bold tracking-tighter">Entrepreneur</div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              YouTube is a goldmine, but you're too busy to dig.
            </h2>
            <p className="text-xl text-zinc-400">
              You know the potential of YouTube, but the reality of starting a channel is exhausting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Clock className="w-8 h-8 text-red-400" />,
                title: "Zero Time to Create",
                desc: "Between running your business and living your life, you don't have 20 hours a week to script, record, and edit videos."
              },
              {
                icon: <Target className="w-8 h-8 text-red-400" />,
                title: "No Idea Where to Start",
                desc: "Which niche is profitable? How does the algorithm work? The learning curve is steep and mistakes are expensive."
              },
              {
                icon: <Users className="w-8 h-8 text-red-400" />,
                title: "Managing Freelancers is a Nightmare",
                desc: "Hiring a scriptwriter, voice actor, editor, and thumbnail designer separately is a full-time job in itself."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-24 md:py-32 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                The Completely Done-For-You YouTube Machine.
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                MR Automation acts as your personal media company. We handle 100% of the heavy lifting so you can focus on what you do best while building a highly profitable digital asset.
              </p>
              <ul className="space-y-4">
                {[
                  "Data-driven niche and keyword research",
                  "High-retention scriptwriting by native speakers",
                  "Professional voiceovers (no robotic AI)",
                  "High-end video editing designed for retention",
                  "Click-optimized thumbnail design",
                  "Full channel management and SEO optimization"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-zinc-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/services" variant="outline" className="mt-10">
                Explore Our Services
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 z-10 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-white ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
            <p className="text-xl text-zinc-400">A seamless, hands-off process to build your digital asset.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Strategy & Niche", desc: "We identify high-CPM, low-competition niches tailored to your goals." },
              { step: "02", title: "Content Creation", desc: "Our expert team scripts, voices, and edits high-retention videos." },
              { step: "03", title: "Publish & Optimize", desc: "We handle uploading, SEO, thumbnails, and channel management." },
              { step: "04", title: "Monetize & Scale", desc: "We optimize for revenue and scale production as the channel grows." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-display font-bold text-zinc-800 mb-4 group-hover:text-blue-900/50 transition-colors">{item.step}</div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESULTS SECTION */}
      <section className="py-24 md:py-32 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Real Results. Real Revenue.</h2>
            <p className="text-xl text-zinc-400">We don't just get views; we build profitable businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <AnimatedCounter value="15M+" label="Monthly Views Generated" />
            <AnimatedCounter value="$2.5M+" label="Client AdSense Revenue" />
            <AnimatedCounter value="45+" label="Profitable Channels Managed" />
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 7. WHY US */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why MR Automation?</h2>
              <p className="text-xl text-zinc-400 mb-8">
                We aren't just an agency; we are YouTube operators. We run our own portfolio of highly profitable channels using the exact same systems we use for our clients.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-6 h-6 text-blue-400" />, title: "Data-Backed Decisions", desc: "No guessing. Every video topic is chosen based on search volume and competitor analysis." },
                  { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "Elite Production Quality", desc: "We hire the top 1% of editors and writers to ensure maximum viewer retention." },
                  { icon: <TrendingUp className="w-6 h-6 text-blue-400" />, title: "Focus on ROI", desc: "Views are vanity. We optimize for high-CPM niches that actually generate revenue." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-violet-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl p-8 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <div className="font-bold">Michael R.</div>
                    <div className="text-sm text-zinc-400">Founder, MR Automation</div>
                  </div>
                </div>
                <p className="text-lg text-zinc-300 italic leading-relaxed">
                  "Our goal isn't just to make videos. It's to build digital real estate that pays you dividends every single month, completely passively."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950" />
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-3xl mx-auto">
            Ready to Build Your YouTube Empire?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Book a free strategy call to see if you qualify for our done-for-you partnership program. Spots are strictly limited to ensure quality.
          </p>
          <Button href="/contact" size="lg" className="text-lg px-10 h-16">
            Book Your Strategy Call Now
          </Button>
          <p className="mt-6 text-sm text-zinc-500">100% Free. No obligation.</p>
        </div>
      </section>
    </div>
  );
}

