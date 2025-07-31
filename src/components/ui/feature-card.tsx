import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  variant?: "default" | "educational" | "pattern";
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  variant = "default",
  className = "" 
}: FeatureCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "educational":
        return "border-educational-blue/20 hover:border-educational-blue/40 hover:shadow-educational bg-gradient-to-br from-background to-educational-blue/5";
      case "pattern":
        return "border-primary/20 hover:border-primary/40 hover:shadow-glow bg-gradient-card";
      default:
        return "hover:shadow-card";
    }
  };

  const CardComponent = (
      <Card className={`group transition-all duration-300 cursor-pointer ${getVariantStyles()} ${className} h-full flex flex-col`}>
        <CardHeader className="space-y-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              variant === "educational"
                  ? "bg-educational-blue/10 text-educational-blue group-hover:bg-educational-blue/20"
                  : variant === "pattern"
                      ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                      : "bg-accent text-accent-foreground"
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 justify-between p-6">
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
          {href && (
              <div className="mt-4">
                <Button variant="ghost" size="sm" className="group/btn p-2 h-auto">
                  Explorar
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
          )}
        </CardContent>
      </Card>
  );

  if (href) {
    return (
      <Link to={href} className="block">
        {CardComponent}
      </Link>
    );
  }

  return CardComponent;
};

export default FeatureCard;