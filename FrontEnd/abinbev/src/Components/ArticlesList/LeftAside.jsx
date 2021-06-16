import React from "react";

export default function LeftAside(props) {
  const tagArray = [];

  const buildLeftAside = (el, index) => {
    return (

          <a key={`la.${el[0]}`}href={`/articles?tag=${el}`}>
            <p>{el}</p>
          </a>

    );
  };

  props.data.map((article, ind) => {
    article[1].tagList.map((currentTag, index) => {
      if (!tagArray.includes(currentTag)) {
        tagArray.push(currentTag);
        return tagArray;
      }
    });
  });

  const leftAsideUi = tagArray.map(buildLeftAside);

  return (
    <div class="card" >
    <div class="card-body">
      <h5 class="card-title mb-5">Most Common Tags</h5>
    {leftAsideUi}
    </div>
      </div>
    );
}
