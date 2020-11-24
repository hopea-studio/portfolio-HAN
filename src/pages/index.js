import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

import "./index.css"

export default function Index({ data }) {
  return (
    <Layout>
      <Hero />
      <Portfolio data={data} />
      <Resume />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    recent: allContentfulDesignProject(
      limit: 4
      sort: { order: ASC, fields: contentfulid }
    ) {
      nodes {
        id
        contentfulid
        title
        skills
        Slug
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
        cover {
          file {
            url
            contentType
          }
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
