import React, { useState, useEffect } from 'react';

// Icon Components
const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const Play = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="5,3 19,12 5,21" />
    </svg>
);

const Users = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const Zap = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const Brain = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 1 0-2.526 5.77 4 4 0 1 0 .556 6.588 4 4 0 1 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0A3.2 3.2 0 0 0 12.5 20M9 12V8M15 12V8M8 21l8-11" />
    </svg>
);

const BarChart = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
);

const Shield = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const Check = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const X = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const Menu = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

// Components
const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Agenix
        </span>
    </div>
);

const Header = ({ setPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => setPage('home')} className="cursor-pointer">
                    <Logo />
                </button>
                
                <nav className="hidden md:flex items-center space-x-10">
                    <button onClick={() => setPage('features')} className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Features</button>
                    <button onClick={() => setPage('how-it-works')} className="text-gray-700 hover:text-purple-600 font-medium transition-colors">How It Works</button>
                    <button onClick={() => setPage('pricing')} className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Pricing</button>
                </nav>
                
                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                        Sign In
                    </button>
                    <button 
                        onClick={() => setPage('pricing')} 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Get Started
                    </button>
                </div>

                <button 
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        <button onClick={() => { setPage('features'); setMobileMenuOpen(false); }} className="block text-gray-700">Features</button>
                        <button onClick={() => { setPage('how-it-works'); setMobileMenuOpen(false); }} className="block text-gray-700">How It Works</button>
                        <button onClick={() => { setPage('pricing'); setMobileMenuOpen(false); }} className="block text-gray-700">Pricing</button>
                        <button className="block text-gray-700">Sign In</button>
                        <button 
                            onClick={() => { setPage('pricing'); setMobileMenuOpen(false); }}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-2.5 rounded-xl"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

const HomePage = ({ setPage }) => {
    const [currentFeature, setCurrentFeature] = useState(0);

    const features = [
        {
            title: "Meeting Intelligence",
            description: "AI agents analyze Google Meet, Zoom & Teams recordings in real-time",
            visual: "🎙️ → 🧠 → 📋"
        },
        {
            title: "MCP Integration",
            description: "Direct integration with your existing Jira & Notion workspaces via MCP",
            visual: "🔗 Jira + Notion"
        },
        {
            title: "Automated Task Creation",
            description: "Tasks are automatically created and assigned based on meeting discussions",
            visual: "✅ Auto-Generated"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-8">
                                <Zap className="w-4 h-4 text-purple-600 mr-2" />
                                <span className="text-sm font-medium text-purple-800">Powered by MCP & AI Agents</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                Turn Meetings Into 
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Action</span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Skip the manual work. Agenix uses AI agents to analyze your meetings and automatically creates tasks in your existing Jira & Notion workspaces through MCP integration.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button 
                                    onClick={() => setPage('pricing')}
                                    className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                                >
                                    Start Free Trial
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <button className="group bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Watch Demo
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">85%</div>
                                    <div className="text-gray-600">Time Saved</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">100%</div>
                                    <div className="text-gray-600">Task Accuracy</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                                    <div className="text-gray-600">AI Processing</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Interactive Demo Preview */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform hover:scale-105 transition-all duration-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">Live Meeting Analysis</h3>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                                                currentFeature === index 
                                                ? 'border-purple-300 bg-purple-50 shadow-md' 
                                                : 'border-gray-200 bg-gray-50'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                                </div>
                                                <div className="text-2xl">{feature.visual}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It's Different Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Agenix vs Others?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Unlike Fathom or Otter.ai that force you into their dashboards, Agenix works with YOUR existing tools through MCP.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <X className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Tools</h3>
                            <ul className="text-left space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Force you into their dashboard
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Manual task creation
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    No workflow integration
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Basic transcription only
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 text-center transform scale-105 shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Brain className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Agenix</h3>
                            <ul className="text-left space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Works with YOUR Jira & Notion
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Automated task & assignment
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    MCP protocol integration
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    AI-powered workflow analysis
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-gray-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Process</h3>
                            <ul className="text-left space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Hours of post-meeting work
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Tasks get forgotten
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    No performance insights
                                </li>
                                <li className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Context gets lost
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* MCP Integration Section */}
            <section className="py-24 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Powered by MCP Technology</h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Model Context Protocol ensures seamless, secure integration with your existing tools
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Direct Workspace Integration</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Real-time Jira Integration</h4>
                                        <p className="opacity-90">Tasks, epics, and stories created automatically with proper linking and context</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <Brain className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Smart Notion Updates</h4>
                                        <p className="opacity-90">Meeting notes, action items, and project updates sync seamlessly</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Enterprise Security</h4>
                                        <p className="opacity-90">Your data stays in your tools. We only facilitate the connections</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="font-semibold mb-4 text-center">Integration Flow</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                                    <span>🎙️ Meeting Recording</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                                    <span>🧠 AI Analysis</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                                    <span>🔗 MCP Protocol</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-purple-500/30 rounded-lg">
                                    <span>✅ Your Jira & Notion</span>
                                    <Check className="w-4 h-4 text-green-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Analytics Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Smart Employee Analytics</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Get insights into team performance and workflow efficiency based on actual task completion data from your tools.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <BarChart className="w-8 h-8 text-purple-600 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Performance Insights</h3>
                                        <p className="text-gray-600">Track task completion rates, velocity, and efficiency patterns</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <Users className="w-8 h-8 text-purple-600 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Workload Balance</h3>
                                        <p className="text-gray-600">Identify bottlenecks and ensure fair task distribution</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <Zap className="w-8 h-8 text-purple-600 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Process Optimization</h3>
                                        <p className="text-gray-600">Discover what works and optimize your workflows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Performance Dashboard</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">JS</div>
                                        <div>
                                            <div className="font-medium text-gray-900">John Smith</div>
                                            <div className="text-sm text-gray-500">12 tasks completed</div>
                                        </div>
                                    </div>
                                    <div className="text-green-600 font-bold">98%</div>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">AD</div>
                                        <div>
                                            <div className="font-medium text-gray-900">Alice Davis</div>
                                            <div className="text-sm text-gray-500">8 tasks completed</div>
                                        </div>
                                    </div>
                                    <div className="text-blue-600 font-bold">85%</div>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">MJ</div>
                                        <div>
                                            <div className="font-medium text-gray-900">Mike Johnson</div>
                                            <div className="text-sm text-gray-500">15 tasks in progress</div>
                                        </div>
                                    </div>
                                    <div className="text-yellow-600 font-bold">72%</div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="text-sm text-purple-800 font-medium">💡 AI Insight</div>
                                <div className="text-sm text-purple-700 mt-1">Mike has 3x more tasks than average. Consider redistributing workload.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Logos */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-500 font-medium tracking-wider mb-8">SEAMLESSLY INTEGRATES WITH YOUR TOOLS</p>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
                        <div className="flex justify-center">
                            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Jira</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-black text-white px-4 py-2 rounded font-bold">Notion</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold">Slack</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-blue-500 text-white px-4 py-2 rounded font-bold">Zoom</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">Google Meet</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-indigo-600 text-white px-4 py-2 rounded font-bold">Teams</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Meetings?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join hundreds of teams already saving 10+ hours per week with Agenix.
                    </p>
                    <button 
                        onClick={() => setPage('pricing')}
                        className="bg-white text-purple-600 font-bold px-10 py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
                    >
                        Start Free Trial - No Credit Card
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <p className="text-sm mt-4 opacity-75">14-day free trial • Setup in 5 minutes • Cancel anytime</p>
                </div>
            </section>
        </main>
    );
};

const FeaturesPage = () => {
    const features = [
        {
            icon: <Brain className="w-8 h-8 text-purple-500" />,
            title: "AI-Powered Meeting Analysis",
            description: "Advanced AI agents analyze your Google Meet, Zoom, and Teams recordings to identify action items, decisions, and assignments with 99% accuracy.",
            details: ["Real-time transcription and analysis", "Speaker identification and context tracking", "Automatic action item extraction", "Decision point detection"]
        },
        {
            icon: <Zap className="w-8 h-8 text-purple-500" />,
            title: "MCP Integration Engine",
            description: "Direct integration with your existing Jira and Notion workspaces using Model Context Protocol for seamless workflow automation.",
            details: ["Direct API connections via MCP", "No data migration required", "Maintains your existing workflows", "Enterprise-grade security"]
        },
        {
            icon: <BarChart className="w-8 h-8 text-purple-500" />,
            title: "Smart Analytics Dashboard",
            description: "Get insights into team performance, workload distribution, and process efficiency based on real task completion data.",
            details: ["Team performance metrics", "Workload balancing insights", "Process optimization suggestions", "Productivity trend analysis"]
        },
        {
            icon: <Shield className="w-8 h-8 text-purple-500" />,
            title: "Enterprise Security",
            description: "Your data stays in your tools. We provide the intelligence layer without compromising your security or privacy.",
            details: ["SOC 2 Type II compliant", "End-to-end encryption", "GDPR compliant", "Zero data retention policy"]
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Features That <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Transform</span> Your Workflow
                    </h1>
                    <p className="text-xl text-gray-600">Everything you need to turn meetings into action, automatically.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const HowItWorksPage = () => {
    const steps = [
        {
            number: "01",
            title: "Connect Your Tools",
            description: "Securely connect your Google Meet, Zoom, Teams, Jira, and Notion accounts. Setup takes less than 5 minutes with our MCP integration.",
            image: "🔗"
        },
        {
            number: "02", 
            title: "AI Analyzes Meetings",
            description: "Our AI agents automatically join your meetings, transcribe conversations, and identify action items, decisions, and assignments in real-time.",
            image: "🤖"
        },
        {
            number: "03",
            title: "Tasks Created Automatically", 
            description: "Based on the analysis, tasks are automatically created in your Jira workspace and notes are updated in Notion, with full context and linking.",
            image: "✅"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
                    </h1>
                    <p className="text-xl text-gray-600">From meeting to action in three simple steps. No manual work required.</p>
                </div>
                
                <div className="relative">
                    {/* Connection lines */}
                    <div className="hidden lg:block absolute top-32 left-0 w-full h-0.5">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                <div className="relative z-10 bg-white">
                                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl shadow-xl">
                                        {step.image}
                                    </div>
                                    <div className="text-6xl font-bold text-purple-200 mb-4">{step.number}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center">
                        See It In Action
                        <Play className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const PricingPage = () => {
    const plans = [
        {
            name: "Starter",
            price: "$19",
            description: "Perfect for small teams getting started with meeting automation.",
            features: [
                "Up to 50 meeting hours/month",
                "Google Meet, Zoom, Teams integration",
                "Basic Jira & Notion sync",
                "Email support",
                "14-day free trial"
            ],
            cta: "Start Free Trial",
            primary: false,
            popular: false
        },
        {
            name: "Professional",
            price: "$39",
            description: "For growing teams that need advanced automation and analytics.",
            features: [
                "Unlimited meeting hours",
                "Advanced AI analysis",
                "Full MCP integration suite",
                "Team analytics dashboard",
                "Priority support",
                "Custom integrations"
            ],
            cta: "Start Free Trial",
            primary: true,
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations requiring advanced security and custom solutions.",
            features: [
                "Everything in Professional",
                "Advanced security (SOC 2)",
                "Custom AI model training",
                "Dedicated account manager",
                "SLA guarantees",
                "On-premise deployment option"
            ],
            cta: "Contact Sales",
            primary: false,
            popular: false
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Simple <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-600">Start free, scale as you grow. No hidden fees.</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                            plan.primary 
                                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl scale-105' 
                                : 'border-gray-200 bg-white hover:border-purple-300'
                        }`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-500"> /user/month</span>}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className={`w-full font-bold py-3 rounded-xl transition-all duration-300 ${
                                plan.primary
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:-translate-y-0.5'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                            }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">All plans include:</p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            14-day free trial
                        </div>
                        <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            No setup fees
                        </div>
                        <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Cancel anytime
                        </div>
                        <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            SOC 2 security
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = ({ setPage }) => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Logo />
                        <p className="mt-4 text-gray-400 max-w-md">
                            Transform your meetings into action with AI-powered automation that works with your existing tools.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">T</span>
                            </div>
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">L</span>
                            </div>
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">G</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <nav className="space-y-3">
                            <button onClick={() => setPage('features')} className="block text-gray-400 hover:text-white transition-colors">Features</button>
                            <button onClick={() => setPage('how-it-works')} className="block text-gray-400 hover:text-white transition-colors">How It Works</button>
                            <button onClick={() => setPage('pricing')} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
                        </nav>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <nav className="space-y-3">
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                        </nav>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        © 2025 Agenix. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main App
export default function App() {
    const [page, setPage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const renderPage = () => {
        switch (page) {
            case 'features':
                return <FeaturesPage />;
            case 'how-it-works':
                return <HowItWorksPage />;
            case 'pricing':
                return <PricingPage />;
            case 'home':
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased">
            <Header setPage={setPage} />
            {renderPage()}
            <Footer setPage={setPage} />
        </div>
    );
}