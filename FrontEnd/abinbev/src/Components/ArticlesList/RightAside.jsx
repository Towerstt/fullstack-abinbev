import React from 'react'

export default function RightAside (props){
      const buildRightAside = (el, ind) =>{
        if (el[1].favoritesCount){
          return(
            <a href={`/${el[1].slug}`}><p key={el[0]}>{el[1].title}</p>
            <p className='text-muted'>{el[1].favoritesCount} likes</p></a>
          )
        }
    }

    const rigthAsideUi = props.data.map(buildRightAside)
      return (
        <div class="card" >
        <div class="card-body">
          <h5 class="card-title mb-5">Most Favorited</h5>
        {rigthAsideUi}
        </div>
          </div>
        );
}  