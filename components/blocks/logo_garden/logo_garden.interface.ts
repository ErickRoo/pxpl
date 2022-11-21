interface LogoInterface {
    src: string
    alt: string
}

export default interface LogoGardenInterface {
    type: string
    variant: string
    headline: string
    logos: Array<LogoInterface>
}
