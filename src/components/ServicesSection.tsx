import { Calculator, TrendingUp, Users, Search, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Dịch vụ Kế toán",
      description: "Dịch vụ kế toán chuyên nghiệp theo chuẩn mực",
      features: [
        "Kế toán theo Chuẩn mực kế toán Việt Nam",
        "Kế toán theo Chuẩn mực kế toán Quốc tế",
        "Lập báo cáo tài chính định kỳ",
        "Tư vấn hệ thống kế toán"
      ]
    },
    {
      icon: TrendingUp,
      title: "Dịch vụ Tư vấn Thuế",
      description: "Tư vấn thuế chuyên sâu và hoàn thuế",
      features: [
        "Tư vấn Thuế chuyên sâu",
        "Hoàn thuế GTGT",
        "Soát xét thuế và Thẩm định Hệ thống Thuế",
        "Tư vấn thuế trong thương vụ M&A"
      ]
    },
    {
      icon: Users,
      title: "Dịch vụ Chuyên gia",
      description: "Tư vấn chuyên gia về giao dịch và định giá",
      features: [
        "Tư vấn Giao dịch liên kết",
        "Hồ sơ xác định giá thị trường",
        "Thẩm kiểm tra chuyên gia",
        "Tư vấn chiến lược kinh doanh"
      ]
    },
    {
      icon: Search,
      title: "Dịch vụ Kiểm toán",
      description: "Kiểm toán báo cáo tài chính chuyên nghiệp",
      features: [
        "Kiểm toán Báo cáo tài chính",
        "Kiểm toán xây dựng cơ bản",
        "Kiểm toán tuân thủ",
        "Soát xét báo cáo tài chính"
      ]
    },
    {
      icon: Scale,
      title: "Dịch vụ Tư vấn Pháp lý",
      description: "Hỗ trợ thủ tục pháp lý doanh nghiệp",
      features: [
        "Hỗ trợ Đăng ký Đầu tư",
        "Giấy chứng nhận Đăng ký Doanh nghiệp",
        "Tư vấn pháp luật doanh nghiệp",
        "Hỗ trợ thủ tục hành chính"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-4">
            Dịch vụ chuyên nghiệp
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dịch Vụ Chuyên Nghiệp
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MACT Việt Nam cung cấp đầy đủ các dịch vụ kế toán, thuế, kiểm toán và tư vấn 
            với chất lượng cao, đáp ứng mọi nhu cầu của doanh nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-brand-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Cần tư vấn dịch vụ phù hợp cho doanh nghiệp?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Liên hệ ngay với chuyên gia MACT Việt Nam để được tư vấn miễn phí
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-accent text-brand-text px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent/90 transition-colors"
            >
              Liên hệ tư vấn ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;