import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className = 'bg-light-green dib br3 pa4 ma3 grow bw2 shadow-5'>
			<img  alt = 'robot' src = {`https://robohash.org/${id}?200*200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>

		</div>
		)
}


export default Card