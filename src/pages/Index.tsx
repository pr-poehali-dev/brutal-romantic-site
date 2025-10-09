import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const gallery = [
    { id: 1, url: 'https://cdn.poehali.dev/files/396ea15e-0875-45ba-b6c3-f2360f45a179.jpeg', alt: 'Термальный комплекс' },
    { id: 2, url: 'https://cdn.poehali.dev/files/446c1a54-a64a-4664-be77-31f7cec0d6f2.jpeg', alt: 'Бассейн' },
    { id: 3, url: 'https://cdn.poehali.dev/files/31b33441-bbf2-4c65-af35-a38b7b12c4d0.jpeg', alt: 'Природа' },
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
            Сегодня твой день. День человека, который делает мою жизнь лучше просто своим присутствием. 
            Ты для меня - воплощение силы, мужества и благородства.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto italic">
            Пусть этот год принесёт новые победы, незабываемые моменты 
            и исполнение самых заветных желаний.
          </p>
          

        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Фотогалерея</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Приглашаю провести незабываемый день на термальном комплексе в окружении адыгейских гор. С собой обязательно возьми хорошее настроение и меня 😁
            </p>
            <p className="text-lg text-muted-foreground">
              Адрес: Хаджохская ул., 26, посёлок Каменномостский
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-border bg-card">
              <img
                src={gallery[currentSlide].url}
                alt={gallery[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background border-2 border-border flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background border-2 border-border flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            <div className="flex justify-center gap-2 mt-6">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">P.S. С любовью, твоя Поля ❤️</p>
          <p className="text-sm text-muted-foreground/60">
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}