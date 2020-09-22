import React from "react"
import { graphql } from "gatsby"

const portfolio = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    recent: allContentfulDesignProject(
      limit: 3
      sort: { order: ASC, fields: id }
    ) {
      nodes {
        id
        title
        skills
        link
        intro {
          internal {
            content
          }
        }
        detail {
          internal {
            content
          }
        }
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      totalCount
    }
  }
`

export default portfolio
