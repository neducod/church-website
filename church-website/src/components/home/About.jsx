import React from 'react';
import { ArrowRight, Target, Eye, Cross } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Introduction */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Welcome to Our Family
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            A place where faith meets <span className="text-blue-600">purpose.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are a vibrant community dedicated to authentic worship and radical grace. 
            Whether you are just starting your spiritual journey or looking for a place 
            to call home, there is a seat at the table for you here.
          </p>
          
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 group">
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Mission & Vision Cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-slate-600">
              To lead people into a growing relationship with Jesus Christ by creating 
              environments where they can belong, believe, and become.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-slate-600 italic">
              "Raising people of purpose, faith, and kingdom impact."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;