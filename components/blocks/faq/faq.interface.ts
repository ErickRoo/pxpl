import FaqAccordionItemInterface from 'components/generic/faq_accordion_item/faq_accordion_item.interface'

export default interface FaqInterface {
    type: string;
    topTag: string;
    headline: string;
    description?: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    questions: FaqAccordionItemInterface[];
}
