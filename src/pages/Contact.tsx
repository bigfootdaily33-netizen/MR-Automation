import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's Build Your Empire.
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            We are currently accepting 3 new partners this month. Apply below to see if your goals align with our expertise.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                Whether you're ready to start a new channel or need help scaling an existing one, our team is here to help. Fill out the form, and we'll get back to you within 24 hours to schedule a strategy call.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                    <p className="text-zinc-400">hello@mrautomation.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Headquarters</h4>
                    <p className="text-zinc-400">100 Innovation Drive<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Partnership Application</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zinc-400 mb-2">Monthly Budget</label>
                  <select 
                    id="budget" 
                    className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select your budget</option>
                    <option value="2.5k-5k">$2,500 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-zinc-400 mb-2">What are your YouTube goals?</label>
                  <textarea 
                    id="goals" 
                    rows={4}
                    className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell us about your current situation and what you want to achieve..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                  Submit Application
                </Button>
                <p className="text-xs text-zinc-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
