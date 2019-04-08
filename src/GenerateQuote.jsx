import React from "react";

const GenerateQuote = ({ selectQuote }) => {
	return (
		<div className="DisplayQuote">
			<button onClick={selectQuote}>Get Quote</button>
		</div>
	);
};

export default GenerateQuote;
