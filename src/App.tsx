import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  BrainCircuit, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xl">A</div>
          <span className="font-display font-bold text-2xl tracking-tight text-slate-50">ARKANANTA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Case Studies', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            Quick Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
          >
            {['Solutions', 'Case Studies', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium text-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="bg-emerald-500 text-slate-950 px-5 py-3 rounded-xl font-bold">
              Quick Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-emerald-400 mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Next-Gen IT Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-50">
            Future-Proofing Your <span className="text-emerald-500">Infrastructure</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            PT Arkananta delivers enterprise-grade cybersecurity, cloud migration, and AI integration for SMEs and Government agencies. Scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all group">
              Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-8 py-4 rounded-full font-bold text-lg text-slate-50 hover:bg-white/10 transition-all">
              View Solutions
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-slate-500">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 200+ companies globally</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-3xl p-4 aspect-square flex items-center justify-center overflow-hidden">
             {/* Animated SVG Network Representation */}
             <svg viewBox="0 0 400 400" className="w-full h-full opacity-80">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <motion.circle 
                  cx="200" cy="200" r="150" 
                  fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="10 20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                  cx="200" cy="200" r="100" 
                  fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5 15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <circle cx="200" cy="200" r="40" fill="url(#grad1)" className="animate-pulse" />
                
                {/* Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 200 + 150 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 150 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
                      <line x1="200" y1="200" x2={x} y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                      <circle cx={x} cy={y} r="8" fill="#10b981" />
                    </motion.g>
                  );
                })}
             </svg>
          </div>
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20"
          >
            <div className="text-emerald-500 font-bold text-2xl">99.9%</div>
            <div className="text-xs text-slate-400 font-medium">Uptime SLA</div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl z-20"
          >
            <div className="text-blue-500 font-bold text-2xl">24/7</div>
            <div className="text-xs text-slate-400 font-medium">Expert Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const logos = ["TechCorp", "GlobalGov", "FutureBank", "SecureNet", "CloudWise", "DataFlow"];
  return (
    <div className="py-12 border-y border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50">
          {logos.map(logo => (
            <div key={logo} className="text-xl font-display font-bold text-slate-400 hover:text-emerald-500 transition-colors cursor-default grayscale hover:grayscale-0">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const services = [
    {
      title: "Cloud Migration",
      desc: "Seamlessly transition your legacy systems to high-performance cloud environments.",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      size: "col-span-1 md:col-span-2",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Cybersecurity Audit",
      desc: "Comprehensive vulnerability assessments and threat mitigation strategies.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      size: "col-span-1",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Managed IT",
      desc: "24/7 monitoring and proactive maintenance for your entire digital stack.",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      size: "col-span-1",
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Custom AI Integration",
      desc: "Leverage LLMs and predictive analytics to automate your business workflows.",
      icon: <BrainCircuit className="w-8 h-8 text-orange-400" />,
      size: "col-span-1 md:col-span-2",
      color: "from-orange-500/20 to-transparent"
    }
  ];

  return (
    <section id="solutions" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50">Core Solutions</h2>
        <p className="text-slate-400 max-w-2xl">We don't just fix problems; we build resilient systems that scale with your ambitions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`${s.size} glass p-8 rounded-[2rem] relative overflow-hidden group glass-hover`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10">
              <div className="mb-6 p-3 glass w-fit rounded-2xl">{s.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-slate-50">{s.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{s.desc}</p>
              <button className="flex items-center gap-2 text-sm font-bold text-emerald-400 group/btn">
                Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const [active, setActive] = useState(0);
  const cases = [
    {
      client: "GovTech Indonesia",
      problem: "Legacy database systems causing 4s latency in public service portals.",
      outcome: "Migrated to distributed architecture, reducing latency to 0.2s and improving uptime to 99.99%.",
      image: "https://picsum.photos/seed/gov/800/600"
    },
    {
      client: "FinStream Startup",
      problem: "Frequent DDoS attacks threatening customer financial data.",
      outcome: "Implemented zero-trust security layer and AI-driven threat detection. Zero breaches in 24 months.",
      image: "https://picsum.photos/seed/fin/800/600"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50">Proven Outcomes</h2>
            <p className="text-slate-400 max-w-xl">Real-world impact across diverse sectors. We deliver measurable growth through technology.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setActive(prev => (prev === 0 ? cases.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-50 hover:bg-emerald-500 hover:text-slate-950 transition-all"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={() => setActive(prev => (prev === cases.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-50 hover:bg-emerald-500 hover:text-slate-950 transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-[2.5rem] overflow-hidden aspect-video relative"
          >
            <img src={cases[active].image} alt="Case Study" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest">Featured Project</span>
              <h3 className="text-3xl font-display font-bold mt-2 text-slate-50">{cases[active].client}</h3>
            </div>
          </motion.div>

          <motion.div
            key={`text-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-400 font-bold uppercase text-xs tracking-wider">
                <X className="w-4 h-4" /> The Challenge
              </div>
              <p className="text-xl text-slate-300 leading-relaxed italic">"{cases[active].problem}"</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase text-xs tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> The Solution
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">"{cases[active].outcome}"</p>
            </div>
            <button className="flex items-center gap-2 text-emerald-500 font-bold hover:underline">
              Read Full Case Study <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-slate-950">A</div>
              <span className="font-display font-bold text-xl text-slate-50">ARKANANTA</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Empowering organizations with secure, scalable, and intelligent technology solutions since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-50 hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-50 hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-50 hover:text-emerald-500 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-50">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-50">Stay Updated</h4>
            <p className="text-xs text-slate-500 mb-4">Get our weekly IT Security Checklist & insights.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-50 focus:outline-none focus:border-emerald-500 w-full"
              />
              <button className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-400 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 PT Arkananta Teknologi. All rights reserved.</p>
          <div className="flex gap-8">
            <span>ISO 27001 Certified</span>
            <span>Uptime SLA: 99.99%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* SEO Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "PT Arkananta",
          "image": "https://ais-dev-ubzwksowf773xm6b4kpmwa-737356574282.asia-southeast1.run.app/logo.png",
          "description": "Enterprise IT Solutions, Cybersecurity, and Cloud Migration services.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressCountry": "ID"
          },
          "url": "https://ais-dev-ubzwksowf773xm6b4kpmwa-737356574282.asia-southeast1.run.app"
        })}
      </script>

      <Navbar />
      <Hero />
      <TrustBar />
      <Solutions />
      <CaseStudies />
      <Footer />
    </div>
  );
}
