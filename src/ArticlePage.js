import React from 'react'



const ArticlePage = ({ match }) => (
  <p>Article with slug: {match.params.title}</p>
)

export default ArticlePage
