import LogoGardenBlock from 'components/blocks/logo_garden/logo_garden'
import React, { FC } from 'react'

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
  headline: 'Validation statement by partners',
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
  headline: 'Validation statement by partners',
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

const LogoGarden: FC = () => (
  <>
    <div style={{ padding: '2rem' }} />
    <LogoGardenBlock block={placeHolderLooping} />
    <div style={{ padding: '2rem' }} />
    <LogoGardenBlock block={placeHolderStatic2} />
    <div style={{ padding: '2rem' }} />
    <LogoGardenBlock block={placeHolderStatic3} />
    <div style={{ padding: '2rem' }} />
    <LogoGardenBlock block={placeHolderStatic} />
    <div style={{ padding: '2rem' }} />
  </>
)

export default LogoGarden
