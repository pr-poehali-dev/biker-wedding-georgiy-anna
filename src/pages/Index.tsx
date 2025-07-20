import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-brutal-black text-brutal-white font-oswald">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-brutal-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/img/50d0b2cf-16b5-4f63-99bb-be8e4cf41bd2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 brutal-text text-brutal-white drop-shadow-lg">
              ГЕОРГИЙ <span className="text-brutal-red">&</span> АННА
            </h1>
            <div className="text-3xl md:text-4xl font-semibold mb-8 text-brutal-silver">
              🏍️ БАЙКЕРСКАЯ СВАДЬБА 🏍️
            </div>
            <div className="text-xl md:text-2xl mb-12 brutal-text">
              2 АВГУСТА 2025
            </div>
            <Button className="brutal-button text-xl px-8 py-4 animate-pulse-red">
              ПОДТВЕРДИТЬ УЧАСТИЕ
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brutal-black border-b-2 border-brutal-red">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8 text-sm md:text-base">
            <a href="#program" className="brutal-text hover:text-brutal-red transition-colors">ПРОГРАММА</a>
            <a href="#location" className="brutal-text hover:text-brutal-red transition-colors">МЕСТО</a>
            <a href="#rsvp" className="brutal-text hover:text-brutal-red transition-colors">УЧАСТИЕ</a>
            <a href="#gifts" className="brutal-text hover:text-brutal-red transition-colors">ПОДАРКИ</a>
            <a href="#story" className="brutal-text hover:text-brutal-red transition-colors">ИСТОРИЯ</a>
          </div>
        </div>
      </nav>

      {/* Program Section */}
      <section id="program" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 brutal-text">
            🏍️ ПРОГРАММА ДНЯ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { time: "14:00", event: "СБОР БАЙКЕРОВ", icon: "Bike" },
              { time: "15:00", event: "ЦЕРЕМОНИЯ", icon: "Heart" },
              { time: "16:00", event: "ФОТОСЕССИЯ", icon: "Camera" },
              { time: "17:00", event: "БАНКЕТ", icon: "UtensilsCrossed" },
              { time: "20:00", "event": "БАЙКЕРСКАЯ ВЕЧЕРИНКА", icon: "Music" },
              { time: "23:00", event: "НОЧНОЙ ЗАЕЗД", icon: "Moon" },
            ].map((item, index) => (
              <Card key={index} className="brutal-card">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon name={item.icon} size={48} className="text-brutal-red" />
                  </div>
                  <CardTitle className="text-2xl brutal-text text-brutal-red">
                    {item.time}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-lg brutal-text text-brutal-white">
                    {item.event}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 brutal-text">
            📍 МЕСТО ПРОВЕДЕНИЯ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="brutal-card">
              <CardHeader>
                <CardTitle className="text-2xl brutal-text text-brutal-red">
                  БАЙКЕР-КЛУБ "ЧЕРНЫЕ ВОЛКИ"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brutal-white">
                  <Icon name="MapPin" className="inline mr-2 text-brutal-red" />
                  ул. Мотоциклистов, 13, Москва
                </p>
                <p className="text-brutal-white">
                  <Icon name="Phone" className="inline mr-2 text-brutal-red" />
                  +7 (999) 123-45-67
                </p>
                <p className="text-brutal-white">
                  <Icon name="Car" className="inline mr-2 text-brutal-red" />
                  Парковка для мотоциклов
                </p>
                <Button className="brutal-button w-full">
                  ОТКРЫТЬ КАРТУ
                </Button>
              </CardContent>
            </Card>
            <div className="bg-gray-800 p-8 rounded border-2 border-brutal-red">
              <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
                <Icon name="Map" size={64} className="text-brutal-red" />
                <span className="ml-4 text-xl brutal-text">ИНТЕРАКТИВНАЯ КАРТА</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 brutal-text">
            ✊ ПОДТВЕРДИТЬ УЧАСТИЕ
          </h2>
          <Card className="brutal-card">
            <CardHeader>
              <CardTitle className="text-2xl brutal-text text-brutal-red text-center">
                ПРИСОЕДИНЯЙСЯ К НАШЕЙ БАНДЕ!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="brutal-text text-brutal-white block mb-2">ИМЯ БАЙКЕРА</label>
                <Input 
                  placeholder="Введи свой позывной..."
                  className="bg-gray-800 border-brutal-red text-brutal-white"
                />
              </div>
              <div>
                <label className="brutal-text text-brutal-white block mb-2">КОНТАКТЫ</label>
                <Input 
                  type="email"
                  placeholder="email@example.com"
                  className="bg-gray-800 border-brutal-red text-brutal-white"
                />
              </div>
              <div>
                <label className="brutal-text text-brutal-white block mb-2">КОЛИЧЕСТВО БАЙКЕРОВ</label>
                <Input 
                  type="number"
                  placeholder="Сколько вас?"
                  className="bg-gray-800 border-brutal-red text-brutal-white"
                />
              </div>
              <div>
                <label className="brutal-text text-brutal-white block mb-2">ОСОБЫЕ ПОЖЕЛАНИЯ</label>
                <Textarea 
                  placeholder="Расскажи о своих предпочтениях..."
                  className="bg-gray-800 border-brutal-red text-brutal-white"
                />
              </div>
              <Button className="brutal-button w-full text-xl py-4">
                ПОДТВЕРДИТЬ УЧАСТИЕ 🏍️
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 brutal-text">
            🎁 СПИСОК ЖЕЛАЕМЫХ ПОДАРКОВ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { item: "Мотоэкипировка", icon: "Shield", description: "Шлемы, куртки, перчатки" },
              { item: "Запчасти для мотоцикла", icon: "Wrench", description: "Любые аксессуары для железных коней" },
              { item: "Байкерские аксессуары", icon: "Star", description: "Цепи, нашивки, значки" },
              { item: "Походное снаряжение", icon: "Tent", description: "Для долгих поездок" },
              { item: "Деньги на медовый месяц", icon: "CreditCard", description: "На кругосветное путешествие" },
              { item: "Байкерская атрибутика", icon: "Skull", description: "Декор в стиле рок-н-ролл" },
            ].map((gift, index) => (
              <Card key={index} className="brutal-card">
                <CardHeader className="text-center">
                  <Icon name={gift.icon} size={48} className="text-brutal-red mx-auto mb-4" />
                  <CardTitle className="text-xl brutal-text text-brutal-red">
                    {gift.item}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-brutal-white">
                    {gift.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 brutal-text">
            💘 НАША ИСТОРИЯ ЛЮБВИ
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="brutal-card">
              <CardContent className="p-12">
                <div className="text-center space-y-8">
                  <div className="text-6xl">🏍️💕🏍️</div>
                  <p className="text-xl text-brutal-white leading-relaxed">
                    Георгий и Анна встретились на байк-фестивале "Железные Волки" в 2023 году. 
                    Их любовь зародилась под рев мотоциклов и запах бензина. 
                  </p>
                  <p className="text-xl text-brutal-white leading-relaxed">
                    Два года они колесили по дорогам России, покоряя новые маршруты и 
                    строя планы на будущее. Теперь они готовы объединить свои судьбы 
                    в одну большую байкерскую семью.
                  </p>
                  <div className="text-2xl brutal-text text-brutal-red">
                    "ВМЕСТЕ НА ДОРОГЕ ЖИЗНИ"
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 brutal-text">
            📞 КОНТАКТЫ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="brutal-card">
              <CardHeader>
                <CardTitle className="text-xl brutal-text text-brutal-red">ГЕОРГИЙ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brutal-white">
                  <Icon name="Phone" className="inline mr-2 text-brutal-red" />
                  +7 (999) 111-22-33
                </p>
              </CardContent>
            </Card>
            <Card className="brutal-card">
              <CardHeader>
                <CardTitle className="text-xl brutal-text text-brutal-red">АННА</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brutal-white">
                  <Icon name="Phone" className="inline mr-2 text-brutal-red" />
                  +7 (999) 444-55-66
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brutal-black border-t-2 border-brutal-red py-8">
        <div className="container mx-auto text-center">
          <p className="brutal-text text-brutal-silver">
            💀 БАЙКЕРСКАЯ СВАДЬБА ГЕОРГИЯ И АННЫ • 2 АВГУСТА 2025 💀
          </p>
          <p className="text-brutal-white mt-2">
            "Дорога дальняя, но мы едем вместе"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;