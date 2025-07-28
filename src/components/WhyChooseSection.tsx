import { CheckCircle, Users, Shield, Clock, DollarSign } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Đội ngũ chuyên gia giàu kinh nghiệm",
      description: "Với hơn 10 năm kinh nghiệm trong lĩnh vực kế toán, thuế và kiểm toán, đội ngũ chuyên gia của chúng tôi luôn cập nhật các quy định pháp luật mới nhất."
    },
    {
      icon: Shield,
      title: "Tuân thủ đầy đủ chuẩn mực kế toán",
      description: "Cam kết thực hiện đúng các chuẩn mực kế toán Việt Nam và Quốc tế, đảm bảo tính chính xác và minh bạch trong mọi báo cáo."
    },
    {
      icon: Clock,
      title: "Dịch vụ tư vấn 24/7",
      description: "Hỗ trợ khách hàng mọi lúc, mọi nơi với đội ngũ tư vấn viên chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc của bạn."
    },
    {
      icon: DollarSign,
      title: "Chi phí hợp lý, minh bạch",
      description: "Bảng giá dịch vụ rõ ràng, không phát sinh chi phí ẩn. Cam kết mang lại giá trị tốt nhất cho khoản đầu tư của khách hàng."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/20 text-brand-primary text-sm font-medium mb-4">
              Tại sao chọn chúng tôi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tại Sao Chọn MACT Việt Nam?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ kế toán chuyên nghiệp với chất lượng cao nhất, 
              giúp doanh nghiệp của bạn phát triển bền vững
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-accent">500+</div>
                <p className="text-lg text-white/90">Doanh nghiệp tin tưởng</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-accent">10+</div>
                <p className="text-lg text-white/90">Năm kinh nghiệm</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-accent">99%</div>
                <p className="text-lg text-white/90">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bảo mật thông tin tuyệt đối",
              "Giao nộp báo cáo đúng hạn",
              "Tư vấn chiến lược phát triển",
              "Hỗ trợ sau dịch vụ tận tình"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border/50">
                <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;