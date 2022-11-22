import { FC } from 'react'

import StatsBlock from 'components/blocks/stats/stats'
import { StatItemInterface } from 'components/blocks/stats/stats.interface'

const placeholderStatsBlock = {
  top: {
    headline: 'Average sales increase',
    description: 'Outreach empowers company with the tools, knowledge and insights to close more deals, more quickly. Year over year.',
    stat: '22%',
  },
  bottom: {
    headline: 'New integrations in 2023',
    description: 'We know your sales pipeline has an existing infrastructure. We’re just here integrate and optimize outcomes.',
    stat: '64%',
  },
} as StatItemInterface

const Stats: FC = () => (
  <div>
    <StatsBlock block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderStatsBlock,
      ],
    }}
    />
  </div>
)

export default Stats
