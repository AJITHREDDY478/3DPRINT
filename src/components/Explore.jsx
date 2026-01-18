import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import siteData from '../mock';

const Explore = () => {
  const { exploreModels } = siteData;

  return (
    <section id="explore" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Endless Possibilities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover thousands of ready-to-print 3D models from talented creators worldwide
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Browse Models
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {exploreModels.map((model) => (
            <Card
              key={model.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl group"
            >
              {/* Model Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {model.image === 'robot' && (
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl">
                      ROBOT
                    </div>
                  </div>
                )}
                {model.image === 'castle' && (
                  <div className="relative">
                    <div className="w-24 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg transform group-hover:scale-110 transition-all duration-300">
                      <div className="absolute top-0 left-0 w-6 h-8 bg-purple-600 rounded-t"></div>
                      <div className="absolute top-0 right-0 w-6 h-8 bg-purple-600 rounded-t"></div>
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        CASTLE
                      </div>
                    </div>
                  </div>
                )}
                {model.image === 'vase' && (
                  <div className="w-20 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 flex items-center justify-center text-white font-bold text-xl">
                    VASE
                  </div>
                )}
                <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-semibold">
                  {model.price}
                </Badge>
              </div>

              {/* Model Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{model.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Download className="w-4 h-4" />
                    <span>{model.downloads.toLocaleString()}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
