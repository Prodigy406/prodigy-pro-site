/**
 * Header Component - رأس الصفحة
 * Design: Dark Luxury Tech - خلفية داكنة مع لمسات أخضر نيوني
 * يحتوي على الشعار والملاحة الأساسية
 */

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
            PRODIGY
          </div>
          <div className="text-xs text-secondary-foreground" style={{fontFamily: "'Poppins', sans-serif"}}>
            PRO
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
            عن المشروع
          </a>
          <a href="#problem" className="text-sm text-foreground hover:text-primary transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
            المشكلة
          </a>
          <a href="#solution" className="text-sm text-foreground hover:text-primary transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
            الحل
          </a>
          <a href="#tokenomics" className="text-sm text-foreground hover:text-primary transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
            الاقتصاد
          </a>
          <a href="#team" className="text-sm text-foreground hover:text-primary transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>
            الفريق
          </a>
        </nav>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:shadow-lg hover:glow-neon transition-all duration-300" style={{fontFamily: "'Poppins', sans-serif"}}>
          ابدأ الآن
        </button>
      </div>
    </header>
  );
}
