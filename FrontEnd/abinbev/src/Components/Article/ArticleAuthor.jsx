import React from "react";

export default function AuthorArticle(props) {
  return (
    <div class="article-meta">
      <a href="profile.html">
        <img
          src={props.data[0] && props.data[0][1].author.image}
          alt="avatar"
        />
      </a>
      <div class="info">
        <a href="/" class="author">
          {props.data[0] && props.data[0][1].author.username}
        </a>
        <span class="date">{props.data[0] && props.data[0][1].createdAt}</span>
      </div>
      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        &nbsp; {`Follow ${
          props.data[0] && props.data[0][1].author.username
        }`}{" "}
        <span class="counter">{`(${
          props.data[0] && props.data[0][1].following
        })`}</span>
      </button>
      &nbsp;
      <button class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i>
        &nbsp; Favorite Post{" "}
        <span class="counter">{`(${
          props.data[0] && props.data[0][1].favoritesCount
        })`}</span>
      </button>
    </div>
  );
}
