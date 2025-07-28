import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-primary">MACTVN</h1>
              <p className="text-xs text-muted-foreground">Kế toán chuyên nghiệp</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-brand-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-brand-primary">
              <Phone className="w-4 h-4" />
              <a href="tel:0396619418" className="font-semibold hover:text-brand-secondary transition-colors">
                039 6619 418
              </a>
            </div>
            <Button variant="cta" onClick={() => scrollToSection("#contact")}>
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-brand-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-2 text-brand-primary py-2">
                <Phone className="w-4 h-4" />
                <a href="tel:0396619418" className="font-semibold">
                  039 6619 418
                </a>
              </div>
              <Button variant="cta" onClick={() => scrollToSection("#contact")} className="w-full">
                Tư vấn miễn phí
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;