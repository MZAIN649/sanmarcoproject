import React from 'react';

interface ComparisonItem {
  feature: string;
  sanmarco: string;
  competitor1: string;
  competitor2: string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Location',
    sanmarco: 'Prime Murree Expressway',
    competitor1: 'Remote Location',
    competitor2: 'Limited Access'
  },
  {
    feature: 'Plot Sizes',
    sanmarco: '3-6 Marla Options',
    competitor1: 'Limited Options',
    competitor2: 'Fixed Sizes'
  },
  {
    feature: 'Infrastructure',
    sanmarco: 'Complete Development',
    competitor1: 'Basic Facilities',
    competitor2: 'Under Development'
  },
  {
    feature: 'ROI Potential',
    sanmarco: 'High Tourism Value',
    competitor1: 'Moderate',
    competitor2: 'Limited'
  }
];

const WhyInvest: React.FC = () => {
  return (
    <section id="why-invest" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Sanmarco Murree Cottages?</h2>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Tourism Potential</h3>
            <p className="text-gray-600">
              Murree's year-round tourism ensures consistent rental income and property value appreciation.
            </p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Legal Status</h3>
            <p className="text-gray-600">
              All necessary NOCs and approvals in place. Clear title and ownership rights guaranteed.
            </p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
            <p className="text-gray-600">
              Complete infrastructure development including roads, water, and electricity.
            </p>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Comparison with Other Projects</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 border-b text-left">Feature</th>
                  <th className="px-6 py-3 border-b text-left">Sanmarco</th>
                  <th className="px-6 py-3 border-b text-left">Grand Hills</th>
                  <th className="px-6 py-3 border-b text-left">Holiday Homes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 border-b">{item.feature}</td>
                    <td className="px-6 py-4 border-b font-semibold text-blue-600">{item.sanmarco}</td>
                    <td className="px-6 py-4 border-b">{item.competitor1}</td>
                    <td className="px-6 py-4 border-b">{item.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">What Our Investors Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">
                "The location and development quality of Sanmarco Murree Cottages is exceptional. The rental returns have exceeded our expectations."
              </p>
              <p className="font-semibold">- Ahmed Khan, Investor</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">
                "The team's transparency and professionalism made the investment process smooth. The property value has appreciated significantly."
              </p>
              <p className="font-semibold">- Sarah Malik, Property Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest; 