import React, { useState, useEffect } from "react";
import LeftAside from "../Components/ArticlesList/LeftAside";
import GeneralContainer from "../Components/ArticlesList/GeneralContainer";
import RightAside from "../Components/ArticlesList/RightAside";

const url = "https://conduit.productionready.io/api";

export default function ArticlesList(props) {
  const [tags, setTags] = useState({});
  const [data, setData] = useState({});
  const [favs, setFavs] = useState({});
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    fetch(`${url}/tags`)
      .then((response) => response.json())
      .then((json) => setTags(json));
  }, []);

  useEffect(() => {
    fetch(`${url}/articles`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch(`${url}/user`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  // useEffect(() => {
  //   fetch(`${url}/articles?favorited=${currentUser}`)
  //     .then((response) => response.json())
  //     .then((json) => setFavs(json));

  // }, [currentUser]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <LeftAside
            data={Object.keys(data).length ? Object.entries(data.articles) : []}
          />
        </div>
        <div className="col-8">
          <GeneralContainer
            data={Object.keys(data).length ? Object.entries(data.articles) : []}
          />
        </div>
        <div className="col-2">
          <RightAside
            data={Object.keys(data).length ? Object.entries(data.articles) : []}
          />
        </div>
      </div>
    </div>
  );
}
