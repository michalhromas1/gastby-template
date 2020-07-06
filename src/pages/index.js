import React from "react"
import "../styles/styles.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll", {
      updateURL: false,
    })
  }

  return (
    <div className="page-home">
      <SEO title="BEKAP s.r.o. | Postaráme se o Vaše účetnictví" />
      Hello World
    </div>
  )
}

export default IndexPage
