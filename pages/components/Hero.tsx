import React, { FC } from 'react'
import HeroInterface from 'components/blocks/hero/hero.interface'
import HeroBlock from 'components/blocks/hero/hero'

const placeHolderHeroLeftText = {
  variant: 'leftText',
  headline: [
    { text: 'H1 headline ', color: 'text-darkBlue' },
    { text: 'with two or ', color: 'text-darkBlue' },
    { text: 'more lines up ', color: 'text-passionBlue' },
    { text: 'to four.', color: 'text-passionBlue' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/bg-circle-right.png',
  circle: true,
} as HeroInterface

const placeHolderHeroRightText = {
  variant: 'rightText',
  headline: [
    { text: 'H1 headline ', color: 'text-darkBlue' },
    { text: 'with two or ', color: 'text-darkBlue' },
    { text: 'more lines up ', color: 'text-passionBlue' },
    { text: 'to four.', color: 'text-passionBlue' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/bg-circle-left.png',
  circle: true,
} as HeroInterface

const placeHolderHeroLeftTextImageRight = {
  variant: 'leftTextImageRight',
  headline: [
    { text: 'H1 headline ', color: 'text-darkBlue' },
    { text: 'with two or ', color: 'text-darkBlue' },
    { text: 'more lines up ', color: 'text-passionBlue' },
    { text: 'to four.', color: 'text-passionBlue' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/hero-image-right.png',
  circle: true,
} as HeroInterface

const placeHolderHeroRightTextImageLeft = {
  variant: 'rightTextImageLeft',
  headline: [
    { text: 'H1 headline ', color: 'text-darkBlue' },
    { text: 'with two or ', color: 'text-darkBlue' },
    { text: 'more lines up ', color: 'text-passionBlue' },
    { text: 'to four.', color: 'text-passionBlue' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/hero-image-right.png',
  circle: true,
} as HeroInterface

const placeHolderHeroFullBleedImageDarkenRightText = {
  variant: 'fullBleedImageDarkenRightText',
  headline: [
    { text: 'H1 headline ', color: 'text-white' },
    { text: 'with two or ', color: 'text-white' },
    { text: 'more lines up ', color: 'text-white' },
    { text: 'to four.', color: 'text-white' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/hero-full-bleed-draken-right.png',
  imageMobile: '/images/hero-image-right.png',
  circle: true,
} as HeroInterface

const placeHolderHeroFullBleedImageDarkenLeftText = {
  variant: 'fullBleedImageDarkenLeftText',
  headline: [
    { text: 'H1 headline ', color: 'text-white' },
    { text: 'with two or ', color: 'text-white' },
    { text: 'more lines up ', color: 'text-white' },
    { text: 'to four.', color: 'text-white' },
  ],
  description: 'Companies using Outreach are more efficient. They have consistently higher achievement and customer satisfaction.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: '/images/hero-full-bleed-draken-left.png',
  imageMobile: '/images/hero-image-right.png',
  circle: true,
} as HeroInterface

const Hero: FC = () => (
  <div>
    <HeroBlock block={placeHolderHeroLeftTextImageRight} />
    <HeroBlock block={placeHolderHeroRightTextImageLeft} />
    <HeroBlock block={placeHolderHeroFullBleedImageDarkenRightText} />
    <HeroBlock block={placeHolderHeroFullBleedImageDarkenLeftText} />
    <HeroBlock block={placeHolderHeroLeftText} />
    <HeroBlock block={placeHolderHeroRightText} />
  </div>
)

export default Hero
