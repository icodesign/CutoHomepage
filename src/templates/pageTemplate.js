import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`