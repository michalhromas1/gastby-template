import React from "react"
import "../styles/styles.scss"
import SEO from "../components/seo"

const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll", {
      updateURL: false,
    })
  }

  return (
    <div className="page-404">
      <SEO title="404 | BEKAP s.r.o. | Postaráme se o Vaše účetnictví" />
    </div>
  )
}

export default NotFoundPage
