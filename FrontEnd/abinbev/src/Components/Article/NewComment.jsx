import React from 'react'
import { useHistory } from 'react-router-dom'


export default function NewComment (props) {
  const history = useHistory()

  const postNewComment = (event) =>{
    
    




    
  }

  const defaultImage= 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
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
                  src={props.user.image ? props.user.image : defaultImage}
                  class="comment-author-img" alt='author-img'
                />
                <button onClick={props.user.username && postNewComment()} class="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>
    )
}