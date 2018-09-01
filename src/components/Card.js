import React from 'react';

const Card = (props) => {
  const {name, email , id } = props;
  return (
         <div className='tc bg-light-green dib br3 pad2 ma2  bw2 shadow-5 grow'>
         <img src={`https://robohash.org/${id}?200x200` } alt='robots'/>
           <div>
            <h2>{name}</h2>
            <p>{email}</p>
           </div>
         </div>
 	);
}
export default Card;