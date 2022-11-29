import TtacItemInterface from 'components/generic/ttac_item/ttac_item.interface'

export default interface TtacInterface {
    type: string;
    TextAndImageBlocks: TtacItemInterface[];
}
