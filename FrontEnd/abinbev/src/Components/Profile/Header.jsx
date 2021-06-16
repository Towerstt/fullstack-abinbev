import React from "react";

export default function Header(props) {
  console.log(props.data);

  return (
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              src={props.data[0] && props.data[0][1].image}
              class="user-img"
              alt="avatar"
            />
            <h4>{props.data[0] && props.data[0][1].username}</h4>
            <p>Bio : {props.data[0] && props.data[0][1].bio}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {props.data[0] && props.data[0][1].username}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
