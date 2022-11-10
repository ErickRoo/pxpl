export interface OneColumnBodyInterface {
  className?: string;
  topTag?: string;
  headline?: string;
  headlineLevel?: number;
  description?: string;
  showTertiaryButton?: boolean;
  primaryCta?: {
    ctaText: string;
    ctaLink: string;
  };
  secondaryCta?: {
    ctaText: string;
    ctaLink: string;
  };
}
