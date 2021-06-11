import React from "react";
import ArticleAuthor from './ArticleAuthor'

export default function ArticleHeader(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>

      <ArticleAuthor />
    </React.Fragment>
  );
}
