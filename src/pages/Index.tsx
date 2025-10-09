import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gallery = [
    { id: 1, url: 'https://cdn.poehali.dev/files/ba073a79-8d7a-4453-95d4-404ec231b165.jpeg', alt: 'Момент 1' },
    { id: 2, url: 'https://cdn.poehali.dev/files/2a1ecd05-3bd0-4c30-9127-038757a8e271.jpeg', alt: 'Момент 2' },
    { id: 3, url: 'https://cdn.poehali.dev/projects/9e513a8e-4cf1-4509-b09f-ee53ec4a0810/files/1b7a54fe-4d2b-43e4-b990-a68c60940a4b.jpg', alt: 'Момент 3' },
    { id: 4, url: '/placeholder.svg', alt: 'Момент 4' },
    { id: 5, url: '/placeholder.svg', alt: 'Момент 5' },
    { id: 6, url: '/placeholder.svg', alt: 'Момент 6' },
  ];

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,115,85,0.1),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            HAPPY BIRTHDAY
          </h1>
          
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Сегодня твой день. День человека, который делает мир лучше просто своим присутствием. 
            Ты — воплощение силы, мудрости и благородства.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
            Пусть этот год принесёт новые победы, незабываемые моменты 
            и исполнение самых заветных желаний.
          </p>
          
          <Button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Наши моменты
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Фотогалерея</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((photo, index) => (
              <Card
                key={photo.id}
                className="group cursor-pointer overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(photo.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">{photo.alt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/50">
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