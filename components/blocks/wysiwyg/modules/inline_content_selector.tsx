import React, { FC } from 'react'
import InlineBody from './inline_body'
import InlineEyebrow from './inline_eyebrow'
import InlineHeadline from './inline_headline'
import InlineCtaButtons from './inline_cta_buttons'
import InlineBullets from './inline_bullets'
import InlineNumbers from './inline_numbers'
import InlineLine from './inline_line'
import InlineCheckMarks from './inline_checkmarks'
import InlineMultiColumnBullets from './inline_multicolumn_bullets'

interface Content {
  eyebrow?: string
  headline?: {
    headline?: string
    headlineLevel?: number
  }
  body?: string
  primaryCta?: {
    ctaText: string
    ctaLink: string
  }
  secondaryCta?: {
    ctaText: string
    ctaLink: string
  }
  bullets?: []
  numbers?: []
  line?: boolean
  checkMarks?: []

}

const ContentSelector: FC<{ type: string, content: Content, bgToggle: boolean }> = ({ type, content, bgToggle }) => {
  switch (type) {
    case 'eyebrow':
      return <InlineEyebrow content={content} />
    case 'headline':
      return <InlineHeadline content={content} />
    case 'body':
      return <InlineBody content={content} />
    case 'ctaButtons':
      return <InlineCtaButtons content={content} />
    case 'bullets':
      return <InlineBullets content={content} />
    case 'numbers':
      return <InlineNumbers content={content} />
    case 'line':
      return <InlineLine content={content} />
    case 'checkMarks':
      return <InlineCheckMarks content={content} />
    case 'multiColumnBullets':
      return <InlineMultiColumnBullets content={content} bgToggle={bgToggle} />
    default:
      return null
  }
}

const InlineContentSelector:FC<{ type: string, content: Content, bgToggle: boolean }> = ({ type, content, bgToggle }) => (
  <ContentSelector type={type} content={content} bgToggle={bgToggle} />
)

export default InlineContentSelector
