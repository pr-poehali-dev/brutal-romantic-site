import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const gallery = [
    { id: 1, url: 'https://cdn.poehali.dev/files/ba073a79-8d7a-4453-95d4-404ec231b165.jpeg', alt: '' },
    { id: 2, url: 'https://cdn.poehali.dev/files/2a1ecd05-3bd0-4c30-9127-038757a8e271.jpeg', alt: '' },
    { id: 3, url: 'https://cdn.poehali.dev/files/164f2a74-0c18-4ba8-9168-bf37a38ec943.jpeg', alt: '' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallery.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, gallery.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const wishes = [
    {
      icon: 'Heart',
      title: 'Сила и здоровье',
      text: 'Пусть каждый день приносит энергию для новых свершений',
    },
    {
      icon: 'Sparkles',
      title: 'Исполнение желаний',
      text: 'Все твои цели и мечты обязательно станут реальностью',
    },
    {
      icon: 'TrendingUp',
      title: 'Успех и рост',
      text: 'Карьера, личные достижения — всё будет на высшем уровне',
    },
    {
      icon: 'Users',
      title: 'Верные друзья',
      text: 'Рядом всегда будут те, кто поддержит в любой ситуации',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          {gallery.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
            HAPPY BIRTHDAY
          </h1>
          
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Сегодня твой день. День человека, который делает мир лучше просто своим присутствием. 
            Ты — воплощение силы, мудрости и благородства.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto italic">
            Пусть этот год принесёт новые победы, незабываемые моменты 
            и исполнение самых заветных желаний.
          </p>
          
          <Button 
            onClick={() => document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Смотреть дальше
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="wishes" className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Пожелания</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wishes.map((wish, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-card animate-scale-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={wish.icon as any} size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{wish.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{wish.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Видео</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 bg-card">
            <div className="relative aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="Play" size={64} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Добавьте ваше особенное видео</p>
                <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Загрузить видео
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Heart" className="text-primary" size={24} />
            <p className="text-lg text-muted-foreground">С любовью и уважением</p>
            <Icon name="Heart" className="text-primary" size={24} />
          </div>
          <p className="text-sm text-muted-foreground/60">
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}