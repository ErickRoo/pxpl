export interface OneColumnBodyInterface {
  className?: string;
  headline: string;
  headlineLevel: number;
  description?: string;
  primaryCta?: {
    ctaText: string;
    ctaLink: string;
  };
  secondaryCta?: {
    ctaText: string;
    ctaLink: string;
  };
}
