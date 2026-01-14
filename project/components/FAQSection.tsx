import React, { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  categoryId?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ items, categoryId }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className={`text-3xl font-bold mb-8 text-center ${
          ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '') 
            ? 'text-orange-500' 
            : 'text-brand-blue'
        }`}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 text-left font-semibold transition-colors duration-300 flex items-center justify-between ${
                  openIndex === index
                    ? ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                      ? 'bg-orange-50 text-orange-600'
                      : 'bg-blue-50 text-brand-blue'
                    : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span>{item.q}</span>
                <span className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
