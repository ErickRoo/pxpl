import HorizontalCardItemInterface from 'components/generic/horizontal_card_item/horizontal_card_item.interface'

export default interface HorizontalCardInterface {
    type: string;
    rows: Array<{
        quantity: number;
        items: HorizontalCardItemInterface[]
    }>
}
