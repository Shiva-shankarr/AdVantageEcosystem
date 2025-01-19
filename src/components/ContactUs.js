import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import './ContactUs.css'

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              At AdVantage Ecosystem, we're eager to hear from you. Whether you have questions, feedback, or need support, feel free to reach out to us using the form below.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-2  btn-secondary text-dark px-6 py-3 rounded-lg  duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">Connect with Us</h2>
            <p className="text-white mb-8">
              Follow us on our social media platforms for updates and more:
            </p>
            <div className="flex social-link space-x-4 mb-12">
              <SocialLink href="https://www.linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://www.facebook.com" icon={Facebook} label="Facebook" />
              <SocialLink href="https://www.twitter.com" icon={Twitter} label="Twitter" />
              <SocialLink href="https://www.instagram.com" icon={Instagram} label="Instagram" />
            </div>

            {/* About Section */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">About AdVantage Ecosystem</h3>
              <p className="text-gray-700">
                AdVantage Ecosystem is a platform dedicated to driving innovation and empowering individuals to achieve more. We are transforming the future of education through a dynamic, decentralized platform that connects communities, learners, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;