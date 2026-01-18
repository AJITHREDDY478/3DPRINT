import React from 'react';
import { Play, Printer, Box, Settings, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import siteData from '../mock';

const Hero = () => {
  const { hero } = siteData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {hero.headline.split('.').map((part, index) => (
                <span key={index}>
                  {part}
                  {index < 2 && '.'}
                  {index < 2 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10">
              {hero.subtext}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {hero.primaryCTA}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-6 text-base md:text-lg font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {hero.secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Right - 3D Printer Illustration with Floating Cards */}
          <div className="relative">
            {/* Main Printer */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Printer className="w-full h-48 text-blue-500 mx-auto" />
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg animate-pulse"></div>
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold">Printing Rocket</p>
                      <p className="text-xs">Layer 45/68</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 - Model Library */}
              <Card className="absolute -top-4 -left-4 md:-left-12 w-48 p-4 bg-white shadow-xl border-0 animate-float">
                <div className="flex items-center gap-2 mb-3">
                  <Box className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-sm">Model Library</h4>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-xs">Robot</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center text-xs">Helm</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center text-xs">Vase</div>
                </div>
              </Card>

              {/* Floating Card 2 - Print Settings */}
              <Card className="absolute top-20 -right-4 md:-right-12 w-52 p-4 bg-white shadow-xl border-0 animate-float-delay">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-purple-500" />
                  <h4 className="font-semibold text-sm">Print Settings</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Layer Height</span>
                    <span className="font-medium">0.2mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Infill Density</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speed</span>
                    <span className="font-medium">60mm/s</span>
                  </div>
                </div>
              </Card>

              {/* Floating Card 3 - Live Monitoring */}
              <Card className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-56 p-4 bg-white shadow-xl border-0 animate-float-delay-2">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-green-500" />
                  <h4 className="font-semibold text-sm">Live Monitoring</h4>
                </div>
                <Progress value={68} className="h-2 mb-2" />
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Printing...</span>
                  <span className="font-semibold text-blue-600">68%</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
