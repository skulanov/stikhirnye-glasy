
import { glasyData } from "@/data/glasy";
import GlasCard from "@/components/GlasCard";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container max-w-3xl py-16">
        {/* Hero */}
        <section className="mb-12 text-center animate-fade-up">
          <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: '50%', maxWidth: '280px' }}>
            <img src="/images/pstgu-logo.png" alt="ПСТГУ" className="w-full h-auto" />
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ lineHeight: "1.1" }}>
            Стихирные гласы
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-subtitle">
            Учебное пособие по русскому православному церковному пению. Теория, нотные примеры и аудиозаписи.
          </p>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-subtitle mt-1">
            Татьяна Владимировна Скирская
          </p>
        </section>

        {/* Cards */}
        <section className="space-y-3">
          {glasyData.map((glas, i) => (
            <div key={glas.id} className="animate-fade-up" style={{ animationDelay: `${150 + i * 70}ms` }}>
              <GlasCard glas={glas} index={i} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
