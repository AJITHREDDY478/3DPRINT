// Mock data for 3DGURU Landing Page

export const siteData = {
  name: "3DPRINT",
  tagline: "Your Ultimate 3D Printing Companion App",
  
  promo: {
    text: "Launch Special: 20% Off All Models! Use Code: PRINT20",
    emoji: "🚀"
  },

  hero: {
    headline: "Create. Print. Innovate.",
    subtext: "Your Ultimate 3D Printing Companion App",
    primaryCTA: "Get Started Now",
    secondaryCTA: "Watch Demo",
    floatingCards: [
      {
        title: "Model Library",
        items: ["Robot", "Helmet", "Vase"]
      },
      {
        title: "Print Settings",
        settings: [
          { label: "Layer Height", value: "0.2mm" },
          { label: "Infill Density", value: "20%" },
          { label: "Speed", value: "60mm/s" }
        ]
      },
      {
        title: "Live Monitoring",
        progress: 68,
        status: "Printing..."
      }
    ]
  },

  features: [
    {
      id: 1,
      icon: "Box",
      title: "Models",
      description: "Browse thousands of free & premium 3D models ready to print",
      color: "blue"
    },
    {
      id: 2,
      icon: "Grid3x3",
      title: "Categories",
      description: "Explore organized collections from toys to functional parts",
      color: "purple"
    },
    {
      id: 3,
      icon: "Palette",
      title: "Custom Designs",
      description: "Create and customize your own unique 3D designs easily",
      color: "cyan"
    },
    {
      id: 4,
      icon: "ShoppingCart",
      title: "Shop",
      description: "Manage your orders, purchases and download history",
      color: "orange"
    }
  ],

  exploreModels: [
    {
      id: 1,
      name: "Robot Figurine",
      category: "Miniatures",
      price: "Free",
      image: "robot",
      downloads: 1234
    },
    {
      id: 2,
      name: "Medieval Castle",
      category: "Architecture",
      price: "$4.99",
      image: "castle",
      downloads: 856
    },
    {
      id: 3,
      name: "Decorative Vase",
      category: "Home Decor",
      price: "$2.99",
      image: "vase",
      downloads: 2341
    }
  ],

  categories: [
    {
      id: 1,
      name: "Miniatures",
      description: "Detailed figurines, characters, and collectibles",
      modelCount: 1250,
      color: "from-blue-400 to-purple-500",
      icon: "Users"
    },
    {
      id: 2,
      name: "Gadgets",
      description: "Phone holders, organizers, and everyday tools",
      modelCount: 890,
      color: "from-cyan-400 to-blue-500",
      icon: "Smartphone"
    },
    {
      id: 3,
      name: "Prototypes",
      description: "Functional parts, mechanical components, and designs",
      modelCount: 654,
      color: "from-orange-400 to-pink-500",
      icon: "Settings"
    }
  ],

  stats: [
    { label: "3D Models", value: "10,000+" },
    { label: "Active Users", value: "50,000+" },
    { label: "Downloads", value: "1M+" },
    { label: "Creators", value: "5,000+" }
  ]
};

export default siteData;
