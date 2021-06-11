import React from 'react'

export default function ArticleBody (props) {

    return(

        <div class="row article-content">
          <div class="col-md-12">
            <p>
              {props.body}
            </p>
          </div>
        </div>
    )
}