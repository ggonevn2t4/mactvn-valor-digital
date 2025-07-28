import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    "Dịch vụ Kế toán",
    "Tư vấn Thuế",
    "Dịch vụ Chuyên gia",
    "Kiểm toán",
    "Tư vấn Pháp lý"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-brand-text font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MACTVN</h3>
                <p className="text-sm text-white/80">Kế toán chuyên nghiệp</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Công ty TNHH MACT Việt Nam - Đối tác tin cậy trong lĩnh vực kế toán, thuế và kiểm toán 
              với slogan "Giá trị dịch thực - Lợi ích dịch thực".
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-text transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-text transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-text transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-accent">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/90 hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-accent">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/90 hover:text-brand-accent transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-accent">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Hotline</p>
                  <a href="tel:0396619418" className="text-white/90 hover:text-brand-accent transition-colors">
                    039 6619 418
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:consulting@mactvn.com" className="text-white/90 hover:text-brand-accent transition-colors">
                    consulting@mactvn.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Website</p>
                  <a href="https://www.mactvn.com" className="text-white/90 hover:text-brand-accent transition-colors">
                    www.mactvn.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} Công ty TNHH MACT Việt Nam. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-brand-accent transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;