import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  { id: 1, category: 'editorial', title: 'Vogue Editorial', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop', description: 'Exclusive photoshoot' },
  { id: 2, category: 'glamour', title: 'Glamour Session', image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800&h=1200&fit=crop', description: 'Luxury photoshoot' },
  { id: 3, category: 'artistic', title: 'Art Nude', image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800&h=1200&fit=crop', description: 'Artistic photography' },
  { id: 4, category: 'editorial', title: 'Fashion Week', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop', description: 'Runway moments' },
  { id: 5, category: 'glamour', title: 'Boudoir', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop', description: 'Intimate session' },
  { id: 6, category: 'artistic', title: 'Fine Art', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop', description: 'Gallery exhibition' },
  { id: 7, category: 'editorial', title: 'Magazine Cover', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=1200&fit=crop', description: 'Cover story' },
  { id: 8, category: 'glamour', title: 'Luxury Brand', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1200&fit=crop', description: 'Premium campaign' },
  { id: 9, category: 'artistic', title: 'Body Art', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop', description: 'Creative concept' },
];

const services = [
  { icon: 'Camera', title: 'Editorial Shoots', description: 'High-fashion photography for magazines and publications' },
  { icon: 'Sparkles', title: 'Glamour Sessions', description: 'Luxury photoshoots and premium brand campaigns' },
  { icon: 'Palette', title: 'Artistic Projects', description: 'Creative and conceptual photography collaborations' },
  { icon: 'Film', title: 'Video Content', description: 'Professional video content for exclusive platforms' },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showAgeGate, setShowAgeGate] = useState(true);

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showAgeGate) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <Card className="max-w-md w-full bg-zinc-900 border-zinc-800 p-8 text-center">
          <Icon name="ShieldAlert" size={48} className="text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Age Verification</h2>
          <p className="text-zinc-400 mb-8">
            This website contains adult content. You must be 18 years or older to enter.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => setShowAgeGate(false)} 
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold"
              size="lg"
            >
              I'm 18+
            </Button>
            <Button 
              variant="outline" 
              className="border-zinc-700 hover:bg-zinc-800"
              size="lg"
              onClick={() => window.location.href = 'https://www.google.com'}
            >
              Exit
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-amber-500">EXCLUSIVE</span>
              <span className="text-white ml-2">PORTFOLIO</span>
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-amber-500' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 to-black"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop" 
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-none animate-fade-in">
              ELITE
              <span className="block text-amber-500">MODELING</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Exclusive content creator • Professional model • 18+ entertainment
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-black font-semibold"
              >
                View Gallery
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                size="lg"
                className="border-amber-600 text-amber-500 hover:bg-amber-950"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-5xl font-bold mb-16 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop" 
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                Professional model and content creator specializing in high-end editorial, glamour, and artistic photography.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Award" className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">8+ Years Experience</h4>
                    <p className="text-zinc-400">Working with premium brands and photographers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Globe" className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">International Work</h4>
                    <p className="text-zinc-400">Featured in publications across Europe and USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Star" className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Exclusive Content</h4>
                    <p className="text-zinc-400">Premium subscribers-only material available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-5xl font-bold mb-12 text-center">Portfolio</h3>
          
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['all', 'editorial', 'glamour', 'artistic'].map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category 
                  ? 'bg-amber-600 hover:bg-amber-700 text-black' 
                  : 'border-zinc-700 hover:bg-zinc-900 text-zinc-300'}
              >
                {category === 'all' ? 'ALL' : category.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in relative overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[2/3] overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="font-bold text-xl text-amber-500 mb-2">{item.title}</h4>
                    <p className="text-sm text-zinc-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold mb-16 text-center">Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-zinc-900 border-zinc-800 hover:border-amber-600 transition-all duration-300">
                <Icon name={service.icon as any} size={48} className="text-amber-500 mb-4" />
                <h4 className="text-2xl font-semibold mb-3 text-white">{service.title}</h4>
                <p className="text-zinc-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl font-bold mb-6">Get in Touch</h3>
          <p className="text-xl text-zinc-400 mb-12">
            Available for exclusive collaborations and custom content
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold">
              <Icon name="Mail" size={20} className="mr-2" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900">
              <Icon name="Twitter" size={20} className="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2024 Exclusive Portfolio. All rights reserved. 18+ Only.</p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">DMCA</a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-zinc-800">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="p-8 bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full">
                <h3 className="text-3xl font-bold mb-2 text-amber-500">{selectedImage.title}</h3>
                <p className="text-zinc-300 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
