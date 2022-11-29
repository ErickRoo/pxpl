export default interface FaqAccordionItemInterface {
    headline: string;
    content: string;
    initializeOpen?: boolean;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
}
