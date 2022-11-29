export interface StatItemInterface {
    top: {
        headline: string;
        description: string;
        stat: string;
    };
    bottom: {
        headline: string;
        description: string;
        stat: string;
    };
}

export default interface StatsInterface {
    type: string;
    TextAndImageBlocks: StatItemInterface[];
}
