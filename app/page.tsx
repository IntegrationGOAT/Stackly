'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                🚀 Welcome to the Future of SaaS
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Build Amazing Things
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Stackly
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              The ultimate platform for modern teams. Streamline your workflow, collaborate seamlessly, 
              and boost productivity like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/login"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white rounded-lg text-lg font-semibold border-2 border-gray-200 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className={`mt-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-zinc-700">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">S</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of teams already using Stackly to transform their workflow
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stackly
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              © 2026 Stackly. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-zinc-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that keeps your team moving forward.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption to keep your data safe.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration tools and features.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Get insights with powerful analytics and easy-to-understand visualizations.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Modern, intuitive interface that your team will love to use every day.',
  },
  {
    icon: '🚀',
    title: 'Rapid Deployment',
    description: 'Get up and running in minutes with our streamlined onboarding process.',
  },
];
