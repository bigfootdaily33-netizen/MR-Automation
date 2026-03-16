import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ChevronDown, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../utils';

export default function FAQ() {
  const faqs = [
    {
      question: "What exactly is YouTube Automation?",
      answer: "YouTube Automation is the process of treating a YouTube channel like a business. Instead of filming yourself, you act as the producer. You hire a team (or an agency like us) to handle niche research, scriptwriting, voiceovers, video editing, and thumbnail design. The goal is to generate passive income from YouTube AdSense and sponsorships without ever showing your face."
    },
    {
      question: "How long does it take to see results?",
      answer: "YouTube is a long-term game, not a get-rich-quick scheme. Typically, it takes 3 to 6 months of consistent, high-quality uploads for the algorithm to gather enough data to start pushing your videos to a wider audience. However, once a channel 'pops', the growth is exponential."
    },
    {
      question: "Do I need to show my face or use my real voice?",
      answer: "Absolutely not. 100% of the channels we build and manage are 'faceless'. We use professional voice actors to narrate the videos, and rely on high-quality stock footage, motion graphics, and animations for the visuals."
    },
    {
      question: "Who owns the channel and the content?",
      answer: "You do. 100%. You retain full ownership of the YouTube channel, the Google AdSense account, and all the intellectual property (scripts, videos, voiceovers, thumbnails) we create for you."
    },
    {
      question: "How much revenue can I realistically expect?",
      answer: "Revenue depends heavily on the niche (which dictates the CPM - Cost Per Mille) and the number of views. A successful channel in a high-CPM niche like finance or tech can generate anywhere from $3,000 to $15,000+ per month in AdSense alone, not including sponsorships or affiliate marketing. However, results vary and require patience."
    },
    {
      question: "What is CPM and why does it matter?",
      answer: "CPM stands for Cost Per Mille (thousand views). It's how much advertisers pay YouTube to show ads on your videos. A gaming channel might have a $2 CPM, while a finance channel might have a $20 CPM. We exclusively target high-CPM niches so you make more money per view."
    },
    {
      question: "Do you use AI voices or real humans?",
      answer: "We strictly use professional human voice actors. While AI voices are getting better, YouTube's algorithm often penalizes them, and they lack the emotional nuance required to keep viewers engaged for long periods. Human voices build trust and retention."
    },
    {
      question: "How do you choose a profitable niche?",
      answer: "We use data-driven research tools to analyze search volume, competitor saturation, and average CPMs. We look for 'blue ocean' opportunities where there is high demand from viewers and advertisers, but low supply of high-quality content."
    },
    {
      question: "What if I already have a channel but it's not growing?",
      answer: "We can audit your existing channel and take over management. Often, stagnant channels just need a pivot in content strategy, better thumbnails, or higher retention editing to trigger the algorithm."
    },
    {
      question: "How involved do I need to be in the process?",
      answer: "As little or as much as you want. Our service is designed to be 100% done-for-you. You simply review and approve the content before it goes live, and we handle the rest."
    },
    {
      question: "What happens if a video gets a copyright strike?",
      answer: "We have strict quality control processes to ensure all footage, music, and assets used are either royalty-free, properly licensed, or fall under Fair Use. In the rare event of a claim, our team handles the dispute process."
    },
    {
      question: "Can I monetize through methods other than AdSense?",
      answer: "Yes! In fact, we encourage it. Once your channel has an audience, we help you implement affiliate marketing strategies and negotiate brand sponsorships, which often exceed AdSense revenue."
    },
    {
      question: "How do I pay for the service?",
      answer: "We operate on a monthly retainer model. You pay a flat fee each month for a set number of videos and full channel management. There are no hidden fees."
    },
    {
      question: "Do you guarantee views or subscribers?",
      answer: "No legitimate agency can guarantee specific algorithmic results. What we guarantee is elite-level production quality, data-backed strategies, and consistent execution—which are the prerequisites for YouTube success."
    },
    {
      question: "What makes MR Automation different from other agencies?",
      answer: "We are operators, not just an agency. We run our own portfolio of profitable channels. We don't outsource to cheap, low-quality freelancers; we employ a vetted team of native English writers and top 1% editors."
    },
    {
      question: "Can I choose the topics for the videos?",
      answer: "Yes, you have final approval on all topics. However, we strongly recommend letting our SEO and strategy team select the topics based on search volume and algorithmic trends to ensure maximum growth."
    },
    {
      question: "How do you handle thumbnails?",
      answer: "Thumbnails are arguably the most important part of a video. We have dedicated thumbnail designers who understand color psychology and click-through-rate (CTR) optimization. We often create multiple variations and A/B test them."
    },
    {
      question: "Is YouTube Automation saturated?",
      answer: "Low-quality, AI-generated spam is saturated. High-quality, well-researched, and professionally produced content is in higher demand than ever. The barrier to entry for quality has risen, which is exactly why our service is valuable."
    },
    {
      question: "What happens if I want to cancel?",
      answer: "We require a 30-day notice for cancellation. You keep all the content we've produced and retain full ownership of your channel."
    },
    {
      question: "How do we get started?",
      answer: "The first step is to book a free strategy call. We'll discuss your goals, budget, and potential niches to see if we're a good fit for a partnership."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Everything you need to know about building a profitable YouTube automation business.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900/20 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Book a free strategy call and we'll walk you through exactly how the process works for your specific goals.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Book Your Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-white pr-8">{question}</span>
        <ChevronDown 
          className={cn(
            "w-6 h-6 text-zinc-500 transition-transform duration-300 shrink-0",
            isOpen && "transform rotate-180 text-blue-400"
          )} 
        />
      </button>
      <div 
        className={cn(
          "px-6 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-zinc-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
