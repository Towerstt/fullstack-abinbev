import React from 'react'

export default function RightAside (props){
      const buildRightAside = (el, ind) =>{
        if (el[1].favoritesCount){
          return(
            <React.Fragment> 
              <a key={`ra.${el[0]}`} href={`/${el[1].slug}`}><p className='my-0' style={{fontSize : "1.2rem" }}>{el[1].title}</p></a>
            <p className='text-muted' style={{fontSize : ".8rem" }}>{el[1].favoritesCount} likes</p>
            </React.Fragment>
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