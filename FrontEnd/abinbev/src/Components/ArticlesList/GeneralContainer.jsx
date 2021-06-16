import React from "react";

export default function GeneralContainer(props) {
  const buildArticles = (el, ind) => {
    return (
      <div class="article-preview" key={el[0]}>
        <div class="article-meta">
          <a href={`/profiles/${el[1].author.username}`}>
            <img src={el[1].author.image} alt="authorPic" />
          </a>
          <div class="info">
            <a href={`/profiles/${el[1].author.username}`} class="author">
              {el[1].author.username}
            </a>
            <span class="date">{el[1].createdAt}</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> {el[1].favoritesCount}
          </button>
        </div>
        <a href={`/articles/${el[1].slug}`} class="preview-link">
          <h1>{el[1].title}</h1>
          <p>{el[1].content}</p>
          <span>Read more...</span>
        </a>
      </div>
    );
  };
  const articlesUi = props.data.map(buildArticles);
  return <React.Fragment>{articlesUi}</React.Fragment>;
}
