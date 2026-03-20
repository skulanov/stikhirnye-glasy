import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { glasyData } from "@/data/glasy";
import { glasAudio } from "@/data/audioData";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";

const GlasDetail = () => {
  const { id } = useParams<{ id: string }>();
  const glasId = Number(id);
  const glas = glasyData.find((g) => g.id === glasId);

  if (!glas) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container max-w-3xl py-16 text-center">
          <h1 className="text-2xl font-semibold">Глас не найден</h1>
          <Link to="/" className="mt-4 inline-block text-accent underline underline-offset-4">
            Вернуться к списку
          </Link>
        </main>
      </div>
    );
  }

  const prevGlas = glasId > 1 ? glasId - 1 : null;
  const nextGlas = glasId < 8 ? glasId + 1 : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container max-w-3xl py-12">
        {/* Title */}
        <section className="mb-8 animate-fade-up">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl" style={{ lineHeight: "1.1" }}>
            {glas.title}
          </h1>
          <p className="text-lg text-subtitle">{glas.subtitle}</p>
          <div className="mt-4 inline-block rounded-md bg-secondary px-4 py-2 font-mono text-sm">
            Структура: {glas.schema}
          </div>
        </section>

        {/* Description */}
        <section className="mb-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="text-base leading-relaxed text-foreground">{glas.description}</p>
        </section>

        {/* Content placeholder */}
        <section
          className="mb-10 rounded-lg border border-dashed border-border bg-card p-10 text-center animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-sm text-muted-foreground">
            Здесь будет материал по {glas.id} гласу — статья, нотные примеры и аудиозаписи.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Загрузите контент, чтобы он появился на этой странице.
          </p>
        </section>

        {/* Navigation */}
        <nav className="flex items-center justify-between border-t pt-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
          {prevGlas ? (
            <Link
              to={`/glas/${prevGlas}`}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {prevGlas} глас
            </Link>
          ) : (
            <div />
          )}
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Все гласы
          </Link>
          {nextGlas ? (
            <Link
              to={`/glas/${nextGlas}`}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {nextGlas} глас
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </div>
  );
};

export default GlasDetail;
