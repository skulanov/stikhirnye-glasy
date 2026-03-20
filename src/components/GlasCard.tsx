import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { GlasData } from "@/data/glasy";

interface GlasCardProps {
  glas: GlasData;
  index: number;
}

const GlasCard = ({ glas, index }: GlasCardProps) => {
  return (
    <Link
      to={`/glas/${glas.id}`}
      className="group block rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-accent/30 active:scale-[0.98]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-semibold tracking-tight">{glas.title}</h2>
            <span className="text-xs font-medium uppercase tracking-wider text-subtitle">
              {glas.subtitle}
            </span>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            Схема: &nbsp;{glas.schema}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {glas.description}
          </p>
        </div>
        <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </Link>
  );
};

export default GlasCard;
