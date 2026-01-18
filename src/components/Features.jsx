import React from 'react';
import { Box, Grid3x3, Palette, ShoppingCart } from 'lucide-react';
import { Card } from './ui/card';
import siteData from '../mock';

const iconMap = {
  Box: Box,
  Grid3x3: Grid3x3,
  Palette: Palette,
  ShoppingCart: ShoppingCart
};

const colorMap = {
  blue: 'from-blue-400 to-blue-600',
  purple: 'from-purple-400 to-purple-600',
  cyan: 'from-cyan-400 to-cyan-600',
  orange: 'from-orange-400 to-orange-600'
};

const Features = () => {
  const { features } = siteData;

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you create, discover, and manage your 3D printing projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            const gradient = colorMap[feature.color];
            
            return (
              <Card
                key={feature.id}
                className="p-6 md:p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
