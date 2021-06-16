import React, { useState } from "react";
import { useHistory } from "react-router";

const url = "https://conduit.productionready.io/api";

export default function NewArticle(props) {
  const { title, description, body, tagList } = props.data[0]
    ? props.data[0][1]
    : "";

  

  const [artTitle, setTitle] = useState(title);
  const [artDescription, setDescription] = useState(description);
  const [artBody, setBody] = useState(body);
  const [artTags, setTags] = useState(tagList);

  const history = useHistory();

  const postNewArticle = async (event) => {
    event.preventDefault();
    if(!localStorage.getItem('auth')){
      throw new Error ('You have to log in first')
    }
    try {
      const newArticleSlug = artTitle.replace(/ /g, "-");
      const newArticle = {
        article: {
          title: artTitle,
          slug: newArticleSlug,
          body: artBody,
          createdAt: new Date(Date.now()).toISOString(),
          tagList: artTags.split(" "),
          description: artDescription,
          author: {},
          favorited: false,
          favoritesCount: 0,
        },
      };
      const response = await fetch(`${url}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newArticle),
      });
      await response.json();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const updateArticle = async (event) => {
    event.preventDefault();
    try {
      const newArticle = JSON.stringify({
        article: {
          title: artTitle,
          body: artBody,
          updatedAt: new Date(Date.now()).toISOString(),
          tagList: artTags.split(" "),
          description: artDescription,
        },
      });
      const response = await fetch(`${url}/articles/${props.slug}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: newArticle,
      });
      await response.json();
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={props.slug ? updateArticle : postNewArticle}>
      <fieldset>
        <fieldset class="form-group">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder={title ? title : "Article Title"}
            onClick={(e) =>
              e.target.placeholder === title
                ? (e.target.value = e.target.placeholder)
                : ""
            }
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder={
              description ? description : "What's this article about?"
            }
            onClick={(e) =>
              e.target.placeholder === description
                ? (e.target.value = e.target.placeholder)
                : ""
            }
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <fieldset class="form-group">
          <textarea
            class="form-control"
            rows="8"
            placeholder={body ? body : "Write your article (in markdown)"}
            onClick={(e) =>
              e.target.placeholder === body
                ? (e.target.value = e.target.placeholder)
                : ""
            }
            onChange={(e) => setBody(e.target.value)}
          />
        </fieldset>
        <fieldset class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder={tagList ? tagList.join(" ") : "Enter tags"}
            onClick={(e) =>
              e.target.placeholder !== "Enter tags"
                ? (e.target.value = e.target.placeholder)
                : ""
            }
            onChange={(e) => setTags(e.target.value)}
          />
        </fieldset>
        <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
          {props.slug ? "Edit Article" : "Publish Article"}
        </button>
      </fieldset>
    </form>
  );
}
