import React, { useEffect, useState } from "react";
import ArticleHeader from '../Components/Article/ArticleHeader'
import ArticleAuthor from '../Components/Article/ArticleAuthor'
import NewComment from "../Components/Article/NewComment";
import CommentPosted from "../Components/Article/CommentPosted";
import ArticleBody from "../Components/Article/ArticleBody";
const {
  DB_PROTOCOL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

const url = `${DB_PROTOCOL}//${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
export default function Article() {

  const [data, setData] = useState({})
  const [comment, setComment] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch(`${url}/articles?slug=:slug`)
      .then((response) => response.json())
      .then((json) => setData(json))
  },[])

  useEffect(() => {
    fetch(`${url}/articles?slug=:slug/comments`)
      .then((response) => response.json())
      .then((json) => setComment(json))
  },[])

  useEffect(() => {
    fetch(`${url}/users`)
      .then((response) => response.json())
      .then((json) => setCurrentUser(json))
  },[])


  return (
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <ArticleHeader data={Object.keys(data).length ? data.article : []} />
        </div>
      </div>

      <div class="container page">
        <ArticleBody data={Object.keys(data).length ? data.article : []}/>

        <hr />

        <div class="article-actions">
          <ArticleAuthor data={Object.keys(data).length ? data.article.author : []}/>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <NewComment user={Object.keys(currentUser).length ? currentUser.user : []}/>
            <CommentPosted data={Object.keys(comment).length ? comment.comments : []}/>
          </div>
        </div>
      </div>
    </div>
  );
}
