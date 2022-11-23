import CardOutlineItemInterface from 'components/generic/card_outline_item/card_outline_item.interface'

export default interface ContentCardInterface {
    type: string;
    rows: Array<{
        quantity: number;
        items: CardOutlineItemInterface[]
    }>
}
