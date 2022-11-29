import { StaticImageData } from 'next/image'

interface item {
    order: number,
    headline: string,
    description: string,
    ctaButton: {
        text: string,
        href: string,
    },
    image: StaticImageData
}
export default interface MultiFeatureSideBySideInterface {
    type: string,
    headline: string,
    description: string,
    items: item[],
}
