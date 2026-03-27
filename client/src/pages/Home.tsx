/**
 * Home Page - الصفحة الرئيسية
 * Design: Dark Luxury Tech
 * تحتوي على جميع أقسام العرض التقديمي: المقدمة، المشكلة، الحل، الأرباح، دورة القيمة، الفريق، الاقتصاد
 */

import { ArrowRight, Lock, Users, TrendingUp, Leaf, Rocket, DollarSign, Flame, Mail, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1a2a28] opacity-50" />
        
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
                PRODIGY
              </h1>
              <p className="text-xl md:text-2xl font-sans text-foreground">
                استثمر في الجيل القادم من العمالقة
              </p>
            </div>

            <p className="text-lg font-sans text-secondary-foreground max-w-lg">
              بوابة ديمقراطية للاستثمار في الشركات الناشئة المبتكرة
            </p>

            <div className="flex items-center gap-4 pt-4 border-l-4 border-primary pl-6">
              <div>
                <p className="font-serif text-primary text-lg font-semibold">
                  Mohammed Abdullah Moqbel & Ahmed Qasem Mohammed
                </p>
                <p className="font-sans text-secondary-foreground text-sm">
                  المؤسسون - خبرة مالية 6 سنوات
                </p>
              </div>
            </div>

            <button className="px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg hover:shadow-lg hover:glow-neon transition-all duration-300 flex items-center gap-2 group">
              ابدأ الاستثمار
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right side - Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="glass-effect rounded-2xl p-8 w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="relative text-center">
                <Lock className="w-32 h-32 text-primary mx-auto mb-4 glow-neon" />
                <p className="font-serif text-2xl text-primary">Pro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            المشكلة: احتكار الوصول المبكر
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-destructive">
              <Lock className="w-12 h-12 text-destructive" />
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                وصول حصري فقط
              </h3>
              <p className="font-sans text-secondary-foreground">
                الفرص الذهبية في الشركات الناشئة المبكرة مثل Stripe و Airbnb كانت محصورة على المستثمرين الأثرياء فقط.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-destructive">
              <TrendingUp className="w-12 h-12 text-destructive" />
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                فجوة الثروة
              </h3>
              <p className="font-sans text-secondary-foreground">
                فقط رؤوس الأموال الضخمة تجني أرباحاً ضخمة من النمو المبكر، مما يوسع الفجوة الاقتصادية.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-destructive">
              <Leaf className="w-12 h-12 text-destructive" />
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                عدم وجود جسور
              </h3>
              <p className="font-sans text-secondary-foreground">
                لا توجد طريقة آمنة وسهلة لربط السيولة الرقمية بالمشاريع الحقيقية للمستثمرين الأفراد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            الحل: PRODIGY - كسر احتكار رأس المال الاستثماري
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Solution 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-primary glow-neon" />
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  مفتاح الوصول الحصري
                </h3>
              </div>
              <p className="font-sans text-secondary-foreground">
                نوفر لكل مالك $PRO تذكرة دخول مبكرة لمشاريع تقنية ومشاريع حقيقية كانت محصورة على الملايين.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-primary glow-neon" />
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  ربط الرقمي بالحقيقي
                </h3>
              </div>
              <p className="font-sans text-secondary-foreground">
                تحويل العملات الرقمية من أصل تخميني إلى استثمار حقيقي مرتبط بنجاح الشركات الفعلية.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary glow-neon" />
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  نجاح ديمقراطي
                </h3>
              </div>
              <p className="font-sans text-secondary-foreground">
                الآن يمكنك أن تكون مستثمراً مبكراً في "Airbnb" التالية وتشارك في نجاحها من اليوم الأول.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Profit Section */}
      <section id="profit" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            كيف تربح؟ ثلاث محركات ثروة
          </h2>

          <div className="space-y-12">
            <div className="divider-line" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Passive Income */}
              <div className="space-y-4">
                <DollarSign className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  الدخل السلبي
                </h3>
                <p className="font-sans text-secondary-foreground">
                  بمجرد الاحتفاظ بالرمز، ينمو رصيدك تلقائياً من رسوم التداول اليومية. <span className="text-primary">تدفقات دخل مستمرة</span> مباشرة إلى محفظتك بسهولة.
                </p>
              </div>

              {/* Scarcity Growth */}
              <div className="space-y-4">
                <Flame className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  نمو الندرة (الشراء والحرق)
                </h3>
                <p className="font-sans text-secondary-foreground">
                  آلية الشراء والحرق المستمرة تخلق طلباً دائماً وتقلل العرض، مما يرفع <span className="text-primary">القيمة السوقية</span> لكل رمز تملكه.
                </p>
              </div>

              {/* Future Participation */}
              <div className="space-y-4">
                <Rocket className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  المشاركة المستقبلية
                </h3>
                <p className="font-sans text-secondary-foreground">
                  أنت لست مجرد مالك رمز، بل <span className="text-primary">مستثمر مبكر</span> في محفظة متنوعة من الشركات الناشئة. عندما تنجح، تشارك في أرباحها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cycle Section */}
      <section id="cycle" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            دورة القيمة: من السيولة الرقمية إلى الأصول الحقيقية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-primary relative">
              <div className="absolute top-4 right-4 text-primary text-sm font-serif font-bold">1</div>
              <DollarSign className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-foreground">
                الاكتشاف
              </h3>
              <p className="font-sans text-secondary-foreground text-sm">
                فحص صارم للمشاريع المبتكرة التي تفتقر إلى التمويل التقليدي رغم إمكانياتها الضخمة.
              </p>
              <ArrowRight className="w-5 h-5 text-primary absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block" />
            </div>

            {/* Step 2 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-primary relative">
              <div className="absolute top-4 right-4 text-primary text-sm font-serif font-bold">2</div>
              <Leaf className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-foreground">
                التمويل
              </h3>
              <p className="font-sans text-secondary-foreground text-sm">
                دعم المشاريع المختارة عبر صندوق PRODIGY المستدام لتمكين إطلاقها.
              </p>
              <ArrowRight className="w-5 h-5 text-primary absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block" />
            </div>

            {/* Step 3 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-primary relative">
              <div className="absolute top-4 right-4 text-primary text-sm font-serif font-bold">3</div>
              <Rocket className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-foreground">
                النمو
              </h3>
              <p className="font-sans text-secondary-foreground text-sm">
                توفير الدعم الاستراتيجي والتقني لضمان نجاح الشركة الناشئة وتحولها إلى عملاق.
              </p>
              <ArrowRight className="w-5 h-5 text-primary absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block" />
            </div>

            {/* Step 4 */}
            <div className="glass-effect rounded-xl p-8 space-y-4 border-t-4 border-primary">
              <div className="absolute top-4 right-4 text-primary text-sm font-serif font-bold">4</div>
              <DollarSign className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-foreground">
                العائد
              </h3>
              <p className="font-sans text-secondary-foreground text-sm">
                إعادة حقن الأرباح في قيمة $PRO وتوزيع المكافآت على المجتمع والمالكين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            اقتصاد الرموز: التصميم المالي للنمو المستدام
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Core Network */}
            <div className="glass-effect rounded-xl p-8 space-y-4">
              <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                شبكة أساسية
              </p>
              <p className="text-4xl font-serif font-bold text-primary">
                BNB Smart Chain
              </p>
            </div>

            {/* Initial Supply */}
            <div className="glass-effect rounded-xl p-8 space-y-4">
              <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                العرض الأولي
              </p>
              <p className="text-4xl font-serif font-bold text-primary">
                1 Billion
              </p>
              <p className="font-sans text-secondary-foreground text-sm">$PRO</p>
            </div>

            {/* Total Supply */}
            <div className="glass-effect rounded-xl p-8 space-y-4">
              <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                العرض الكلي
              </p>
              <p className="text-4xl font-serif font-bold text-primary">
                1 Trillion
              </p>
              <p className="font-sans text-secondary-foreground text-sm">$PRO</p>
            </div>

            {/* Daily Release */}
            <div className="glass-effect rounded-xl p-8 space-y-4">
              <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                الإصدار اليومي
              </p>
              <p className="text-4xl font-serif font-bold text-primary">
                10,000
              </p>
              <p className="font-sans text-secondary-foreground text-sm">Tokens</p>
            </div>
          </div>

          {/* Daily Distribution */}
          <div className="glass-effect rounded-xl p-12 space-y-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              توزيع يومي (10,000 رمز)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                  صندوق الاستثمار
                </p>
                <p className="text-4xl font-serif font-bold text-primary">
                  6,000
                </p>
                <p className="font-sans text-secondary-foreground text-sm">
                  دعم المشاريع المبتكرة
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                  الفريق والتسويق
                </p>
                <p className="text-4xl font-serif font-bold text-primary">
                  2,000
                </p>
                <p className="font-sans text-secondary-foreground text-sm">
                  العمليات والنمو
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-sans text-secondary-foreground uppercase tracking-wider">
                  مكافآت المالكين
                </p>
                <p className="text-4xl font-serif font-bold text-primary">
                  2,000
                </p>
                <p className="font-sans text-secondary-foreground text-sm">
                  موزعة على جميع المالكين
                </p>
              </div>
            </div>

            <div className="divider-line my-8" />

            <div className="space-y-4">
              <h4 className="text-lg font-serif font-semibold text-foreground">
                هيكل رسوم المعاملات
              </h4>
              <p className="font-sans text-secondary-foreground">
                رسم ثابت بقيمة 2 سنت لكل معاملة، مع حرق 1 سنت وتوزيع 1 سنت على المالكين، مما يخلق نمو قيمة مستدام.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="border border-primary rounded-lg px-4 py-2 text-center">
                  <p className="text-sm font-sans text-secondary-foreground">Burn</p>
                  <p className="text-lg font-serif font-bold text-primary">1¢</p>
                </div>
                <div className="border border-primary rounded-lg px-4 py-2 text-center">
                  <p className="text-sm font-sans text-secondary-foreground">Rewards</p>
                  <p className="text-lg font-serif font-bold text-primary">1¢</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            فريق المؤسسين: النزاهة المحاسبية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="glass-effect rounded-xl p-8 space-y-6 border-t-4 border-primary">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-lg flex items-center justify-center">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  M. Abdullah Moqbel
                </h3>
                <p className="font-sans text-secondary-foreground font-semibold mt-2">
                  المؤسس المشارك - قائد المالية
                </p>
              </div>
              <p className="font-sans text-secondary-foreground">
                محاسب بخبرة 3 سنوات في التحليل المالي وإدارة الأصول الرقمية.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="glass-effect rounded-xl p-8 space-y-6 border-t-4 border-primary">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-lg flex items-center justify-center">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Ahmed Qasem Mohammed
                </h3>
                <p className="font-sans text-secondary-foreground font-semibold mt-2">
                  المؤسس المشارك - قائد المالية
                </p>
              </div>
              <p className="font-sans text-secondary-foreground">
                محاسب بخبرة 3 سنوات متخصص في الرقابة المالية وحوكمة الصناديق.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-effect rounded-xl p-8 border-l-4 border-primary">
            <p className="font-sans text-lg text-foreground">
              <span className="text-primary font-semibold">نجمع 6 سنوات من خبرة المحاسبة</span> لضمان أقصى درجات الشفافية والحوكمة في استثمارات PRODIGY.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-16">
            اتصل بنا
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                معلومات التواصل
              </h3>
              
              {/* Email */}
              <div className="glass-effect rounded-lg p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-sans font-semibold text-foreground">البريد الإلكتروني</p>
                  <a href="mailto:mohmmdhbwb@gmail.com" className="font-sans text-primary hover:text-primary/80 transition-colors">
                    mohmmdhbwb@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="glass-effect rounded-lg p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-sans font-semibold text-foreground">رقم الهاتف (WhatsApp)</p>
                  <a href="https://wa.me/967739750665" className="font-sans text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                    +967 73 9750665
                  </a>
                </div>
              </div>
              
              {/* Telegram */}
              <div className="glass-effect rounded-lg p-6 flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-sans font-semibold text-foreground">التلجرام</p>
                  <div className="space-y-2">
                    <a href="https://t.me/Hbwb406" className="font-sans text-primary hover:text-primary/80 transition-colors block" target="_blank" rel="noopener noreferrer">
                      @Hbwb406 (الشخصي)
                    </a>
                    <a href="https://t.me/PRODIGY_HQ" className="font-sans text-primary hover:text-primary/80 transition-colors block" target="_blank" rel="noopener noreferrer">
                      @PRODIGY_HQ (القناة)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-effect rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block font-sans font-semibold text-foreground mb-2">
                    الاسم
                  </label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder-secondary-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-sans font-semibold text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder-secondary-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-sans font-semibold text-foreground mb-2">
                    الموضوع
                  </label>
                  <input 
                    type="text" 
                    placeholder="موضوع الرسالة" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder-secondary-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-sans font-semibold text-foreground mb-2">
                    الرسالة
                  </label>
                  <textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder-secondary-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-sans font-semibold rounded-lg hover:shadow-lg hover:glow-neon transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  إرسال الرسالة
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            هل أنت مستعد لتصبح مستثمراً مبكراً؟
          </h2>
          <p className="text-xl font-sans text-secondary-foreground max-w-2xl mx-auto">
            انضم إلى مجتمع PRODIGY واستثمر في الشركات الناشئة التي ستغير العالم.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg hover:shadow-lg hover:glow-neon transition-all duration-300 mx-auto flex items-center gap-2 group">
            ابدأ الآن
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-serif text-lg font-bold text-primary mb-2">PRODIGY</p>
              <p className="font-sans text-secondary-foreground text-sm">
                استثمر في الجيل القادم من العمالقة
              </p>
            </div>
            <div>
              <p className="font-sans font-semibold text-foreground mb-4">المشروع</p>
              <ul className="space-y-2 font-sans text-secondary-foreground text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">عن المشروع</a></li>
                <li><a href="#problem" className="hover:text-primary transition-colors">المشكلة والحل</a></li>
                <li><a href="#tokenomics" className="hover:text-primary transition-colors">الاقتصاد</a></li>
              </ul>
            </div>
            <div>
              <p className="font-sans font-semibold text-foreground mb-4">المجتمع</p>
              <ul className="space-y-2 font-sans text-secondary-foreground text-sm">
                <li><a href="https://t.me/PRODIGY_HQ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="https://t.me/Hbwb406" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">تواصل مباشر</a></li>
                <li><a href="mailto:mohmmdhbwb@gmail.com" className="hover:text-primary transition-colors">البريد الإلكتروني</a></li>
              </ul>
            </div>
            <div>
              <p className="font-sans font-semibold text-foreground mb-4">قانوني</p>
              <ul className="space-y-2 font-sans text-secondary-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">الشروط</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الخصوصية</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">التنصل</a></li>
              </ul>
            </div>
          </div>

          <div className="divider-line my-8" />

          <div className="text-center font-sans text-secondary-foreground text-sm">
            <p>&copy; 2026 PRODIGY PRO. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
