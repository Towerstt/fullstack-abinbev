import React from "react";

export default function ArticlePreview(props) {
  console.log(props.data);
  //
  const buildArticles = (el, ind) => {
    return (
      <React.Fragment>
        <div class="article-meta" key={ind}>
          <a href={`/profiles/${el.author.username}`}>
            <img src={el.author.image} alt="avatar" />
          </a>
          <div class="info">
            <a href={`/profiles/${el.author.username}`} class="author">
              {el.author.username}
            </a>
            <span class="date">{el.createdAt}</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> {el.favoritesCount}
          </button>
        </div>
        <a href={`/articles/${el.slug}`} class="preview-link">
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <span>Read more...</span>
        </a>
      </React.Fragment>
    );
  };
  if (props.data[0]) {
    const articlesUi = props.data[0][1].map(buildArticles);
    return <div class="article-preview">{articlesUi}</div>;
  } else {
    return <div></div>;
  }
}
