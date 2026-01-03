import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const services = [
  {
    id: 1,
    title: 'Подписчики Instagram',
    description: 'Живые активные подписчики для вашего аккаунта',
    price: 'от 150₽',
    icon: 'Users',
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    id: 2,
    title: 'Лайки в Instagram',
    description: 'Быстрая накрутка лайков на посты',
    price: 'от 50₽',
    icon: 'Heart',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 3,
    title: 'Просмотры YouTube',
    description: 'Увеличение просмотров ваших видео',
    price: 'от 200₽',
    icon: 'Play',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Подписчики TikTok',
    description: 'Рост аудитории в TikTok',
    price: 'от 180₽',
    icon: 'Music',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 5,
    title: 'Лайки ВКонтакте',
    description: 'Накрутка лайков для постов ВК',
    price: 'от 40₽',
    icon: 'ThumbsUp',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 6,
    title: 'Комментарии',
    description: 'Живые комментарии от реальных пользователей',
    price: 'от 100₽',
    icon: 'MessageCircle',
    gradient: 'from-violet-500 to-purple-500'
  }
];

const features = [
  { icon: 'Zap', title: 'Быстрый старт', description: 'Начало выполнения заказа в течение 5 минут' },
  { icon: 'Shield', title: 'Безопасно', description: 'Гарантия безопасности вашего аккаунта' },
  { icon: 'TrendingUp', title: 'Высокое качество', description: 'Только живые и активные аккаунты' },
  { icon: 'Headphones', title: 'Поддержка 24/7', description: 'Всегда на связи для решения ваших вопросов' }
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Чем могу помочь?', sender: 'support', time: 'Только что' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: 'Только что'
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');

    setTimeout(() => {
      const supportMessage = {
        id: messages.length + 2,
        text: 'Спасибо за сообщение! Наш менеджер ответит вам в ближайшее время.',
        sender: 'support',
        time: 'Только что'
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SMM Boost
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="Plus" size={16} className="mr-1" />
              Новый заказ
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="Package" size={16} className="mr-1" />
              Мои заказы
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="Layers" size={16} className="mr-1" />
              Массовый заказ
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="User" size={16} className="mr-1" />
              Профиль
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="Code" size={16} className="mr-1" />
              API
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Icon name="BookOpen" size={16} className="mr-1" />
              Блог
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Icon name="Headphones" size={16} className="mr-1" />
              Поддержка
            </Button>
          </div>
        </div>
      </nav>

      <section className={`pt-32 pb-20 px-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 animate-scale-in">
            🚀 Быстрая раскрутка соцсетей
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-gradient-shift">
            Взлетай в соцсетях
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Качественная накрутка подписчиков, лайков и просмотров для Instagram, TikTok, YouTube и других платформ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-muted transition-all hover:scale-105 text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Выберите соцсеть</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-12">
            {[
              { name: 'Likee', icon: 'Heart' },
              { name: 'OK', icon: 'Users' },
              { name: 'VC.ru', icon: 'FileText' },
              { name: 'DTF', icon: 'Newspaper' },
              { name: 'Pinterest', icon: 'Image' },
              { name: 'Wildberries', icon: 'ShoppingBag' },
              { name: 'Steam', icon: 'Gamepad2' },
              { name: 'Shazam', icon: 'Music' },
              { name: 'MAX', icon: 'Video' },
              { name: 'Трафик', icon: 'TrendingUp' }
            ].map((social, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105"
              >
                <Icon name={social.icon} size={24} />
                <span className="text-xs">{social.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:scale-105 hover:border-primary/50 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div id="services" className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий вариант для роста вашего аккаунта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={service.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in relative overflow-hidden group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary animate-float">
                    🔥 Популярно
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-foreground">{service.price}</span>
                    <Badge variant="outline" className="border-primary/50">за 1000</Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all group-hover:scale-105">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ссылка на профиль</label>
                          <Input placeholder="https://instagram.com/username" className="bg-background" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Количество</label>
                          <Input type="number" placeholder="1000" className="bg-background" />
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Итого:</span>
                            <span className="text-2xl font-bold text-primary">{service.price}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          Перейти к оплате
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Более 10 000 довольных клиентов доверяют нам продвижение своих аккаунтов
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-secondary mb-2">99%</div>
              <div className="text-muted-foreground">Успешных заказов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">5 мин</div>
              <div className="text-muted-foreground">Старт работы</div>
            </div>
          </div>
        </div>
      </section>

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isChatOpen ? 'w-96 h-[500px]' : 'w-auto h-auto'}`}>
        {isChatOpen ? (
          <Card className="w-full h-full flex flex-col border-border bg-card shadow-2xl animate-slide-up">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Headphones" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-white">Поддержка</CardTitle>
                    <p className="text-white/80 text-sm">Онлайн</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" onClick={() => setIsChatOpen(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.sender === 'user' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-card border border-border'}`}>
                    <p className="text-sm">{msg.text}</p>
                    <span className={`text-xs ${msg.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>{msg.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <Textarea 
                  placeholder="Напишите сообщение..." 
                  className="resize-none bg-background"
                  rows={2}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button size="icon" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 self-end" onClick={handleSendMessage}>
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Button 
            size="lg" 
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-2xl hover:scale-110 transition-all animate-float"
            onClick={() => setIsChatOpen(true)}
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
        )}
      </div>

      <footer className="border-t border-border py-12 px-4 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">О компании</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мониторинг услуг 24/7</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Отзывы / Темы на форумах</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Словарь терминов</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Деньги на баланс за отзыв</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Реселлерам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Правовая информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Информация о возврате средств</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Пользовательское соглашение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:support@smmboost.ru" className="hover:text-foreground transition-colors">support@smmboost.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Онлайн-чат 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-foreground transition-colors">8 (800) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© 2026 SMM Boost. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}