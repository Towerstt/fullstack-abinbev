import React from "react";

import ArticleAuthor from './ArticleAuthor'

export default function ArticleHeader(props) {
  return (
    <React.Fragment>
      <h1>{props.data[0] && props.data[0][1].title}</h1>

      <ArticleAuthor data={props.data}/>
    </React.Fragment>
  );
}
