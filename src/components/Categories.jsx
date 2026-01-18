import React from 'react';
import { Users, Smartphone, Settings } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import siteData from '../mock';

const iconMap = {
  Users: Users,
  Smartphone: Smartphone,
  Settings: Settings
};

const Categories = () => {
  const { categories } = siteData;

  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Will You Create?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated categories and find the perfect model for your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            
            return (
              <Card
                key={category.id}
                className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl group cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Model Count Badge */}
                  <Badge className="bg-white text-gray-900 font-semibold px-4 py-2 text-sm">
                    {category.modelCount.toLocaleString()} models
                  </Badge>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
