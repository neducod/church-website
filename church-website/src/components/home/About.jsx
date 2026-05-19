import React from 'react';

const AboutPreview = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Introduction */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-lime-400 font-semibold text-sm uppercase tracking-wide">
            Welcome to Our Family
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            A place where faith meets <span className="text-lime-400">purpose.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are a vibrant community dedicated to authentic worship and radical grace. 
            Whether you are just starting your spiritual journey or looking for a place 
            to call home, there is a seat at the table for you here.
          </p>
          
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 group">
            Learn More
            {/* Inline SVG Arrow */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Side: Mission & Vision Cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-lime-600 rounded-lg flex items-center justify-center mb-4 text-white">
              {/* Inline SVG Target */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-slate-600">
              To lead people into a growing relationship with Jesus Christ by creating 
              environments where they can belong, believe, and become.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-white">
              {/* Inline SVG Eye */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
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