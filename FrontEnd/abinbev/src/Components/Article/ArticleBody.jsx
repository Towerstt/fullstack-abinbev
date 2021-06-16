import React from 'react'

export default function ArticleBody (props) {
    return(

        <div class="row article-content">
          <div class="col-md-12">
            <p>
              {props.data[0] && props.data[0][1].body}
            </p>
          </div>
        </div>
    )
}