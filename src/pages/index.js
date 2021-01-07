import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeLogo from "../images/svgs/logo-large.svg"
import Image from "../components/image"
import DownloadIcon from "../images/svgs/download.svg"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Cuto Wallpaper" showDefaultTitle={false}/>
    <div className="container">
      <div className="left-content">
        <LargeLogo style={{ marginBottom: `0.75rem` }}/>
        <h4>Handpicked Best Wallpapers For You</h4>
        <Link to="https://apps.apple.com/app/id1068086465">
          <DownloadIcon />
        </Link>
      </div>
      <Image alt="Screenshot" />
    </div>
  </Layout>
)

export default IndexPage
