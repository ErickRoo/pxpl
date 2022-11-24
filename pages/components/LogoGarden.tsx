import React, { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import LogoGardenBlock from 'components/blocks/logo_garden/logo_garden'

const placeHolderLooping = {
  type: 'Set_Replicator_BlockLogoGarden',
  variant: 'looping',
  headline: 'Over 5,000 global customers trust Outreach',
  logos: [
    {
      src: '/images/adobe.svg',
      alt: 'Adobe',
    },
    {
      src: '/images/zoom.svg',
      alt: 'Zoom',
    },
    {
      src: '/images/docusign.svg',
      alt: 'Docusign',
    },
    {
      src: '/images/eventbrite.svg',
      alt: 'Eventbrite',
    },
    {
      src: '/images/Snowflake.svg',
      alt: 'Snowflake',
    },
  ],
}

const placeHolderStatic = {
  type: 'Set_Replicator_BlockLogoGarden',
  variant: 'static',
  headline: 'Over 5,000 global customers trust Outreach',
  logos: [
    {
      src: '/images/adobe.svg',
      alt: 'Adobe',
    },
    {
      src: '/images/zoom.svg',
      alt: 'Zoom',
    },
    {
      src: '/images/docusign.svg',
      alt: 'Docusign',
    },
    {
      src: '/images/eventbrite.svg',
      alt: 'Eventbrite',
    },
    {
      src: '/images/Snowflake.svg',
      alt: 'Snowflake',
    },
  ],
}

const placeHolderStatic2 = {
  type: 'Set_Replicator_BlockLogoGarden',
  variant: 'static',
  headline: 'Over 5,000 global customers trust Outreach',
  logos: [
    {
      src: '/images/eventbrite.svg',
      alt: 'Eventbrite',
    },
    {
      src: '/images/docusign.svg',
      alt: 'Docusign',
    },
    {
      src: '/images/Snowflake.svg',
      alt: 'Snowflake',
    },
    {
      src: '/images/adobe.svg',
      alt: 'Adobe',
    },
  ],
}

const placeHolderStatic3 = {
  type: 'Set_Replicator_BlockLogoGarden',
  variant: 'static',
  headline: 'Over 5,000 global customers trust Outreach',
  logos: [
    {
      src: '/images/eventbrite.svg',
      alt: 'Eventbrite',
    },
    {
      src: '/images/docusign.svg',
      alt: 'Docusign',
    },
    {
      src: '/images/Snowflake.svg',
      alt: 'Snowflake',
    },
  ],
}

const LogoGarden: FC = () => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isDesktop = ['xl', 'xxl'].includes(currentBreakpoint?.position)

  const placeHolderStatic2a = {
    ...placeHolderStatic2,
    headline: isDesktop ? 'Validation statement by partners' : 'Over 5,000 global customers trust Outreach',
  }

  const placeHolderStatic3a = {
    ...placeHolderStatic3,
    headline: isDesktop ? 'Validation statement by partners' : 'Over 5,000 global customers trust Outreach',
  }

  return (
    <>
      <div style={{ padding: '2rem' }} />
      <LogoGardenBlock block={placeHolderLooping} />
      <div style={{ padding: '2rem' }} />
      <LogoGardenBlock block={placeHolderStatic2a} />
      <div style={{ padding: '2rem' }} />
      <LogoGardenBlock block={placeHolderStatic3a} />
      <div style={{ padding: '2rem' }} />
      <LogoGardenBlock block={placeHolderStatic} />
      <div style={{ padding: '2rem' }} />
    </>
  )
}

export default LogoGarden
