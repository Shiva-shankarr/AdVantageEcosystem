import React from 'react';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import './Careers.css'

const FeatureCard = ({ children }) => (
  <div className="flex items-start space-x-3 mb-4">
    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </div>
);

const PositionCard = ({ title, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <Briefcase className="w-6 h-6 text-blue-600" />
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
    >
      <span>Apply Now</span>
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const ProcessStep = ({ children }) => (
  <li className="flex items-start space-x-3 mb-4">
    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
    <span className="text-gray-700">{children}</span>
  </li>
);

const Careers = () => {
  const positions = [
    {
      title: "UX Designer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "UI Designer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "Frontend Developer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "Backend Developer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "Cloud Developer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "Full Stack Developer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
    {
      title: "Marketing Analyst",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform",
    },
  ];

  return (
    <section className="py-3  to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Careers at AdVantage Ecosystem
          </h1>
          <p className="text-xl text-gray-600">
            At AdVantage Ecosystem, we're constantly evolving and seeking talented individuals to join our growing team.
            Our company culture encourages collaboration, innovation, and continuous growth.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Join Us?
            </h3>
            <div className="space-y-4">
              <FeatureCard>Exciting projects with cutting-edge technologies</FeatureCard>
              <FeatureCard>Collaborative and inclusive team environment</FeatureCard>
              <FeatureCard>Opportunities for professional growth and development</FeatureCard>
              <FeatureCard>Competitive salary and comprehensive benefits</FeatureCard>
              <FeatureCard>Work-life balance with flexible schedules</FeatureCard>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://blogimage.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Available Positions Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Open Positions
          </h3>
          <div className="grid gap-4">
            {positions.map((position, index) => (
              <PositionCard key={index} {...position} />
            ))}
          </div>
        </div>

        {/* Application Process Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Application Process
          </h3>
          <p className="text-gray-700 mb-6">
            Our application process is simple and transparent. Follow these steps:
          </p>
          <ul className="space-y-4">
            <ProcessStep>Submit your resume via the link provided for the respective position.</ProcessStep>
            <ProcessStep>Our recruitment team will review your application.</ProcessStep>
            <ProcessStep>If your profile matches our requirements, we will contact you for an interview.</ProcessStep>
            <ProcessStep>After a successful interview, you will be extended an offer to join our team.</ProcessStep>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Careers;