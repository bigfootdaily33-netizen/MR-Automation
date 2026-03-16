import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Shield, Users, Target, CheckCircle2, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            We Build Digital Real Estate.
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            MR Automation is an elite team of YouTube operators, strategists, and creatives dedicated to building highly profitable media assets for investors and entrepreneurs.
          </p>
        </div>
      </section>

      {/* MISSION & STORY */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                To democratize access to the creator economy. We believe that you shouldn't have to be an entertainer, editor, or algorithm expert to build wealth on YouTube. Our mission is to provide the infrastructure and talent necessary for anyone to own a profitable piece of digital real estate.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why We Started</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                We started as creators ourselves, struggling with the burnout of the content treadmill. We realized that the most successful channels weren't run by individuals, but by systems. We built those systems for ourselves, scaled our own portfolio to multiple six figures, and then realized the massive demand from investors who wanted the returns without the headache. MR Automation was born to bridge that gap.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
                <Users className="w-32 h-32 text-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE & PHILOSOPHY */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl text-zinc-400">We don't chase trends. We build sustainable businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Data Over Emotion",
                desc: "Every niche, topic, and thumbnail is chosen based on search volume, competitor analysis, and proven psychological triggers. We don't guess."
              },
              {
                icon: <Award className="w-8 h-8 text-blue-400" />,
                title: "Quality Over Quantity",
                desc: "The algorithm rewards retention. We invest heavily in top-tier writers and editors because a single great video will outperform ten mediocre ones."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "Systems Over Hustle",
                desc: "We rely on strict SOPs and a vetted talent pool to ensure consistent, high-quality output month after month, without relying on any single point of failure."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Clients Trust Us</h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            We are operators first, agency second. We run our own portfolio of highly profitable channels using the exact same systems, talent, and strategies we deploy for our clients. We have skin in the game, and we know what it takes to win in today's hyper-competitive YouTube landscape.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              "Transparent reporting & analytics",
              "100% ownership of your channel & assets",
              "No long-term lock-in contracts",
              "Direct access to your channel manager",
              "Vetted, native-English speaking talent",
              "Strict adherence to YouTube TOS"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-zinc-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900/20 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to partner with the best?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            We are highly selective about the clients we take on. Book a call to see if we're a good fit.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Apply for Partnership
          </Button>
        </div>
      </section>
    </div>
  );
}
