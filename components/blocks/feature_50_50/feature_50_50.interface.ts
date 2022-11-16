import Feature5050ItemInterface from 'components/generic/feature_50_50_item/feature_50_50_item.interface'

export default interface Feature5050Interface {
    type: string;
    TextAndImageBlocks: Array<{
        left: Feature5050ItemInterface;
        right: Feature5050ItemInterface;
    }>;
}
