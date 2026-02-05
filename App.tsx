import React from 'react';
import { 
  Component, 
  Puzzle, 
  RefreshCw, 
  Wand2, 
  Database, 
  TrendingUp 
} from 'lucide-react';
import SystemOperationsTile from './components/SystemOperationsTile';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-white">
      {/* Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-10 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary flex items-center justify-center">
            <Component size={32} />
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">GTM OS</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Workflows</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Analytics</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Settings</a>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold tracking-wide hover:bg-primary/90 transition-all">
            <span>Get Started</span>
          </button>
        </div>
      </header>

      {/* Hero Section Container */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-10">
        <div className="relative w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Online
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Systems Operations <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Hero</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Experience 4.1x Operational Velocity with our technical GTM operating system. Automated CRM, real-time database sync, and predictive growth analytics.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold transition-transform hover:scale-105">
                View Live Demo
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border border-white/20 text-white text-base font-bold hover:bg-white/5 transition-all">
                Documentation
              </button>
            </div>
          </div>
          
          {/* Visual Component Replaced */}
          <SystemOperationsTile />

        </div>
      </main>

      {/* Stats Section */}
      <section className="px-4 md:px-10 lg:px-40 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-6">
            <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 bg-background-dark/40 border border-primary/20 backdrop-blur-sm">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Operational Velocity</p>
              <div className="flex items-end gap-3">
                <p className="text-white tracking-tight text-4xl font-bold">4.1x</p>
                <p className="text-[#0bda54] text-lg font-bold mb-1">+310%</p>
              </div>
              <p className="text-white/40 text-xs mt-2">vs Industry Standard</p>
            </div>
            <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 bg-background-dark/40 border border-primary/20 backdrop-blur-sm">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Manual Work</p>
              <div className="flex items-end gap-3">
                <p className="text-white tracking-tight text-4xl font-bold">-65%</p>
                <p className="text-[#fa5c38] text-lg font-bold mb-1">Saved</p>
              </div>
              <p className="text-white/40 text-xs mt-2">Average Reduction</p>
            </div>
            <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 bg-background-dark/40 border border-primary/20 backdrop-blur-sm">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Data Accuracy</p>
              <div className="flex items-end gap-3">
                <p className="text-white tracking-tight text-4xl font-bold">99.9%</p>
                <p className="text-primary text-lg font-bold mb-1">Global</p>
              </div>
              <p className="text-white/40 text-xs mt-2">Validated Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 md:px-10 lg:px-40 py-12 bg-black/20">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
            <Puzzle className="text-primary" />
            Core Infrastructure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-background-dark/60 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <RefreshCw />
              </div>
              <h4 className="text-white text-lg font-bold mb-2">CRM Integration</h4>
              <p className="text-white/50 text-sm">Bi-directional sync with HubSpot, Salesforce, and Pipedrive.</p>
            </div>
            <div className="group relative bg-background-dark/60 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Wand2 />
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Workflow Automation</h4>
              <p className="text-white/50 text-sm">Visual drag-and-drop builder for complex GTM playbooks.</p>
            </div>
            <div className="group relative bg-background-dark/60 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Database />
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Database Sync</h4>
              <p className="text-white/50 text-sm">Real-time data warehousing with zero latency architecture.</p>
            </div>
            <div className="group relative bg-background-dark/60 rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <TrendingUp />
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Growth Analytics</h4>
              <p className="text-white/50 text-sm">AI-driven insights for predictable revenue forecasting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Charts / Performance Section */}
      <section className="px-4 md:px-10 lg:px-40 py-12">
        <div className="max-w-[1200px] mx-auto bg-background-dark/40 border border-primary/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Real-time Performance</p>
              <h2 className="text-white text-4xl font-bold mb-4 tracking-tight">Efficiency Curve</h2>
              <p className="text-white/50 text-lg mb-6">Our engine processes over 1M events per second with sub-50ms latency, ensuring your GTM stack is always in sync.</p>
              <div className="flex gap-8">
                <div>
                  <p className="text-white text-3xl font-bold">High Performance</p>
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-[#0bda54]"></span>
                    <p className="text-white/60 text-sm">Optimized Engine</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary text-3xl font-bold">+85%</p>
                  <p className="text-white/60 text-sm">Throughput Increase</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex min-h-[220px] flex-col gap-8 py-4">
                  <svg fill="none" height="148" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#chart-grad)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#0ab7d1" strokeLinecap="round" strokeWidth="3"></path>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="chart-grad" x1="236" x2="236" y1="1" y2="149">
                        <stop stopColor="#0ab7d1" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="#0ab7d1" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-between px-2">
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">T-10s</p>
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">T-5s</p>
                    <p className="text-primary text-[11px] font-bold uppercase tracking-wider">Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 py-10 px-4 md:px-10 lg:px-40 bg-background-dark">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-white">
            <div className="size-5 text-primary flex items-center justify-center">
              <Component size={24}/>
            </div>
            <p className="text-sm font-bold">GTM Operating System © 2024</p>
          </div>
          <div className="flex gap-8">
            <a className="text-white/40 hover:text-white text-xs transition-colors" href="#">Privacy Policy</a>
            <a className="text-white/40 hover:text-white text-xs transition-colors" href="#">Terms of Service</a>
            <a className="text-white/40 hover:text-white text-xs transition-colors" href="#">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
