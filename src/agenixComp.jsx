import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Bot, Sparkles, Wand2, FileCheck, BarChart3, Users, Clock, Zap } from 'lucide-react';

// --- Core UI Components ---

// 👇 THIS COMPONENT HAS BEEN UPDATED TO ONLY SHOW A BUTTON
const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Tally form ID
  const TALLY_FORM_ID = 'wdMdXz';

  // This function will be called by the Tally script after a successful submission inside the popup.
  useEffect(() => {
    const handleTallySubmit = () => {
      setIsSubmitted(true);
      console.log("Tally form submitted successfully!");
      // Reset the "Added!" button after 3 seconds.
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    };
    
    // We attach our function to the global window object so Tally's script can call it.
    window.handleTallySubmit = handleTallySubmit;
    
    // Cleanup function to remove it when the component unmounts.
    return () => {
      delete window.handleTallySubmit;
    };
  }, []); // The empty dependency array ensures this runs only once.

  const handleJoinWaitlist = () => {
    setError(''); // Clear previous errors
    
    // 1. Check if the Tally script has loaded.
    if (window.Tally) {
      // 2. Open the Tally popup programmatically without pre-filled data.
      window.Tally.openPopup(TALLY_FORM_ID, {
        layout: 'modal',
        width: 700,
        hideTitle: 1, // Hide the default Tally form title for a cleaner look
        // This tells Tally which function to call upon successful submission.
        onSubmit: 'window.handleTallySubmit',
      });
    } else {
      console.error('Tally script not loaded.');
      setError('Could not open the waitlist form. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleJoinWaitlist}
          disabled={isSubmitted}
          className="px-10 py-5 text-xl font-semibold bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 disabled:bg-green-600 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {isSubmitted ? (
            <>
              <CheckCircle size={22} />
              <span>Added!</span>
            </>
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight size={22} />
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-4 text-sm">{error}</p>}
    </div>
  );
};


// --- All other components below this line remain unchanged ---

const FEATURES_DATA = [
  {
    icon: <Bot className="text-blue-600" size={28} />,
    title: "AI Meeting Analysis",
    description: "Advanced AI analyzes Google Meet recordings to extract action items, decisions, and deadlines with 95% accuracy."
  },
  {
    icon: <Zap className="text-yellow-500" size={28} />,
    title: "Instant Task Creation",
    description: "Tasks automatically appear in Jira & Notion with full context, assignees, and deadlines—no manual work required."
  },
  {
    icon: <BarChart3 className="text-green-600" size={28} />,
    title: "Team Performance Analytics",
    description: "Get insights into task completion rates, team efficiency, and productivity trends across all your projects."
  }
];

const BENEFITS_DATA = [
  { icon: <Clock size={18} />, text: "Save 5+ hours per week" },
  { icon: <Users size={18} />, text: "100% task accountability" },
  { icon: <Sparkles size={18} />, text: "Zero setup required" },
];

const Header = () => (
  <header className="px-6 py-8 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-gray-900 text-3xl font-black tracking-tight">Agenix</span>
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <a href="#features" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">Features</a>
        <a href="#how-it-works" className="text-gray-600 font-medium hover:text-black transition-colors duration-200">How It Works</a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="px-6 pt-20 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-10 border border-blue-100">
        <span className="text-sm font-semibold text-gray-700">🚀 Join 1,500+ teams waiting</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-10 tracking-tight">
        Turn Meetings Into
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Action
        </span>{" "}
        Instantly
      </h1>
      
      <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
        AI analyzes your Google Meet recordings and creates organized tasks in Jira & Notion automatically.
        <br />
        <strong className="text-gray-800 font-semibold">Never manually assign tasks again.</strong>
      </p>
      
      <WaitlistForm />
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-gray-600">
        {BENEFITS_DATA.map((benefit, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="text-green-500 bg-green-50 p-1 rounded-full">{benefit.icon}</div>
            <span className="font-medium">{benefit.text}</span>
          </div>
        ))}
      </div>
      
      <p className="text-gray-500 mt-8 text-lg">
        Free for early adopters • No credit card required • Launch Q2 2025
      </p>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="px-6 py-32 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          Everything You Need
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
          From audio to actionable tasks in seconds. Built for modern teams who value efficiency.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {FEATURES_DATA.map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-8 group-hover:shadow-lg transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="px-6 py-32 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          How It Works
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
          Simple setup, powerful results. Your existing workflow, supercharged with AI.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            step: "01",
            icon: <Sparkles className="text-blue-600" size={32} />,
            title: "Record Meeting",
            description: "Continue your Google Meet calls as usual. Agenix securely processes recordings in the background—no bots or disruptions."
          },
          {
            step: "02", 
            icon: <Wand2 className="text-purple-600" size={32} />,
            title: "AI Extracts Tasks",
            description: "Advanced AI analyzes meeting transcripts to identify action items, assignees, deadlines, and project context with enterprise-grade accuracy."
          },
          {
            step: "03",
            icon: <FileCheck className="text-green-600" size={32} />,
            title: "Tasks Auto-Created",
            description: "Action items instantly appear in your Jira boards or Notion workspaces, properly organized and assigned to the right team members."
          }
        ].map((item, idx) => (
          <div key={idx} className="relative">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-1">
              <div className="text-5xl font-black text-gray-200 mb-6">{item.step}</div>
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
            </div>
            {idx < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ArrowRight size={20} className="text-gray-400" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="px-6 py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
        Ready to Automate?
      </h2>
      <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
        Join forward-thinking teams who've already eliminated manual task creation. 
        Be among the first to experience the future of meeting productivity.
      </p>
      
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
        <WaitlistForm />
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
        <p className="text-blue-200 text-xl font-semibold">
          🎉 Early adopters get <span className="text-white">lifetime 50% discount</span> + priority onboarding
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-6 py-16 bg-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-8">
        <span className="text-gray-900 text-2xl font-black tracking-tight">Agenix</span>
      </div>
      <p className="text-gray-500 text-lg">
        © 2025 Agenix Inc. Transforming meetings into actionable results.
      </p>
    </div>
  </footer>
);

// --- The Main Page ---
const AgenixLandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenixLandingPage;