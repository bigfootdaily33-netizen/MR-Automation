import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Download, CheckCircle2, Shield, TrendingUp, Lock } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-950">
      {/* HERO & OPT-IN */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden flex-1 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-bold text-blue-400 uppercase tracking-wider mb-8">
                <Download className="w-4 h-4" />
                Free 24-Page Guide
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
                Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">7 Most Profitable</span> Faceless YouTube Niches
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Stop guessing. We analyzed over 500 channels to find the exact niches generating $10,000+ per month in passive AdSense revenue right now.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "The 'boring' B2B niche with $45+ CPMs",
                  "Why gaming and vlogs are dead for new creators",
                  "The exact video formats that guarantee high retention",
                  "How to monetize these niches without selling a course"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-zinc-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <Shield className="w-5 h-5 text-zinc-600" />
                Trusted by 5,000+ creators and investors.
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Where should we send your guide?</h3>
                  <p className="text-zinc-400">Enter your email below to get instant access.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="sr-only">First Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your First Name" 
                      className="w-full h-14 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your Best Email Address" 
                      className="w-full h-14 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                    Send Me The Guide Now
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
                  <Lock className="w-4 h-4" />
                  We respect your privacy. Unsubscribe at any time.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="py-12 border-t border-zinc-900 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Insights based on data from channels generating over
          </p>
          <div className="flex justify-center items-center gap-4">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <span className="text-4xl font-display font-bold text-white">$5,000,000+</span>
            <span className="text-xl text-zinc-500 font-medium">in AdSense Revenue</span>
          </div>
        </div>
      </section>
    </div>
  );
}
