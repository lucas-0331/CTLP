import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  backgroundImage?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryAction, 
  secondaryAction,
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
            {subtitle}
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            {primaryAction && (
              <Link to={primaryAction.href}>
                <Button size="lg" variant="secondary" className="group">
                  {primaryAction.icon && <primaryAction.icon className="w-5 h-5 mr-2" />}
                  {primaryAction.text}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
            
            {secondaryAction && (
              <Link to={secondaryAction.href}>
                <Button size="lg" variant="secondary" className="group">
                  {secondaryAction.icon && <secondaryAction.icon className="w-5 h-5 mr-2" />}
                  {secondaryAction.text}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;