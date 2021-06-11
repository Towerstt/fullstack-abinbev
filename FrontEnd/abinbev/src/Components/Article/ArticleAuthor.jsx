import React from "react";

export default function AuthorArticle(props) {
  return (
    <div class="article-meta">
      <a href="profile.html">
        <img src={props.author.image} alt="blabla" />
      </a>
      <div class="info">
        <a href="/" class="author">
          {props.author.username}
        </a>
        <span class="date">{props.author.createdAt}</span>
      </div>
      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        &nbsp; {`Follow ${props.author.username}`} <span class="counter">{`(${props.author.following})`}</span>
      </button>
      &nbsp;
      <button class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i>
        &nbsp; Favorite Post <span class="counter">{`(${props.favoritesCount})`}</span>
      </button>
    </div>
  );
}
