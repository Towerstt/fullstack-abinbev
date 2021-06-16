import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Components/Profile/Header";
import ArticlePreview from "../Components/Profile/ArticlePreview";

const url = "https://conduit.productionready.io/api";
export default function Profile() {
  const { username } = useParams();
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${url}/profiles/${username}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch(`${url}/articles?author=${username}`)
      .then((response) => response.json())
      .then((json) => setArticles(json));
  }, []);

  console.log(articles);
  return (
    <div class="profile-page">
      <Header data={Object.keys(data).length ? Object.entries(data) : []} />
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>
            <ArticlePreview
              data={
                Object.keys(articles).length ? Object.entries(articles) : []
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
