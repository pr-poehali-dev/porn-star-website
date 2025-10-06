import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  { id: 1, category: 'fashion', title: 'Fashion Editorial 2024', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop', description: 'Съемка для ведущего fashion-журнала' },
  { id: 2, category: 'commercial', title: 'Рекламная кампания', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop', description: 'Коммерческая съемка для бренда' },
  { id: 3, category: 'art', title: 'Арт-проект', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop', description: 'Креативная концептуальная съемка' },
  { id: 4, category: 'fashion', title: 'Подиумная работа', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop', description: 'Показ на неделе моды' },
  { id: 5, category: 'commercial', title: 'Бьюти кампания', image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop', description: 'Съемка косметической линии' },
  { id: 6, category: 'art', title: 'Авторская серия', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop', description: 'Персональная выставка' },
];

const services = [
  { icon: 'Camera', title: 'Fashion съемки', description: 'Профессиональная работа на подиуме и в студии' },
  { icon: 'Sparkles', title: 'Рекламные кампании', description: 'Коммерческие проекты для брендов и агентств' },
  { icon: 'Palette', title: 'Арт-проекты', description: 'Креативные концептуальные съемки' },
  { icon: 'Video', title: 'Видео контент', description: 'Создание визуального контента для соцсетей' },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'about' ? 'Обо мне' :
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'services' ? 'Услуги' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональная
                <span className="block bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                  модель
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Создаю визуальные истории для модных брендов и креативных проектов
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Посмотреть работы
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop" 
                  alt="Portfolio hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Обо мне</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-blue-600 transition-colors">
              <Icon name="Award" size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">8+ лет опыта</h4>
              <p className="text-slate-600">Работаю с ведущими модными домами и фотографами</p>
            </Card>
            <Card className="p-6 border-2 hover:border-blue-600 transition-colors">
              <Icon name="Globe" size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Международный опыт</h4>
              <p className="text-slate-600">Съемки в Париже, Милане, Нью-Йорке</p>
            </Card>
            <Card className="p-6 border-2 hover:border-blue-600 transition-colors">
              <Icon name="Star" size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">50+ проектов</h4>
              <p className="text-slate-600">Участие в рекламных кампаниях и показах</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-8 text-center">Портфолио</h3>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'fashion', 'commercial', 'art'].map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                {category === 'all' ? 'Все работы' :
                 category === 'fashion' ? 'Fashion' :
                 category === 'commercial' ? 'Реклама' : 'Арт'}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Услуги</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <Icon name={service.icon as any} size={48} className="text-blue-600 mb-4" />
                <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                <p className="text-slate-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">Свяжитесь со мной</h3>
          <p className="text-xl text-slate-600 mb-12">
            Готова обсудить новые проекты и сотрудничество
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Телефон
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">© 2024 Portfolio. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-slate-600">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
