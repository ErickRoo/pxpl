import LargeQuoteItemInterface from 'components/generic/large_quote_item/large_quote_item.interface'

export default interface LargeQuoteInterface {
    type: string;
    TextAndImageBlocks: LargeQuoteItemInterface[];
}
