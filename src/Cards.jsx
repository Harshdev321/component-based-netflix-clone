import  React from 'react';

function Card(props){
    return(
  <>
 
    <div className="cards">
      <div className="card">
        <img 
          src={ props.imagscr} 
          alt="mypic" 
          className="card_img"
        />
        <div className="card_info">
        <span className={props.title}>A Netflix Origiinal Series </span>
        <h3 className='card_title'> {props.sname} </h3>
        <a href={props.link} 
        
        target="blank">
            <button>Watch Now</button>
        </a>
       
     </div>
   </div>
  </div>
</>
    )
  
}

export default Card;