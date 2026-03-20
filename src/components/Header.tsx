import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const glasLinks = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `${i + 1} глас`,
  path: `/glas/${i + 1}`,
}));

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
          <BookOpen className="h-5 w-5 text-accent" />
          Стихирные гласы
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {glasLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t bg-background p-4 md:hidden">
          <div className="grid grid-cols-4 gap-2">
            {glasLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-center text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
