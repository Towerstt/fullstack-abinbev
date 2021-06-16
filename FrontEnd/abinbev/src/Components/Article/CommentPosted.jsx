import React from "react";

export default function CommentPosted(props) {
  const buildComments = (el, index) => {
    return (
      <div class="card" key={index}>
        <div class="card-block">
          <p class="card-text">{el.body}</p>
        </div>
        <div class="card-footer">
          <a href="/" class="comment-author">
            <img
              src={el.author.image}
              class="comment-author-img"
              alt="author-img"
            />
          </a>
          &nbsp;
          <a href="/" class="comment-author">
            {el.author.username}
          </a>
          <span class="date-posted">{el.createdAt}</span>
        </div>
      </div>
    );
  };

  const commentsUi = props.data.length ? props.map(buildComments) : <div />;

  return <React.Fragment>{commentsUi}</React.Fragment>;
}
