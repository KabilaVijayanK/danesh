import React from 'react';

interface WhyChooseUsProps {
  items: string[];
  categoryId?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ items, categoryId }) => {
  const icons = [
    '✓',
    '⚙️',
    '🏭',
    '📋',
    '🚀',
    '💎',
    '🔒',
    '🌍',
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center ${
          ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '') 
            ? 'text-orange-500' 
            : 'text-brand-blue'
        }`}>
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-blue-100 text-brand-blue'
              }`}>
                {icons[index % icons.length]}
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
