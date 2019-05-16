import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Checker from "../components/checker"

const IndexPage = () => (
  <Layout>
    <SEO title="Pangram Checker" keywords={[`pangram`, `words`, `writing`]} />
    <Checker />
  </Layout>
)

export default IndexPage
