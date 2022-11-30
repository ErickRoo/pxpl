import CardOutlineItemInterface from 'components/generic/card_outline_item/card_outline_item.interface';

export default interface RelatedArticleInterface {
    type: string;
    headline: string;
    cta?: {
        ctaText: string;
        ctaLink: string;
    };
    articles: {
        quantity: number;
        items: CardOutlineItemInterface[]
    };
    promo: {
        headline: string;
        description: string;
    }
}
