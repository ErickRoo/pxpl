import blockInventory from '../utils/rendering/inventory'
// import AssetFragment from './fragments/asset'

const fragments = Object.values(blockInventory)
  .map((i) => i.query)
  .join('')
const fragmentDestructor = Object.values(blockInventory)
  .map((i) => `...${i.typename.replace('Set_Replicator_', '')}`)
  .join('\n')

// ${AssetFragment}
export default `
  ${fragments}
  query page($uri: [String]) {
    entry(uri: $uri) {
      id
      title
      slug
      uri
      # seo {
      #   description
      #   og_description
      #   og_locale
      #   og_site_name
      #   og_type
      #   og_title
      #   og_url
      #   rel_author
      #   rel_canonical
      #   rel_home
      #   rel_next_
      #   rel_prev
      #   title
      #   twitter_card
      #   twitter_description
      #   twitter_site
      #   twitter_title
      # }
      ... on pageBuilderPage_default_Entry {
        blockBuilder {
          __typename
          ${fragmentDestructor}
        }
      }
    }
    # nav(handle: "main_nav") {
    #   tree {
    #     page {
    #       id
    #       url
    #       title
    #     }
    #     depth
    #     children {
    #       depth
    #       page {
    #         id
    #         url
    #         title
    #       }
    #     }
    #   }
    # }
  }
`
