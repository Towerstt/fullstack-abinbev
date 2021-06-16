import React, { useEffect, useState } from "react";
import ArticleHeader from '../Components/Article/ArticleHeader'
import ArticleAuthor from '../Components/Article/ArticleAuthor'
import NewComment from "../Components/Article/NewComment";
import CommentPosted from "../Components/Article/CommentPosted";
import ArticleBody from "../Components/Article/ArticleBody";
import { useParams } from "react-router-dom";


const url = 'https://conduit.productionready.io/api'

export default function Article() {
  const {slug} = useParams()
  console.log(slug)
  const [data, setData] = useState({})
  const [comment, setComment] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch(`${url}/articles/${slug}`)
      .then((response) => response.json())
      .then((json) => setData(json))
  },[])

  useEffect(() => {
    fetch(`${url}/articles/${slug}/comments`)
      .then((response) => response.json())
      .then((json) => setComment(json))
  },[])

  useEffect(() => {
    fetch(`${url}/users`)
      .then((response) => response.json())
      .then((json) => setCurrentUser(json))
  },[])


  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <ArticleHeader data={Object.keys(data).length ? Object.entries(data) : []} />
        </div>
      </div>

      <div className="container page">
        <ArticleBody data={Object.keys(data).length ? Object.entries(data) : []}/>

        <hr />

        <div className="article-actions">
          <ArticleAuthor data={Object.keys(data).length ? Object.entries(data) : []}/>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <NewComment user={Object.keys(currentUser).length ? currentUser : {}}/>
            <CommentPosted data={Object.keys(comment).length ? comment : {}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
