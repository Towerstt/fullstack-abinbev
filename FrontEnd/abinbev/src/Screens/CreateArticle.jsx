import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import NewArticle from '../Components/CreateArticle/NewArticle'

const url = 'https://conduit.productionready.io/api'

export default function CreateArticle () {
    const {slug} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`${url}/articles/${slug}`)
          .then((response) => response.json())
          .then((json) => setData(json))
      },[])


    return(
        <div class="editor-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-10 offset-md-1 col-xs-12">
                        <NewArticle data={Object.keys(data).length ? Object.entries(data) : []} slug={slug ? slug : ''}/>
                    </div>
                </div>
            </div>
         </div>
    )
}