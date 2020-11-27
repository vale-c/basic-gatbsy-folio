import React from "react"

const FormatHtml = ({ content }) => (
  <span
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

export default FormatHtml
