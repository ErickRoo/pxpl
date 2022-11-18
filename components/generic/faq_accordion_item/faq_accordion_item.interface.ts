export default interface FaqAccordionItemInterface {
    headline: string;
    content: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
}
