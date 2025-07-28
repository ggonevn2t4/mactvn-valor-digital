import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary opacity-95"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 border-2 border-white rounded-lg"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-medium">Dịch vụ kế toán hàng đầu Việt Nam</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Dịch Vụ Kế Toán
            <span className="block text-brand-accent">Chuyên Nghiệp</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl">MACT Việt Nam</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 font-semibold text-brand-accent">
            "Giá trị dịch thực - Lợi ích dịch thực"
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
            Đối tác tin cậy trong lĩnh vực kế toán, thuế và kiểm toán với đội ngũ chuyên gia giàu kinh nghiệm, 
            cam kết mang đến những giải pháp tối ưu cho doanh nghiệp của bạn.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="accent"
              onClick={() => scrollToSection("#contact")}
              className="text-lg px-8 py-6 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nhận tư vấn ngay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <FileText className="w-5 h-5 mr-2" />
              Xem dịch vụ
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-brand-accent" />
              <span className="font-semibold">Hotline:</span>
              <a href="tel:0396619418" className="text-brand-accent hover:text-white transition-colors font-bold text-lg">
                039 6619 418
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div>
              <span className="font-semibold">Email:</span>
              <a href="mailto:consulting@mactvn.com" className="text-brand-accent hover:text-white transition-colors ml-2">
                consulting@mactvn.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;