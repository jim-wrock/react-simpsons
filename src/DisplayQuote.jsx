import React from "react";

const DisplayQuote = ({ quotes }) => {
	return (
		<div className="DisplayQuote">
			<h1> {quotes.character}</h1>
			<img src={quotes.image} alt="" />
			<h2>{quotes.quote}</h2>
		</div>
	);
};

export default DisplayQuote;
