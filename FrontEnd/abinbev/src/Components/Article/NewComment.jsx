import React from 'react'


export default function NewComment (props) {

    return (
        <form class="card comment-form">
              <div class="card-block">
                <textarea
                  class="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div class="card-footer">
                <img
                  src={props.image}
                  class="comment-author-img" alt='author-img'
                />
                <button class="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>
    )
}