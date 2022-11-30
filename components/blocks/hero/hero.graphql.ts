export default `
fragment blockBuilder_hero_BlockType on blockBuilder_hero_BlockType {
  hero_variant
  hero_headline {
    __typename
    ... on hero_headline_line_BlockType {
      id
      text
    }
  }
}
`
