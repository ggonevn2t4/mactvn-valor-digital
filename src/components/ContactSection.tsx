import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const services = [
    "Dịch vụ Kế toán",
    "Tư vấn Thuế",
    "Dịch vụ Chuyên gia",
    "Kiểm toán",
    "Tư vấn Pháp lý",
    "Khác"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng điền đầy đủ họ tên, số điện thoại và email.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Gửi yêu cầu thành công!",
      description: "Chuyên gia MACT Việt Nam sẽ liên hệ với bạn trong vòng 24h.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-4">
              Liên hệ tư vấn
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Liên Hệ Chuyên Gia Tư Vấn
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Để lại thông tin để nhận được tư vấn miễn phí từ chuyên gia MACT Việt Nam. 
              Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="border-brand-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-primary">Liên hệ nhanh</CardTitle>
                    <CardDescription>Gọi ngay để được tư vấn trực tiếp</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Hotline</p>
                        <a href="tel:0396619418" className="text-brand-primary font-bold text-lg hover:text-brand-secondary transition-colors">
                          039 6619 418
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:consulting@mactvn.com" className="text-brand-primary hover:text-brand-secondary transition-colors">
                          consulting@mactvn.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Website</p>
                        <a href="https://www.mactvn.com" className="text-brand-primary hover:text-brand-secondary transition-colors">
                          www.mactvn.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Giờ làm việc</p>
                        <p className="text-sm text-muted-foreground">T2 - T6: 8:00 - 17:30</p>
                        <p className="text-sm text-muted-foreground">T7: 8:00 - 12:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Contact Us */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cam kết của chúng tôi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2"></div>
                        <span>Tư vấn miễn phí và không ràng buộc</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2"></div>
                        <span>Phản hồi trong vòng 24 giờ</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2"></div>
                        <span>Bảo mật thông tin tuyệt đối</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2"></div>
                        <span>Tư vấn từ chuyên gia giàu kinh nghiệm</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-brand-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary">Gửi yêu cầu tư vấn</CardTitle>
                  <CardDescription>
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn miễn phí cho bạn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          placeholder="Nhập họ và tên của bạn"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Nhập số điện thoại"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Dịch vụ quan tâm</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn dịch vụ bạn quan tâm" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tin nhắn</Label>
                      <Textarea
                        id="message"
                        placeholder="Mô tả chi tiết về nhu cầu của bạn (không bắt buộc)"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Gửi yêu cầu tư vấn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;